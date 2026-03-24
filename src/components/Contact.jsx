import useWindowSize from '../hooks/useWindowSize'

const links = [
  { label: 'Email', value: 'tekebahenok6@gmail.com', href: 'mailto:tekebahenok6@gmail.com' },
  { label: 'GitHub', value: '@Henok-Tekeba', href: 'https://github.com/Henok-Tekeba' },
  { label: 'HuggingFace', value: 'Henokk', href: 'https://huggingface.co/Henokk' },
  { label: 'X (Twitter)', value: '@YOUR_HANDLE', href: 'https://x.com/YOUR_HANDLE' },
  { label: 'LinkedIn', value: 'Henok Kebede', href: 'https://linkedin.com/in/henok-ayele-6ab58b356/' },
]

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
)

export default function Contact() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="contact" style={{
      padding: isMobile ? '5rem 1.5rem' : '8rem 3rem',
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid var(--border)',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>

      <div className="reveal" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '4rem',
      }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em' }}>05</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text-2)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>contact</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '3rem' : '6rem',
        alignItems: 'start',
      }}>
        <div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-thin)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 1.1,
            color: 'var(--text)',
            marginBottom: '1.5rem',
          }}>
            Let's build<br />
            <span style={{ color: 'var(--accent)' }}>something.</span>
          </h2>
          <p className="reveal d1" style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '1rem',
            color: 'var(--text-2)',
            lineHeight: 1.8,
          }}>
            Open to internships, research collaborations, and summer programs.
            If you're working on something meaningful in AI or systems — I'd love to talk.
          </p>
        </div>

        <div className="reveal d1">
          {links.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noreferrer"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 0',
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none',
                transition: 'all 0.2s',
                color: 'inherit',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.paddingLeft = '0.5rem'
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.paddingLeft = '0'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--text-3)', textTransform: 'uppercase' }}>{label}</span>
              <span style={{ fontFamily: 'var(--display)', fontWeight: 'var(--display-weight-light)', fontSize: '0.9rem', color: 'var(--text-2)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {value} <ArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}