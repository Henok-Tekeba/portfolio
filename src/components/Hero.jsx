import { useEffect, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'

const rotatingHeadlines = [
  '20 . engineer',
  'Always learning',
  'Grinding every day',
  'Hustling',
]

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
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [isHeadlineVisible, setIsHeadlineVisible] = useState(true)
  const [isLiveDotOn, setIsLiveDotOn] = useState(true)
  const [presence, setPresence] = useState(getPresenceStatus)

  useEffect(() => {
    const headlineTimer = setInterval(() => {
      setIsHeadlineVisible(false)

      setTimeout(() => {
        setHeadlineIndex(prev => (prev + 1) % rotatingHeadlines.length)
        setIsHeadlineVisible(true)
      }, 220)
    }, 2500)

    return () => clearInterval(headlineTimer)
  }, [])

  useEffect(() => {
    const liveDotTimer = setInterval(() => {
      setIsLiveDotOn(prev => !prev)
    }, 1000)

    return () => clearInterval(liveDotTimer)
  }, [])

  useEffect(() => {
    const presenceTimer = setInterval(() => {
      setPresence(getPresenceStatus())
    }, 60000)

    return () => clearInterval(presenceTimer)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: isMobile ? '68vh' : '74vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: isMobile ? '5.8rem 1.5rem 2rem' : '7.2rem 3rem 2rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: isMobile ? '0.9rem' : '1.6rem',
        marginBottom: '1.7rem',
      }}>
        <img
          src={`${import.meta.env.BASE_URL}heni.png`}
          alt="Henok Tekeba"
          style={{
            width: isMobile ? '74px' : '116px',
            height: isMobile ? '74px' : '116px',
            borderRadius: 0,
            objectFit: 'cover',
            border: '1px solid var(--border-2)',
            boxShadow: '0 10px 28px rgba(0,0,0,0.2)',
            flexShrink: 0,
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          <h1 style={{
            fontFamily: 'var(--title)',
            fontWeight: 'var(--display-weight-thin)',
            fontSize: isMobile ? 'clamp(1.55rem, 7.2vw, 2.15rem)' : 'clamp(1.9rem, 4.2vw, 3.2rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            textAlign: 'left',
          }}>
            Henok <span style={{ color: 'var(--accent)' }}>Tekeba</span>
          </h1>

          <p style={{
            fontFamily: 'var(--title)',
            fontSize: isMobile ? '0.68rem' : '0.78rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-2)',
            minHeight: '1.2rem',
            opacity: isHeadlineVisible ? 1 : 0,
            transform: isHeadlineVisible ? 'translateY(0)' : 'translateY(5px)',
            transition: 'opacity 0.22s ease, transform 0.22s ease',
          }}>
            {rotatingHeadlines[headlineIndex]}
          </p>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            width: 'fit-content',
            alignSelf: 'flex-start',
          }}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: presence.color,
              boxShadow: `0 0 0 4px color-mix(in srgb, ${presence.color} 18%, transparent)`,
              flexShrink: 0,
              opacity: isLiveDotOn ? 1 : 0.58,
              transition: 'opacity 0.65s ease',
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
        I am a developer in Addis Ababa building practical Amharic AI tools while studying Electrical and Computer Engineering at AAU.
      </p>

    </section>
  )
}