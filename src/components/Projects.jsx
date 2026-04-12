import useWindowSize from '../hooks/useWindowSize'

const projects = [
  {
    name: 'voiET',
    tag: 'AI Startup',
    desc: 'I fine-tuned Whisper on 38K+ Amharic samples and built a full voice AI pipeline for Ethiopian banks and telecoms. This is my main bet.',
    tags: ['PyTorch', 'Whisper', 'LoRA', 'HuggingFace', 'Amharic ASR'],
    link: 'https://huggingface.co/Henokk',
    linkLabel: 'HuggingFace →',
    image: 'pro2.png',
  },
  {
    name: 'voiET Landing Page',
    tag: 'Full Stack',
    desc: 'I learned backend from scratch and shipped a real waitlist platform with a Next.js frontend plus an Express and PostgreSQL backend, deployed and live.',
    tags: ['Next.js', 'Tailwind', 'Node.js', 'PostgreSQL', 'Railway'],
    link: 'https://voiet.vercel.app',
    linkLabel: 'Live Site →',
    image: 'pro3.png',
  },
  {
    name: 'VEX Robotics',
    tag: 'Robotics',
    desc: 'Our AAU team competing in VEX - autonomous control, embedded C++, and a lot of late nights figuring out why the robot disagrees with us.',
    tags: ['C++', 'Embedded', 'Autonomous', 'VEX'],
    link: '#',
    linkLabel: 'View Project →',
  },
  {
    name: 'Addis Cars Image Classifier',
    tag: 'Machine Learning',
    desc: "Built my own dataset from Addis streets and trained a classifier on it. If the data doesn't exist, I collect it myself.",
    tags: ['Python', 'TensorFlow', 'Computer Vision', 'Dataset Collection'],
    link: 'https://github.com/Henok-Tekeba/Addis-Cars-Image-Classifier',
    linkLabel: 'GitHub →',
  },
  {
    name: 'iCog Labs Landing Page',
    tag: 'Frontend',
    desc: "I redesigned iCog Labs' website unprompted because I believed I could do it better, then built it, deployed it, and shared it.",
    tags: ['TypeScript', 'React'],
    link: 'https://icog.vercel.app',
    linkLabel: 'Live Site →',
    image: 'pro1.png',
  },
  {
    name: 'X Electron Wrapper',
    tag: 'Linux',
    desc: 'Needed a cleaner way to use X on Linux. Wrapped it in Electron. Small project, but I like shipping things I actually use.',
    tags: ['JavaScript', 'Electron', 'Linux'],
    link: 'https://github.com/Henok-Tekeba/X-electron_wrapper',
    linkLabel: 'GitHub →',
  },
]

export default function Projects() {
  const width = useWindowSize()
  const isMobile = width < 768
  const imageBackdrop = `${import.meta.env.BASE_URL}Backhgroundimg.jpg`

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
                position: 'relative',
                borderRadius: '0.9rem',
                border: '1px solid color-mix(in srgb, var(--border) 72%, transparent)',
                backgroundImage: `url(${imageBackdrop})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                lineHeight: 0,
              }}>
                <img
                  src={`${import.meta.env.BASE_URL}${p.image}`}
                  alt={`${p.name} preview`}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: 0,
                    opacity: 1,
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