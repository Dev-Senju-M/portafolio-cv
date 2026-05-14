import './Skills.css'

const skills = [
  { name: 'Python', level: 75, icon: '🐍' },
  { name: 'Java', level: 65, icon: '☕' },
  { name: 'JavaScript', level: 70, icon: '⚡' },
  { name: 'HTML', level: 85, icon: '🌐' },
  { name: 'CSS', level: 80, icon: '🎨' },
  { name: 'Claude AI / Terminal', level: 80, icon: '🤖' },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Mis <span>Skills</span></h2>
        <div className="skills-grid">
          {skills.map(({ name, level, icon }) => (
            <div className="skill-card" key={name}>
              <div className="skill-header">
                <span className="skill-icon">{icon}</span>
                <span className="skill-name">{name}</span>
                <span className="skill-level">{level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
