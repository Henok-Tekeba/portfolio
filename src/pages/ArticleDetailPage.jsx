import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import useWindowSize from '../hooks/useWindowSize'
import Footer from '../components/Footer'
import { getArticleBySlug } from '../content/articles'

export default function ArticleDetailPage() {
  useReveal()
  const width = useWindowSize()
  const isMobile = width < 768
  const { slug } = useParams()
  const article = getArticleBySlug(slug || '')
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

  if (!article || article.status.toLowerCase() !== 'published') {
    return <Navigate to="/articles" replace />
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
            to="/articles"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              color: 'var(--text-2)',
              textDecoration: 'none',
              textTransform: 'lowercase',
            }}
          >
            back to articles
          </Link>
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
          maxWidth: '860px',
          margin: '0 auto',
        }}
      >
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.85rem',
          }}
        >
          {article.date}
        </p>

        <h1
          className="reveal d1"
          style={{
            fontFamily: 'var(--title)',
            fontWeight: 'var(--display-weight-reg)',
            fontSize: isMobile ? 'clamp(1.35rem, 7vw, 2rem)' : 'clamp(1.7rem, 4vw, 2.6rem)',
            lineHeight: 1.2,
            color: 'var(--text)',
            marginBottom: '2rem',
          }}
        >
          {article.title}
        </h1>

        <div style={{ display: 'grid', gap: '1.15rem' }}>
          {article.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`reveal ${index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'}`}
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 'var(--display-weight-light)',
                fontSize: '0.98rem',
                color: 'var(--text-2)',
                lineHeight: 1.95,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
