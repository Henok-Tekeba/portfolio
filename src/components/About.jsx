import { GraduationCap, MapPin, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" style={{
      padding: '5.5rem 3rem 8rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div className="section-heading reveal">
        <h2 className="section-heading-title">About</h2>
        <div className="section-heading-rule" />
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
            I build things.
            <span style={{ color: 'var(--accent)' }}> Then I make them work.</span>
          </h2>

          <p className="reveal d1" style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '1rem',
            color: 'var(--text-2)',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}>
            Second-year ECE student at AAU. I fine-tune speech models, ship full-stack products, and think deeply about what Ethiopian tech could look like in 10 years.
          </p>

          <p className="reveal d2" style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '1rem',
            color: 'var(--text-2)',
            lineHeight: 1.9,
          }}>
            My work sits at the intersection of ML and real life: Amharic speech recognition, voice interfaces, and software that actually runs in Ethiopia, not just on paper.
          </p>
        </div>

        <div className="reveal d1" style={{ paddingTop: '0.5rem' }}>
          {[
            { key: 'location', value: 'Addis Ababa, Ethiopia', Icon: MapPin },
            { key: 'university', value: 'Addis Ababa University', Icon: GraduationCap },
            { key: 'status', value: 'Open to internships & people building real things', Icon: Sparkles },
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