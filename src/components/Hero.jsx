import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hola, me llamo</p>
        <h1 className="hero-name">Bryant Alexander<br />To Castillo</h1>
        <h2 className="hero-title">Estudiante de Ingeniería en Sistemas e Informática</h2>
        <p className="hero-desc">
          Apasionado por la programación, el diseño web y el desarrollo de soluciones
          tecnológicas innovadoras.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Ver proyectos</a>
          <a href="#contact" className="btn btn-outline">Contactar</a>
        </div>
      </div>
      <div className="hero-badge">
        <span>{'</>'}</span>
      </div>
    </section>
  )
}
