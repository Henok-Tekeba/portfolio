export default function Footer() {
  return (
    <footer style={{
      padding: '2.5rem 3rem',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
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
    </footer>
  )
}