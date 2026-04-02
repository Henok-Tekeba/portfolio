import { useEffect, useMemo, useRef, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'

const username = 'Henok-Tekeba'
const apiUrl = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
const refreshIntervalMs = 1000 * 60 * 60 * 6

function getStartSunday(dateString) {
  const date = new Date(`${dateString}T00:00:00`)
  const day = date.getDay()
  date.setDate(date.getDate() - day)
  return date
}

function formatDateLabel(dateString) {
  const date = new Date(`${dateString}T00:00:00`)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function GitHubCommitGraph() {
  const width = useWindowSize()
  const isMobile = width < 768
  const stageRef = useRef(null)
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('loading')
  const [activeCell, setActiveCell] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    let intervalId = null

    async function loadContributions(signal) {
      try {
        setStatus('loading')
        const response = await fetch(apiUrl, { signal })

        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`)
        }

        const json = await response.json()
        setData(json)
        setStatus('ready')
      } catch (error) {
        if (error.name === 'AbortError') {
          return
        }

        setStatus('error')
      }
    }

    loadContributions(controller.signal)

    intervalId = setInterval(() => {
      loadContributions(undefined)
    }, refreshIntervalMs)

    return () => {
      controller.abort()
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  const graph = useMemo(() => {
    if (!data?.contributions?.length) return null

    const contributions = data.contributions
    const firstDate = contributions[0].date
    const startDate = getStartSunday(firstDate)

    const cells = contributions.map(entry => {
      const date = new Date(`${entry.date}T00:00:00`)
      const diffDays = Math.round((date - startDate) / 86400000)
      const column = Math.floor(diffDays / 7)
      const row = date.getDay()

      return {
        ...entry,
        column,
        row,
        label: `${entry.count} contributions on ${formatDateLabel(entry.date)}`,
      }
    })

    const totalWeeks = Math.max(...cells.map(cell => cell.column)) + 1
    const totalCount = data.total?.lastYear ?? cells.reduce((sum, cell) => sum + cell.count, 0)
    const visibleWeeks = isMobile ? Math.min(20, totalWeeks) : totalWeeks
    const startWeek = totalWeeks - visibleWeeks
    const visibleStartDate = new Date(startDate)
    visibleStartDate.setDate(visibleStartDate.getDate() + startWeek * 7)
    const visibleCells = cells
      .filter(cell => cell.column >= startWeek)
      .map(cell => ({
        ...cell,
        column: cell.column - startWeek,
      }))

    let activeDays = 0
    for (const cell of visibleCells) {
      if (cell.count > 0) activeDays += 1
    }

    const monthLabels = []
    for (let column = 0; column < visibleWeeks; column += 1) {
      const tickDate = new Date(visibleStartDate)
      tickDate.setDate(visibleStartDate.getDate() + column * 7)

      if (column === 0 || tickDate.getDate() <= 7) {
        monthLabels.push({
          column,
          label: tickDate.toLocaleString('en-US', { month: 'short' }),
        })
      }
    }

    return {
      cells: visibleCells,
      totalWeeks: visibleWeeks,
      totalCount,
      activeDays,
      monthLabels,
    }
  }, [data, isMobile])

  function showCellTooltip(cell, event) {
    if (!stageRef.current) return

    const stageRect = stageRef.current.getBoundingClientRect()
    const cellRect = event.currentTarget.getBoundingClientRect()
    const leftRaw = cellRect.left - stageRect.left + (cellRect.width / 2)
    const left = Math.max(26, Math.min(leftRaw, stageRect.width - 26))
    const spaceAbove = cellRect.top - stageRect.top
    const placeBelow = spaceAbove < 34
    const top = placeBelow
      ? cellRect.bottom - stageRect.top + 8
      : cellRect.top - stageRect.top - 8

    setActiveCell({
      count: cell.count,
      date: cell.date,
      left,
      top,
      placeBelow,
    })
  }

  return (
    <section id="github-graph" className="commit-graph-section reveal">
      <div className="commit-graph-topbar">
        <h2 className="commit-graph-title">GitHub Activity</h2>
        {status === 'ready' && graph && (
          <p className="commit-graph-summary">
            {graph.totalCount} contributions last 12 months
          </p>
        )}
      </div>

      <div className="commit-graph-stage" ref={stageRef}>
        {status === 'loading' && (
          <div className="commit-graph-state">
            <span>Loading contributions...</span>
          </div>
        )}

        {status === 'error' && (
          <div className="commit-graph-state">
            <span>Could not load activity right now.</span>
            <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
              Open GitHub profile
            </a>
          </div>
        )}

        {status === 'ready' && graph && (
          <>
            <div className="commit-graph-grid-wrap">
              <div className="commit-graph-days" aria-hidden="true">
                <span />
                <span>Mon</span>
                <span />
                <span>Wed</span>
                <span />
                <span>Fri</span>
                <span />
              </div>

              <div className="commit-graph-board">
                <div className="commit-graph-months" aria-hidden="true">
                  {graph.monthLabels.map(month => (
                    <span
                      key={`${month.label}-${month.column}`}
                      style={{ gridColumn: month.column + 1 }}
                    >
                      {month.label}
                    </span>
                  ))}
                </div>

                <div
                  className="commit-graph-grid"
                  style={{ gridTemplateColumns: `repeat(${graph.totalWeeks}, var(--commit-cell-size))` }}
                  role="img"
                  aria-label={`GitHub contribution heatmap for ${username}`}
                >
                  {graph.cells.map(cell => (
                    <button
                      key={cell.date}
                      type="button"
                      className={`commit-cell intensity-${cell.level}`}
                      style={{
                        gridColumn: cell.column + 1,
                        gridRow: cell.row + 1,
                      }}
                      title={cell.label}
                      aria-label={cell.label}
                      onMouseEnter={event => showCellTooltip(cell, event)}
                      onMouseMove={event => showCellTooltip(cell, event)}
                      onMouseLeave={() => setActiveCell(null)}
                      onFocus={event => showCellTooltip(cell, event)}
                      onBlur={() => setActiveCell(null)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {activeCell && (
              <div
                className={`commit-graph-tooltip-inline ${activeCell.placeBelow ? 'is-below' : ''}`}
                role="status"
                aria-live="polite"
                style={{ left: `${activeCell.left}px`, top: `${activeCell.top}px` }}
              >
                {activeCell.count} {activeCell.count === 1 ? 'contribution' : 'contributions'} on {formatDateLabel(activeCell.date)}
              </div>
            )}

            <div className="commit-graph-footer">
              <span>{graph.activeDays} active days</span>
              <div className="commit-graph-legend" aria-hidden="true">
                <span>Less</span>
                {[0, 1, 2, 3, 4].map(level => (
                  <span key={level} className={`commit-cell legend-cell intensity-${level}`} />
                ))}
                <span>More</span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
