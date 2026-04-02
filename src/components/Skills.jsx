import {
  SiGithub,
  SiGnubash,
  SiGit,
  SiGooglecolab,
  SiHuggingface,
  SiJavascript,
  SiKaggle,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiOpenjdk,
  SiExpress,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiLinux,
  SiRailway,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWeightsandbiases,
} from 'react-icons/si'
import {
  FaCubes,
  FaMicrophone,
  FaNetworkWired,
  FaSlidersH,
  FaWaveSquare,
} from 'react-icons/fa'

const skillItems = [
  { name: 'Python', category: 'Language', Icon: SiPython, color: '#3776AB' },
  { name: 'TypeScript', category: 'Language', Icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', category: 'Language', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Java', category: 'Language', Icon: SiOpenjdk, color: '#E76F00' },
  { name: 'Next.js', category: 'Frontend', Icon: SiNextdotjs, color: '#F5F5F5' },
  { name: 'React', category: 'Frontend', Icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', category: 'Frontend', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Node.js', category: 'Backend', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', category: 'Backend', Icon: SiExpress, color: '#B3B3B3' },
  { name: 'PostgreSQL', category: 'Backend', Icon: SiPostgresql, color: '#336791' },
  { name: 'REST APIs', category: 'Backend', Icon: FaNetworkWired, color: '#D4A853' },
  { name: 'PyTorch', category: 'ML', Icon: SiPytorch, color: '#EE4C2C' },
  { name: 'HuggingFace', category: 'ML', Icon: SiHuggingface, color: '#FFD21E' },
  { name: 'Whisper', category: 'ML', Icon: SiOpenai, color: '#412991' },
  { name: 'LoRA Fine tuning', category: 'ML', Icon: FaSlidersH, color: '#D4A853' },
  { name: 'XTTSv2', category: 'ML', Icon: FaWaveSquare, color: '#3DBE76' },
  { name: 'Kaggle', category: 'MLOps', Icon: SiKaggle, color: '#20BEFF' },
  { name: 'Google Colab', category: 'MLOps', Icon: SiGooglecolab, color: '#F9AB00' },
  { name: 'wandb', category: 'MLOps', Icon: SiWeightsandbiases, color: '#FFCC00' },
  { name: 'Railway', category: 'MLOps', Icon: SiRailway, color: '#0B0D0E' },
  { name: 'Git', category: 'Tools', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', category: 'Tools', Icon: SiGithub, color: '#F5F5F5' },
  { name: 'Linux', category: 'Tools', Icon: SiLinux, color: '#FCC624' },
  { name: 'Bash', category: 'Tools', Icon: SiGnubash, color: '#4EAA25' },
]

const marqueeSkills = [...skillItems, ...skillItems]

export default function Skills() {
  return (
    <section id="skills" style={{
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
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.15em' }}>04</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--text-2)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>skills & tools</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      <div className="reveal d1 skills-marquee-shell">
        <div className="skills-marquee-rail">
          <div className="skills-marquee-track">
            {marqueeSkills.map((skill, index) => {
              const isDuplicate = index >= skillItems.length
              const Icon = skill.Icon

              return (
                <article
                  key={`${skill.name}-${index}`}
                  className="skills-card"
                  aria-hidden={isDuplicate}
                >
                  <div className="skills-card-icon" style={{ color: skill.color }}>
                    <Icon aria-hidden="true" focusable="false" />
                  </div>
                  <div className="skills-card-copy">
                    <p className="skills-card-name">{skill.name}</p>
                    <p className="skills-card-category">{skill.category}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}