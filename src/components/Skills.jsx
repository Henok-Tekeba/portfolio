import {
  SiExpress,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGooglecolab,
  SiHuggingface,
  SiJavascript,
  SiKaggle,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiRailway,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWeightsandbiases,
  SiOpenapiinitiative,
} from 'react-icons/si'

const skillItems = [
  { name: 'Python', category: 'Language', Icon: SiPython, color: '#3776AB', isBrand: true },
  { name: 'TypeScript', category: 'Language', Icon: SiTypescript, color: '#3178C6', isBrand: true },
  { name: 'JavaScript', category: 'Language', Icon: SiJavascript, color: '#F7DF1E', isBrand: true },
  { name: 'Java', category: 'Language', Icon: SiOpenjdk, color: '#E76F00', isBrand: true },
  { name: 'Next.js', category: 'Frontend', Icon: SiNextdotjs, color: '#F5F5F5', isBrand: true },
  { name: 'React', category: 'Frontend', Icon: SiReact, color: '#61DAFB', isBrand: true },
  { name: 'Tailwind CSS', category: 'Frontend', Icon: SiTailwindcss, color: '#38BDF8', isBrand: true },
  { name: 'Node.js', category: 'Backend', Icon: SiNodedotjs, color: '#339933', isBrand: true },
  { name: 'Express', category: 'Backend', Icon: SiExpress, color: '#B3B3B3', isBrand: true },
  { name: 'PostgreSQL', category: 'Backend', Icon: SiPostgresql, color: '#336791', isBrand: true },
  { name: 'REST APIs', category: 'Backend', Icon: SiOpenapiinitiative, color: '#6BA539', isBrand: true },
  { name: 'PyTorch', category: 'ML', Icon: SiPytorch, color: '#EE4C2C', isBrand: true },
  { name: 'HuggingFace', category: 'ML', Icon: SiHuggingface, color: '#FFD21E', isBrand: true },
  { name: 'Whisper', category: 'ML', Icon: SiOpenai, color: '#412991', isBrand: true },
  { name: 'LoRA Fine tuning', category: 'ML', Icon: SiHuggingface, color: '#FFD21E', isBrand: true },
  { name: 'XTTSv2', category: 'ML', Icon: SiPytorch, color: '#EE4C2C', isBrand: true },
  { name: 'Kaggle', category: 'MLOps', Icon: SiKaggle, color: '#20BEFF', isBrand: true },
  { name: 'Google Colab', category: 'MLOps', Icon: SiGooglecolab, color: '#F9AB00', isBrand: true },
  { name: 'wandb', category: 'MLOps', Icon: SiWeightsandbiases, color: '#FFCC00', isBrand: true },
  { name: 'Railway', category: 'MLOps', Icon: SiRailway, color: '#0B0D0E', isBrand: true },
  { name: 'Git', category: 'Tools', Icon: SiGit, color: '#F05032', isBrand: true },
  { name: 'GitHub', category: 'Tools', Icon: SiGithub, color: '#F5F5F5', isBrand: true },
  { name: 'Linux', category: 'Tools', Icon: SiLinux, color: '#FCC624', isBrand: true },
  { name: 'Bash', category: 'Tools', Icon: SiGnubash, color: '#4EAA25', isBrand: true },
]

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

      <div className="reveal d1 skills-grid">
        {skillItems.map(skill => {
          const Icon = skill.Icon

          return (
            <article
              key={skill.name}
              className="skills-card"
            >
              <div className="skills-card-icon" style={{ '--skill-color': skill.color }}>
                <Icon aria-hidden="true" focusable="false" style={{ opacity: 0.9 }} />
              </div>
              <div className="skills-card-copy">
                <p className="skills-card-name">{skill.name}</p>
                <p className="skills-card-category">{skill.category}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}