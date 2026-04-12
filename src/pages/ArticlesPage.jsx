import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import useWindowSize from '../hooks/useWindowSize'
import ArticleCard from '../components/ArticleCard'
import Footer from '../components/Footer'
import { articles } from '../content/articles'

export default function ArticlesPage() {
  useReveal()
  const width = useWindowSize()
  const isMobile = width < 768
  const [theme, setTheme] = useState('dark')
  const desktopInset = 'max(1rem, calc((100vw - var(--shell-width)) / 2))'

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
    <div className="app-shell">
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: isMobile ? 0 : desktopInset,
          right: isMobile ? 0 : desktopInset,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: isMobile ? '1rem 1.5rem' : '1rem 2rem',
          background: 'color-mix(in srgb, var(--bg) 92%, transparent)',
          borderBottom: '1px solid var(--border)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: 'var(--title)',
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            color: 'var(--accent)',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          HT
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            to="/"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              color: 'var(--text-2)',
              textDecoration: 'none',
              textTransform: 'lowercase',
            }}
          >
            01. home
          </Link>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              color: 'var(--accent)',
              textTransform: 'lowercase',
            }}
          >
            02. articles
          </span>
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
      </nav>

      <main
        style={{
          padding: isMobile ? '6.8rem 1.5rem 3rem' : '7.2rem 3rem 4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="section-heading reveal">
          <h1 className="section-heading-title">Articles</h1>
          <div className="section-heading-rule" />
        </div>

        <p
          className="reveal d1"
          style={{
            maxWidth: '700px',
            marginBottom: '2rem',
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '0.95rem',
            color: 'var(--text-2)',
            lineHeight: 1.8,
          }}
        >
          I am documenting my journey with practical notes on product building, AI work, and student engineering.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
            gap: '1rem',
          }}
        >
          {articles.map((article, index) => (
            <ArticleCard
              key={article.title}
              article={article}
              delayClass={index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
