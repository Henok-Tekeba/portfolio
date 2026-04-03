import { useEffect, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'

function getPresenceStatus() {
  const hourString = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    hour12: false,
    timeZone: 'Africa/Addis_Ababa',
  }).format(new Date())

  const hour = Number.parseInt(hourString, 10)

  if (hour >= 0 && hour < 6) {
    return { label: 'Currently Asleep', color: '#64748b' }
  }

  if ((hour >= 6 && hour < 9) || (hour >= 21 && hour < 24)) {
    return { label: 'Currently Idle', color: '#d4a853' }
  }

  return { label: 'Currently Building', color: '#3dbe76' }
}

export default function Hero() {
  const width = useWindowSize()
  const isMobile = width < 768
  const [presence, setPresence] = useState(getPresenceStatus)

  useEffect(() => {
    const timer = setInterval(() => {
      setPresence(getPresenceStatus())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 3rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1.25rem' : '1.6rem',
        marginBottom: '1.7rem',
      }}>
        <img
          src={`${import.meta.env.BASE_URL}heni.png`}
          alt="Henok Tekeba"
          style={{
            width: isMobile ? '122px' : '156px',
            height: isMobile ? '122px' : '156px',
            borderRadius: '1rem',
            objectFit: 'cover',
            border: '1px solid var(--border-2)',
            boxShadow: '0 10px 28px rgba(0,0,0,0.2)',
            flexShrink: 0,
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          <h1 style={{
            fontFamily: 'var(--title)',
            fontWeight: 'var(--display-weight-thin)',
            fontSize: isMobile ? 'clamp(1.8rem, 7.5vw, 2.35rem)' : 'clamp(1.9rem, 4.2vw, 3.2rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            textAlign: isMobile ? 'center' : 'left',
            whiteSpace: 'nowrap',
          }}>
            Henok <span style={{ color: 'var(--accent)' }}>Tekeba</span>
          </h1>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            border: '1px solid var(--border-2)',
            borderRadius: '999px',
            padding: '0.4rem 0.7rem',
            width: 'fit-content',
            alignSelf: isMobile ? 'center' : 'flex-start',
            background: 'color-mix(in srgb, var(--bg-2) 88%, transparent)',
          }}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: presence.color,
              boxShadow: `0 0 0 4px color-mix(in srgb, ${presence.color} 18%, transparent)`,
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.58rem',
              letterSpacing: '0.11em',
              textTransform: 'uppercase',
              color: 'var(--text-2)',
              lineHeight: 1,
            }}>
              {presence.label}
            </span>
          </div>
        </div>
      </div>

      {/* Role line */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2.5rem',
      }}>
        <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.18em',
          color: 'var(--text-2)',
          textTransform: 'uppercase',
        }}>
          AI Engineer · Full Stack Developer
        </p>
      </div>

      {/* Bio */}
      <p style={{
        fontFamily: 'var(--display)',
        fontWeight: 'var(--display-weight-light)',
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: 'var(--text-2)',
        maxWidth: '520px',
        lineHeight: 1.8,
        marginBottom: '3rem',
      }}>
        Building Amharic voice AI for Ethiopian banks and telecoms, while studying ECE at Addis Ababa University.
      </p>

      {/* CTA buttons */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="#projects" style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          color: 'var(--accent)',
          border: '1px solid var(--accent)',
          padding: '0.8rem 1.8rem',
          textDecoration: 'none',
          textTransform: 'lowercase',
          transition: 'all 0.2s',
          background: 'transparent',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--accent)'
            e.currentTarget.style.color = 'var(--bg)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--accent)'
          }}
        >
          view projects →
        </a>
        <a href="#contact" style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          color: 'var(--text-2)',
          border: '1px solid var(--border-2)',
          padding: '0.8rem 1.8rem',
          textDecoration: 'none',
          textTransform: 'lowercase',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--text-2)'
            e.currentTarget.style.color = 'var(--text)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border-2)'
            e.currentTarget.style.color = 'var(--text-2)'
          }}
        >
          get in touch
        </a>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '3rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        <div style={{
          width: '1px',
          height: '48px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
        }} />

      </div>

    </section>
  )
}