import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre <span>mí</span></h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Soy estudiante de <strong>Ingeniería en Sistemas e Informática</strong>, con
              interés en programación, diseño web, mantenimiento de equipo y desarrollo
              de soluciones tecnológicas.
            </p>
            <p>
              Me considero una persona <strong>responsable, puntual y dedicada</strong>,
              con valores firmes y orientación a la resolución de problemas. Busco
              desarrollarme en un entorno profesional que me permita seguir creciendo
              académica y laboralmente.
            </p>
          </div>
          <div className="about-cards">
            <div className="info-card">
              <span className="card-icon">🎓</span>
              <div>
                <strong>Educación</strong>
                <p>Ingeniería en Sistemas e Informática</p>
              </div>
            </div>
            <div className="info-card">
              <span className="card-icon">💡</span>
              <div>
                <strong>Intereses</strong>
                <p>Programación · Diseño web · IA</p>
              </div>
            </div>
            <div className="info-card">
              <span className="card-icon">🌍</span>
              <div>
                <strong>Idiomas</strong>
                <p>Español (nativo)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
