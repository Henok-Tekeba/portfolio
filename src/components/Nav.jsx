import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import useWindowSize from '../hooks/useWindowSize'

const links = [
  { key: 'about', type: 'anchor' },
  { key: 'experience', type: 'anchor' },
  { key: 'projects', type: 'anchor' },
  { key: 'articles', type: 'route' },
  { key: 'skills', type: 'anchor' },
  { key: 'contact', type: 'anchor' },
]

export default function Nav() {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const width = useWindowSize()
  const isMobile = width < 768
  const desktopInset = 'max(1rem, calc((100vw - var(--shell-width)) / 2))'

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
      return
    }

    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        left: isMobile ? 0 : desktopInset,
        right: isMobile ? 0 : desktopInset,
        padding: isMobile ? '1rem 1.5rem' : sticky ? '1rem 2rem' : '1.25rem 2rem',
        background: sticky || menuOpen ? 'color-mix(in srgb, var(--bg) 92%, transparent)' : 'transparent',
        borderBottom: sticky || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: sticky || menuOpen ? 'blur(12px)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        <a href="#" style={{
          fontFamily: 'var(--title)',
          fontSize: '0.8rem',
          letterSpacing: '0.15em',
          color: 'var(--accent)',
          textDecoration: 'none',
          textTransform: 'uppercase',
        }}>
          HT
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {links.map((link, i) => {
              const sharedStyle = {
                fontFamily: 'var(--mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: 'var(--text-2)',
                textDecoration: 'none',
                textTransform: 'lowercase',
                transition: 'color 0.2s',
              }

              if (link.type === 'route') {
                return (
                  <Link
                    key={link.key}
                    to="/articles"
                    style={sharedStyle}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
                  >
                    <span style={{ color: 'var(--text-3)', marginRight: '0.3rem' }}>
                      0{i + 1}.
                    </span>
                    {link.key}
                  </Link>
                )
              }

              return (
                <a
                  key={link.key}
                  href={`#${link.key}`}
                  style={sharedStyle}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
                >
                  <span style={{ color: 'var(--text-3)', marginRight: '0.3rem' }}>
                    0{i + 1}.
                  </span>
                  {link.key}
                </a>
              )
            })}

            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              style={{
                border: '1px solid var(--border-2)',
                background: 'transparent',
                color: 'var(--text-2)',
                width: '2.2rem',
                height: '2.2rem',
                borderRadius: '999px',
                cursor: 'pointer',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              {theme === 'dark' ? <Sun size={13} strokeWidth={1.5} /> : <Moon size={13} strokeWidth={1.5} />}
            </button>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <aside style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              style={{
                border: '1px solid var(--border-2)',
                background: 'transparent',
                color: 'var(--text-2)',
                width: '2.2rem',
                height: '2.2rem',
                borderRadius: '999px',
                cursor: 'pointer',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              {theme === 'dark' ? <Sun size={13} strokeWidth={1.5} /> : <Moon size={13} strokeWidth={1.5} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: '4px',
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block',
                  width: '22px',
                  height: '1px',
                  background: menuOpen && i === 1 ? 'transparent' : 'var(--accent)',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                    : i === 2 ? 'rotate(-45deg) translate(4px, -4px)'
                    : 'none'
                    : 'none',
                  transition: 'all 0.3s ease',
                }} />
              ))}
            </button>
          </aside>
        )}
      </nav>

      {/* Mobile menu dropdown */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          top: '56px',
          left: 0, right: 0,
          zIndex: 999,
          background: 'color-mix(in srgb, var(--bg) 97%, transparent)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem',
          gap: '1.5rem',
        }}>
          {links.map((link, i) => {
            const sharedStyle = {
              fontFamily: 'var(--mono)',
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              color: 'var(--text-2)',
              textDecoration: 'none',
              textTransform: 'lowercase',
            }

            if (link.type === 'route') {
              return (
                <Link
                  key={link.key}
                  to="/articles"
                  onClick={() => setMenuOpen(false)}
                  style={sharedStyle}
                >
                  <span style={{ color: 'var(--accent)', marginRight: '0.5rem' }}>0{i + 1}.</span>
                  {link.key}
                </Link>
              )
            }

            return (
              <a
                key={link.key}
                href={`#${link.key}`}
                onClick={() => setMenuOpen(false)}
                style={sharedStyle}
              >
                <span style={{ color: 'var(--accent)', marginRight: '0.5rem' }}>0{i + 1}.</span>
                {link.key}
              </a>
            )
          })}

        </div>
      )}
    </>
  )
}