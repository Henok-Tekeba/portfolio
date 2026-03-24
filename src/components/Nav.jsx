import { useEffect, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'

const links = ['about', 'experience', 'projects', 'skills', 'contact']

export default function Nav() {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const width = useWindowSize()
  const isMobile = width < 768

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '1rem 1.5rem' : sticky ? '1rem 3rem' : '1.5rem 3rem',
        background: sticky || menuOpen ? 'rgba(8,8,8,0.92)' : 'transparent',
        borderBottom: sticky || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: sticky || menuOpen ? 'blur(12px)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        <a href="#" style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.8rem',
          letterSpacing: '0.15em',
          color: 'var(--accent)',
          textDecoration: 'none',
          textTransform: 'uppercase',
        }}>
          HT<span style={{ color: 'var(--text-3)', margin: '0 0.3rem' }}>/</span>dev
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {links.map((link, i) => (
              <a
                key={link}
                href={`#${link}`}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  color: 'var(--text-2)',
                  textDecoration: 'none',
                  textTransform: 'lowercase',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
              >
                <span style={{ color: 'var(--text-3)', marginRight: '0.3rem' }}>
                  0{i + 1}.
                </span>
                {link}
              </a>
            ))}
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
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
        )}
      </nav>

      {/* Mobile menu dropdown */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          top: '56px',
          left: 0, right: 0,
          zIndex: 999,
          background: 'rgba(8,8,8,0.97)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem',
          gap: '1.5rem',
        }}>
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                color: 'var(--text-2)',
                textDecoration: 'none',
                textTransform: 'lowercase',
              }}
            >
              <span style={{ color: 'var(--accent)', marginRight: '0.5rem' }}>0{i + 1}.</span>
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  )
}