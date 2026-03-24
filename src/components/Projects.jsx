import useWindowSize from '../hooks/useWindowSize'

const projects = [
  {
    num: '01',
    name: 'voiET',
    tag: 'AI Startup',
    desc: 'Amharic voice AI platform targeting Ethiopian banks and telecoms. Fine-tuned Whisper Medium for Amharic ASR achieving significant WER reduction. Building XTTSv2-based TTS pipeline trained on the Google WAXAL dataset.',
    tags: ['PyTorch', 'Whisper', 'LoRA', 'HuggingFace', 'Amharic ASR'],
    link: 'https://huggingface.co/Henokk',
    linkLabel: 'HuggingFace →',
  },
  {
    num: '02',
    name: 'voiET Landing Page',
    tag: 'Full Stack',
    desc: 'Production waitlist platform built with Next.js, Tailwind CSS, Node.js, Express, and PostgreSQL. Deployed on Vercel and Railway with a strict feature-branch Git workflow.',
    tags: ['Next.js', 'Tailwind', 'Node.js', 'PostgreSQL', 'Railway'],
    link: '#',
    linkLabel: 'Live Site →',
  },
  {
    num: '03',
    name: 'VEX Robotics',
    tag: 'Embedded Systems',
    desc: 'Representing Addis Ababa University in the nationwide VEX Robotics competition. Working on autonomous control systems, embedded programming, and mechanical design.',
    tags: ['C++', 'Embedded', 'Autonomous', 'VEX'],
    link: '#',
    linkLabel: 'View Project →',
  },
  {
    num: '04',
    name: 'Addis Cars Image Classifier',
    tag: 'Machine Learning',
    desc: 'Collecting a real-world dataset of popular cars in Addis Ababa and training a TensorFlow image classifier. Built to learn ML fundamentals while solving a locally relevant problem.',
    tags: ['Python', 'TensorFlow', 'Computer Vision', 'Dataset Collection'],
    link: 'https://github.com/Henok-Tekeba/Addis-Cars-Image-Classifier',
    linkLabel: 'GitHub →',
  },
  {
    num: '05',
    name: 'Icog Labs Landing Page',
    tag: 'Frontend',
    desc: "Landing page built for Icog Labs, one of Ethiopia's leading AI research organizations. Delivered as a real client project.",
    tags: ['TypeScript', 'React'],
    link: 'https://github.com/Henok-Tekeba/Icog',
    linkLabel: 'GitHub →',
  },
  {
    num: '06',
    name: 'X Electron Wrapper',
    tag: 'Linux',
    desc: 'Minimal Electron wrapper for X (Twitter) on Linux with rounded corners. Built out of personal need — because Linux deserves a better X experience.',
    tags: ['JavaScript', 'Electron', 'Linux'],
    link: 'https://github.com/Henok-Tekeba/X-electron_wrapper',
    linkLabel: 'GitHub →',
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
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em' }}>03</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text-2)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>projects</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
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
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.1em' }}>{p.num}</span>
              <h3 style={{ fontFamily: 'var(--display)', fontWeight: 'var(--display-weight-reg)', fontSize: '1.2rem', color: 'var(--text)' }}>{p.name}</h3>
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