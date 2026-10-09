import './Skills.css'

const groups = [
  { title: 'Lenguajes', items: ['Java', 'Python', 'JavaScript', 'TypeScript'] },
  { title: 'Front-end', items: ['React', 'Next.js', 'Vite', 'Tailwind', 'HTML', 'CSS'] },
  { title: 'Back-end y datos', items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Drizzle ORM'] },
  { title: 'Herramientas', items: ['Git', 'GitHub', 'Docker', 'Railway', 'Vitest', 'Playwright'] },
  { title: 'Otros', items: ['Bots de Discord', 'Sockets TCP', 'Hilos', 'Estructuras de datos', 'Soporte técnico'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">Skills</h2>
          <span className="section-line" />
        </div>

        <div className="skills-grid">
          {groups.map(({ title, items }) => (
            <div className="skill-group" key={title}>
              <h3 className="skill-group-title">{title}</h3>
              <ul className="skill-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
