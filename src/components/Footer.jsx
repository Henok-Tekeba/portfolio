export default function Footer() {
  return (
    <footer style={{
      padding: '2.5rem 3rem',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.1rem',
      position: 'relative',
      zIndex: 1,
    }}>
      <figure style={{ textAlign: 'center' }}>
        <blockquote style={{
          fontFamily: 'var(--title)',
          fontSize: 'clamp(1.15rem, 3.1vw, 2rem)',
          lineHeight: 1,
          letterSpacing: '0.03em',
          textTransform: 'uppercase',
          color: 'var(--text)',
        }}>
          "never tell me the odds"
        </blockquote>
        <figcaption style={{
          marginTop: '0.55rem',
          fontFamily: 'var(--mono)',
          fontSize: '0.56rem',
          letterSpacing: '0.11em',
          textTransform: 'uppercase',
          color: 'var(--text-3)',
        }}>
          by Jeff Bezos
        </figcaption>
      </figure>

      <div style={{ display: 'flex', gap: '1.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      <p style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.1em',
        color: 'var(--text-3)',
      }}>
        © 2026 <span style={{ color: 'var(--text-2)' }}>Henok Tekeba</span>
      </p>
      <p style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.1em',
        color: 'var(--text-3)',
      }}>
        Addis Ababa, Ethiopia
      </p>
      </div>
    </footer>
  )
}