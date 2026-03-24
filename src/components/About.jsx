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
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.2,
            color: 'var(--text)',
            marginBottom: '2rem',
          }}>
            Building the infrastructure<br />
            <span style={{ color: 'var(--accent)' }}>Ethiopia's AI future</span><br />
            needs.
          </h2>

          <p className="reveal d1" style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '1rem',
            color: 'var(--text-2)',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}>
            I'm a second year Electrical and Computer Engineering student at
            Addis Ababa University, and the founder of voiET an Amharic
            voice AI startup targeting Ethiopian banks and telecoms.
          </p>

          <p className="reveal d2" style={{
            fontFamily: 'var(--display)',
            fontWeight: 'var(--display-weight-light)',
            fontSize: '1rem',
            color: 'var(--text-2)',
            lineHeight: 1.9,
          }}>
            My work sits at the intersection of full-stack engineering and
            machine learning fine tuning AI models for better Amharic AI products , building
            TTS pipelines, and shipping production systems that actually work
            for Ethiopian users.
          </p>
        </div>

        <div className="reveal d1" style={{ paddingTop: '0.5rem' }}>
          {[
            { label: 'Location', value: 'Addis Ababa, Ethiopia' },
            { label: 'University', value: 'Addis Ababa University' },
            { label: 'Degree', value: 'BSc Electrical & Computer Engineering' },
            { label: 'Year', value: 'Second Year' },
            { label: 'Startup', value: 'voiET — Amharic Voice AI' },
            { label: 'HuggingFace', value: 'Henokk' },
            { label: 'Status', value: 'Open to internships & collaborations' },
          ].map(({ label, value }) => (
            <div key={label} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              padding: '0.9rem 0',
              borderBottom: '1px solid var(--border)',
              gap: '2rem',
            }}>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                color: 'var(--text-3)',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}>{label}</span>
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