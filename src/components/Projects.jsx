import './Projects.css'

const projects = [
  {
    name: 'San Bartolo Asistencias',
    badge: 'Proyecto propio · full stack · en uso',
    desc: 'Sistema web en uso por una hermandad de 59 personas para controlar la asistencia: roles y permisos, actividades, avisos, comisiones, auditoría y reporte mensual en Excel. Lo desarrollé completo: API en Express y TypeScript con PostgreSQL y sesiones seguras, e interfaz en React con pruebas.',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Tailwind', 'Docker', 'Railway'],
    url: 'https://github.com/Dev-Senju-M/San-Bartolo-Asistencias-',
    destacado: true,
  },
  {
    name: 'ShadowBot REVO',
    badge: 'Proyecto propio · bot de Discord',
    desc: 'Bot todo en uno para comunidades gamer: moderación, niveles, torneos, economía, música y registros de seguridad. Incluye chat con IA (OpenAI), alertas de Twitch y publicación automática de la tienda de Fortnite. 110 commits, desplegado en Railway.',
    tags: ['Node.js', 'discord.js', 'OpenAI API', 'Railway'],
    url: 'https://github.com/Dev-Senju-M/ShadowBot-REVO',
    destacado: true,
  },
  {
    name: 'Centuria Inscripciones',
    badge: 'Proyecto propio · full stack · en pruebas',
    desc: 'Formulario público de inscripción y panel de administración para la Centuria Romana de San Bartolo 2026. Lo desarrollé completo: registro con fotos y documentos, gráficos, exportación a Excel y pruebas unitarias, de integración y de extremo a extremo.',
    tags: ['Next.js', 'React', 'Prisma', 'PostgreSQL', 'Docker', 'Playwright'],
    url: 'https://github.com/Dev-Senju-M/centuria-inscripciones',
    destacado: true,
  },
  {
    name: 'Nexus Solutions',
    badge: 'Emprendimiento en equipo',
    desc: 'Emprendimiento de desarrollo web con dos compañeros, donde participo como desarrollador full stack: sitios, tiendas en línea y paneles administrativos a medida, en Next.js.',
    tags: ['Next.js', 'Full stack', 'Web'],
    demo: 'https://nexus-solutions.site/',
  },
  {
    name: 'Sistema de Soporte Técnico IT',
    badge: 'Proyecto universitario · UMG · 2026',
    desc: 'Trabajo del curso Programación III: sistema distribuido en Java 21 y JavaFX con cinco nodos por sockets TCP, colas de atención, un hilo por cliente y árbol B+ para buscar el historial por DPI.',
    tags: ['Java 21', 'JavaFX', 'Maven', 'Sockets TCP', 'Hilos', 'Árbol B+'],
    url: 'https://github.com/Dev-Senju-M/SoporteTecnicoIT',
  },
]

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <span className="section-index">03</span>
          <h2 className="section-title">Proyectos</h2>
          <span className="section-line" />
        </div>

        <div className="projects-grid">
          {projects.map(({ name, badge, desc, tags, url, demo, destacado }, i) => (
            <article
              className={`project-card ${i === 0 ? 'featured' : ''} ${destacado ? 'highlight' : ''}`}
              key={name}
            >
              <div className="project-top">
                <span className="project-badge">{badge}</span>
                <div className="project-icons">
                  {demo && (
                    <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Ver sitio de ${name}`}>
                      <ExternalIcon />
                    </a>
                  )}
                  {url && (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Ver ${name} en GitHub`}>
                      <GithubIcon />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-name">{name}</h3>
              <p className="project-desc">{desc}</p>
              <ul className="project-tags">
                {tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
