import { useEffect, useState } from 'react'

const links = ['about', 'experience', 'projects', 'skills', 'contact']

export default function Nav() {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: sticky ? '1rem 3rem' : '1.5rem 3rem',
      background: sticky ? 'rgba(8,8,8,0.92)' : 'transparent',
      borderBottom: sticky ? '1px solid var(--border)' : '1px solid transparent',
      backdropFilter: sticky ? 'blur(12px)' : 'none',
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
        HK<span style={{ color: 'var(--text-3)', margin: '0 0.3rem' }}>/</span>dev
      </a>

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
    </nav>
  )
}