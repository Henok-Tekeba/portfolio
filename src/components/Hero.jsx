export default function Hero() {
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

      {/* Top label */}
      <p style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        color: 'var(--text-3)',
        textTransform: 'uppercase',
        marginBottom: '2rem',
      }}>
        Addis Ababa, Ethiopia — 2026
      </p>

      {/* Name */}
      <h1 style={{
        fontFamily: 'var(--display)',
        fontWeight: 'var(--display-weight-thin)',
        fontSize: 'clamp(3.5rem, 10vw, 9rem)',
        lineHeight: 1.0,
        letterSpacing: '-0.02em',
        color: 'var(--text)',
        marginBottom: '1.5rem',
      }}>
        Henok<br />
        <span style={{ color: 'var(--accent)' }}>Tekeba</span>
      </h1>

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