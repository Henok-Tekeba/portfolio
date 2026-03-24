import useWindowSize from '../hooks/useWindowSize'

const skillGroups = [
  { cat: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'Java'] },
  { cat: 'Frontend', skills: ['Next.js', 'React', 'Tailwind CSS', 'Vite'] },
  { cat: 'Backend', skills: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'] },
  { cat: 'Machine Learning', skills: ['PyTorch', 'HuggingFace', 'Whisper', 'LoRA Fine-tuning', 'XTTSv2'] },
  { cat: 'MLOps & Infra', skills: ['Kaggle GPU', 'wandb', 'Vercel', 'Railway'] },
  { cat: 'Tools', skills: ['Git', 'GitHub', 'Linux', 'Bash', 'VS Code'] },
]

export default function Skills() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="skills" style={{
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
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em' }}>04</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text-2)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>skills & tools</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      <div className="reveal d1" style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: '0',
        border: '1px solid var(--border)',
      }}>
        {skillGroups.map((group, i) => (
          <div key={i} style={{
            padding: '2rem',
            borderRight: !isMobile && i % 3 !== 2 ? '1px solid var(--border)' : 'none',
            borderBottom: isMobile && i < skillGroups.length - 1
              ? '1px solid var(--border)'
              : !isMobile && i < 3 ? '1px solid var(--border)' : 'none',
          }}>
            <p style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              color: 'var(--accent)',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>{group.cat}</p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {group.skills.map(skill => (
                <li key={skill} style={{
                  fontFamily: 'var(--display)',
                  fontWeight: 'var(--display-weight-light)',
                  fontSize: '0.95rem',
                  color: 'var(--text-2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-3)', flexShrink: 0 }} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}