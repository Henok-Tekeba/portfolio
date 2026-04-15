import useWindowSize from '../hooks/useWindowSize'

const projects = [
  {
    name: 'voiET',
    tag: 'AI Startup',
    desc: 'Built an Amharic voice AI pipeline around fine-tuned speech recognition models, with the goal of making voice interfaces practical for Ethiopian users and local products.',
    tags: ['PyTorch', 'Whisper', 'LoRA', 'HuggingFace', 'Amharic ASR'],
    link: 'https://huggingface.co/Henokk',
    linkLabel: 'View model work ->',
    image: 'pro2.jpg',
  },
  {
    name: 'voiET Landing Page',
    tag: 'Full Stack',
    desc: 'Designed and shipped a production waitlist platform with a Next.js frontend, Express backend, PostgreSQL database, and live deployment for real signups.',
    tags: ['Next.js', 'Tailwind', 'Node.js', 'PostgreSQL', 'Railway'],
    link: 'https://voiet.vercel.app',
    linkLabel: 'Visit live site ->',
    image: 'pro3.jpg',
  },
  {
    name: 'VEX Robotics',
    tag: 'Robotics',
    desc: 'Worked on robotics with the AAU VEX team, contributing to autonomous behavior, debugging, and the constant cycle of testing hardware against reality.',
    tags: ['Python', 'Design', 'Autonomous', 'VEX'],
    link: '#',
    linkLabel: 'Team project',
  },
  {
    name: 'Addis Cars Image Classifier',
    tag: 'Machine Learning',
    desc: 'Collected street-level data in Addis Ababa, built a custom dataset, and trained a classifier to test how far self-directed data collection can push a local ML project.',
    tags: ['Python', 'TensorFlow', 'Computer Vision', 'Dataset Collection'],
    link: 'https://github.com/Henok-Tekeba/Addis-Cars-Image-Classifier',
    linkLabel: 'Open GitHub ->',
  },
  {
    name: 'iCog Labs Landing Page',
    tag: 'Frontend',
    desc: "Redesigned and built a sharper landing page concept for iCog Labs as an end-to-end frontend exercise in taste, structure, and shipping.",
    tags: ['TypeScript', 'React'],
    link: 'https://icog.vercel.app',
    linkLabel: 'Visit live site ->',
    image: 'pro1.jpg',
  },
  {
    name: 'X Electron Wrapper',
    tag: 'Linux',
    desc: 'Built a lightweight Electron wrapper for X on Linux to make a tool I already used feel cleaner, faster to open, and easier to keep around daily.',
    tags: ['JavaScript', 'Electron', 'Linux'],
    link: 'https://github.com/Henok-Tekeba/X-electron_wrapper',
    linkLabel: 'Open GitHub ->',
  },
]

export default function Projects() {
  const width = useWindowSize()
  const isMobile = width < 768

  return (
    <section id="projects" style={{
      padding: isMobile ? '5rem 1.5rem' : '8rem 3rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div className="section-heading reveal">
        <h2 className="section-heading-title">Projects</h2>
        <div className="section-heading-rule" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {projects.map((p, i) => (
          <div
            key={i}
            className={`reveal ${i > 0 ? `d${i}` : ''}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '2.5rem 0',
              borderBottom: '1px solid var(--border)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,168,83,0.02)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
              <h3 style={{ fontFamily: 'var(--title)', fontWeight: 'var(--display-weight-reg)', fontSize: '1.2rem', color: 'var(--text)' }}>{p.name}</h3>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.6rem',
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                border: '1px solid rgba(212,168,83,0.3)',
                padding: '0.2rem 0.6rem',
              }}>{p.tag}</span>
            </div>

            <p style={{
              fontFamily: 'var(--display)',
              fontWeight: 'var(--display-weight-light)',
              fontSize: '0.95rem',
              color: 'var(--text-2)',
              lineHeight: 1.8,
            }}>{p.desc}</p>

            {p.image && (
              <div style={{
                width: '100%',
                maxWidth: 'none',
                aspectRatio: '16 / 9',
                minHeight: isMobile ? '190px' : '270px',
                position: 'relative',
                borderRadius: '0.9rem',
                border: '1px solid color-mix(in srgb, var(--border) 72%, transparent)',
                background: 'var(--bg-2)',
                overflow: 'hidden',
                lineHeight: 0,
                margin: isMobile ? '0.35rem 0 0.2rem' : '0.5rem 0 0.35rem',
              }}>
                <img
                  src={`${import.meta.env.BASE_URL}${p.image}`}
                  alt={`${p.name} preview`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {p.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  color: 'var(--text-3)',
                  border: '1px solid var(--border)',
                  padding: '0.3rem 0.75rem',
                  textTransform: 'uppercase',
                }}>{tag}</span>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                color: 'var(--text-3)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                alignSelf: 'flex-start',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
            >
              {p.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
