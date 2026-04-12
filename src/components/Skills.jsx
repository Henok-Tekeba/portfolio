import {
  SiExpress,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiHuggingface,
  SiJavascript,
  SiKaggle,
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

const skillGroups = [
  {
    title: 'Languages',
    items: [
      { key: 'python', Icon: SiPython, color: '#3776AB' },
      { key: 'typescript', Icon: SiTypescript, color: '#3178C6' },
      { key: 'javascript', Icon: SiJavascript, color: '#F7DF1E' },
      { key: 'java', Icon: SiOpenjdk, color: '#E76F00' },
    ],
  },
  {
    title: 'Web & Backend',
    items: [
      { key: 'nextjs', Icon: SiNextdotjs, color: '#F5F5F5' },
      { key: 'react', Icon: SiReact, color: '#61DAFB' },
      { key: 'tailwind', Icon: SiTailwindcss, color: '#38BDF8' },
      { key: 'nodejs', Icon: SiNodedotjs, color: '#339933' },
      { key: 'express', Icon: SiExpress, color: '#B3B3B3' },
      { key: 'postgres', Icon: SiPostgresql, color: '#336791' },
      { key: 'openapi', Icon: SiOpenapiinitiative, color: '#6BA539' },
      { key: 'railway', Icon: SiRailway, color: '#0B0D0E' },
    ],
  },
  {
    title: 'ML & Tooling',
    items: [
      { key: 'pytorch', Icon: SiPytorch, color: '#EE4C2C' },
      { key: 'huggingface', Icon: SiHuggingface, color: '#FFD21E' },
      { key: 'openai', Icon: SiOpenai, color: '#412991' },
      { key: 'kaggle', Icon: SiKaggle, color: '#20BEFF' },
      { key: 'colab', Icon: SiGooglecolab, color: '#F9AB00' },
      { key: 'wandb', Icon: SiWeightsandbiases, color: '#FFCC00' },
      { key: 'git', Icon: SiGit, color: '#F05032' },
      { key: 'github', Icon: SiGithub, color: '#F5F5F5' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '8rem 3rem',
      position: 'relative',
      zIndex: 1,
    }}>

      <div className="section-heading reveal" style={{ marginBottom: '2rem' }}>
        <h2 className="section-heading-title">Skills & Tools</h2>
        <div className="section-heading-rule" />
      </div>

      <div className="reveal d1 skills-groups">
        {skillGroups.map(group => (
          <section key={group.title} className="skills-group" aria-label={group.title}>
            <h3 className="skills-group-title">{group.title}</h3>
            <div className="skills-grid">
              {group.items.map(skill => {
                const Icon = skill.Icon

                return (
                  <article
                    key={skill.key}
                    className="skills-card"
                    aria-label={skill.key}
                  >
                    <div className="skills-card-icon" style={{ '--skill-color': skill.color }}>
                      <Icon aria-hidden="true" focusable="false" style={{ opacity: 0.9 }} />
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}