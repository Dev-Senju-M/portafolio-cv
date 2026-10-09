import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-greeting">$ whoami</p>
          <h1 className="hero-name">
            Bryant Alexander
            <br />
            Tó Castillo
          </h1>
          <h2 className="hero-title">Estudiante de Ingeniería en Sistemas e Informática</h2>
          <p className="hero-desc">
            Busco un puesto como desarrollador junior (front-end o back-end) o analista.
            Desarrollo sistemas web full stack con React, Next.js y PostgreSQL; uno de
            ellos ya lo usa una hermandad de 59 personas.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="/cv-bryant-to-castillo.pdf" className="btn btn-outline" download>
              Descargar CV
            </a>
          </div>
        </div>

        <div className="terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="terminal-file">perfil.js</span>
          </div>
          <pre className="terminal-body">
            <code>
              <span className="k">const</span> <span className="v">bryant</span> = {'{'}
              {'\n'}  <span className="p">carrera</span>: <span className="s">"Ing. en Sistemas e Informática"</span>,
              {'\n'}  <span className="p">universidad</span>: <span className="s">"UMG"</span>,
              {'\n'}  <span className="p">busco</span>: <span className="s">"Desarrollador junior"</span>,
              {'\n'}  <span className="p">lenguajes</span>: [<span className="s">"Java"</span>, <span className="s">"JavaScript"</span>,
              {'\n'}              <span className="s">"TypeScript"</span>],
              {'\n'}  <span className="p">stack</span>: [<span className="s">"React"</span>, <span className="s">"Next.js"</span>,
              {'\n'}           <span className="s">"PostgreSQL"</span>],
              {'\n'}  <span className="p">ubicacion</span>: <span className="s">"Sacatepéquez, Guatemala"</span>,
              {'\n'}  <span className="p">disponible</span>: <span className="b">true</span>,
              {'\n'}{'}'}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
