import { GraduationCap, MapPin, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" style={{
      padding: '8rem 3rem',
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
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.65rem',
          color: 'var(--accent)',
          letterSpacing: '0.15em',
        }}>01</span>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.65rem',
          color: 'var(--text-2)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>about</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        maxWidth: '1000px',
      }}>
        <div>
          <h2 className="reveal" style={{
            fontFamily: 'var(--title)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.2,
            color: 'var(--text)',
            marginBottom: '2rem',
          }}>
            Portfolio of an
            <span style={{ color: 'var(--accent)' }}> Ethiopian AI engineer.</span>
          </h2>

          <p className="reveal d1" style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '1rem',
            color: 'var(--text-2)',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}>
            I am a second-year ECE student at Addis Ababa University and founder of voiET, focused on practical Amharic voice AI.
          </p>

          <p className="reveal d2" style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '1rem',
            color: 'var(--text-2)',
            lineHeight: 1.9,
          }}>
            This work spans model fine-tuning, speech pipelines, and full-stack delivery for teams in Ethiopia.
          </p>
        </div>

        <div className="reveal d1" style={{ paddingTop: '0.5rem' }}>
          {[
            { key: 'location', value: 'Addis Ababa, Ethiopia', Icon: MapPin },
            { key: 'university', value: 'Addis Ababa University', Icon: GraduationCap },
            { key: 'status', value: 'Open to internships & collaborations', Icon: Sparkles },
          ].map(({ key, value, Icon }) => (
            <div key={key} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              padding: '0.9rem 0',
              borderBottom: '1px solid var(--border)',
              gap: '2rem',
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--text-3)' }}>
                <Icon size={15} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span style={{
                fontFamily: 'var(--display)',
                fontWeight: 'var(--display-weight-light)',
                fontSize: '0.9rem',
                color: 'var(--text-2)',
                textAlign: 'right',
              }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}