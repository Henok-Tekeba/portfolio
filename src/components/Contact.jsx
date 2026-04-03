import useWindowSize from '../hooks/useWindowSize'
import { Mail } from 'lucide-react'
import { SiGithub, SiHuggingface, SiX } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'

const links = [
  { label: 'Email', href: 'mailto:tekebahenok6@gmail.com', Icon: Mail },
  { label: 'GitHub', href: 'https://github.com/Henok-Tekeba', Icon: SiGithub, isBrand: true },
  { label: 'HuggingFace', href: 'https://huggingface.co/Henokk', Icon: SiHuggingface, isBrand: true },
  { label: 'X', href: 'https://x.com/HenaTeke', Icon: SiX, isBrand: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/henok-ayele-6ab58b356?', Icon: FaLinkedinIn, isBrand: true },
]

export default function Contact() {
  const width = useWindowSize()
  const isMobile = width < 768
  const firstRowLinks = links.slice(0, 3)
  const secondRowLinks = links.slice(3)

  const renderContactButton = ({ label, href, Icon, isBrand }) => (
    <a
      key={label}
      href={href}
      target={href.startsWith('mailto') ? '_self' : '_blank'}
      rel="noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.55rem',
        padding: '0.68rem 0.92rem',
        border: '1px solid var(--border-2)',
        borderRadius: '999px',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        color: 'var(--text-2)',
        background: 'color-mix(in srgb, var(--bg-2) 88%, transparent)',
        flex: '0 0 auto',
        lineHeight: 1,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.color = 'var(--text)'
        e.currentTarget.style.boxShadow = '0 0 0 1px color-mix(in srgb, var(--accent) 35%, transparent)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border-2)'
        e.currentTarget.style.color = 'var(--text-2)'
        e.currentTarget.style.boxShadow = 'none'
      }}
      aria-label={label}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        {isBrand
          ? <Icon size={13} style={{ opacity: 0.9 }} />
          : <Icon size={14} strokeWidth={1.5} style={{ opacity: 0.9 }} />}
      </span>
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.62rem',
        letterSpacing: '0.11em',
        textTransform: 'uppercase',
        lineHeight: 1,
      }}>
        {label}
      </span>
    </a>
  )

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

      <div>
        <h2 className="reveal" style={{
          fontFamily: 'var(--title)',
          fontWeight: 'var(--display-weight-thin)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          lineHeight: 1.1,
          color: 'var(--text)',
          marginBottom: '1.2rem',
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
          marginBottom: '1.6rem',
        }}>
          Open to internships, work, and AI collaborations.
        </p>

        {!isMobile && (
          <div className="reveal d1" style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '0.7rem',
            alignItems: 'center',
            overflowX: 'auto',
          }}>
            {links.map(renderContactButton)}
          </div>
        )}

        {isMobile && (
          <div className="reveal d1" style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.7rem', flexWrap: 'nowrap' }}>
              {firstRowLinks.map(renderContactButton)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.7rem', flexWrap: 'nowrap' }}>
              {secondRowLinks.map(renderContactButton)}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}