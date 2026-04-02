import { useEffect, useMemo, useRef, useState } from 'react'
import { SiGithub } from 'react-icons/si'
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
    const visibleCells = cells
      .filter(cell => cell.column >= startWeek)
      .map(cell => ({
        ...cell,
        column: cell.column - startWeek,
      }))

    return { cells: visibleCells, totalWeeks: visibleWeeks, totalCount }
  }, [data, isMobile])

  function showCellTooltip(cell, event) {
    if (!stageRef.current) return

    const stageRect = stageRef.current.getBoundingClientRect()
    const cellRect = event.currentTarget.getBoundingClientRect()
    const left = cellRect.left - stageRect.left + (cellRect.width / 2)
    const top = cellRect.top - stageRect.top - 6

    setActiveCell({
      count: cell.count,
      date: cell.date,
      left,
      top,
    })
  }

  return (
    <section id="github-graph" className="commit-graph-section">
      <div className="reveal commit-graph-shell">
        <div className="commit-graph-topbar">
          <div className="commit-graph-heading">
            <span className="commit-graph-mark">
              <SiGithub aria-hidden="true" focusable="false" />
            </span>
            <div>
              <p className="commit-graph-kicker">github commit graph</p>
              <h2 className="commit-graph-title">Henok-Tekeba</h2>
            </div>
          </div>

          <a className="commit-graph-user" href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
            @{username}
          </a>
        </div>

        <div className="commit-graph-stage" ref={stageRef}>
          {status === 'loading' && (
            <div className="commit-graph-state">
              <span>Loading real GitHub contribution data...</span>
            </div>
          )}

          {status === 'error' && (
            <div className="commit-graph-state">
              <span>Could not load the graph right now.</span>
              <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
                Open GitHub profile
              </a>
            </div>
          )}

          {status === 'ready' && graph && (
            <>
              <div className="commit-graph-meta">
                <span>{graph.totalCount} contributions in the last year</span>
              </div>

              <div className="commit-graph-grid-wrap">
                <div className="commit-graph-days" aria-hidden="true">
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>

                <div
                  className="commit-graph-grid"
                  style={{ gridTemplateColumns: `repeat(${graph.totalWeeks}, var(--commit-cell-size))` }}
                  role="img"
                  aria-label={`GitHub contribution heatmap for ${username}`}
                >
                  {graph.cells.map(cell => (
                    <span
                      key={cell.date}
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
                      tabIndex={0}
                    />
                  ))}
                </div>
              </div>

              {activeCell && (
                <div
                  className="commit-graph-tooltip-inline"
                  role="status"
                  aria-live="polite"
                  style={{ left: `${activeCell.left}px`, top: `${activeCell.top}px` }}
                >
                  {activeCell.count} {activeCell.count === 1 ? 'contribution' : 'contributions'} on {formatDateLabel(activeCell.date)}
                </div>
              )}

              <div className="commit-graph-footer">
                <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
                  View profile
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
