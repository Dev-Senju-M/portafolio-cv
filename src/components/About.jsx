import './About.css'

const facts = [
  { key: 'Estudios', value: 'Ingeniería en Sistemas e Informática, Universidad Mariano Gálvez (2024 – actualidad)' },
  { key: 'Bachillerato', value: 'Ciencias y Letras con Orientación Científica, IGA (2021)' },
  { key: 'Experiencia', value: 'Operativo de bodega en La Bodegona: pedidos, logística e inventario' },
  { key: 'Idiomas', value: 'Español (nativo)' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <span className="section-index">01</span>
          <h2 className="section-title">Sobre mí</h2>
          <span className="section-line" />
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Soy estudiante de <strong>Ingeniería en Sistemas e Informática</strong> con interés
              en programación, diseño web y soporte técnico. En la universidad he trabajado en
              proyectos con Java, estructuras de datos y comunicación en red.
            </p>
            <p>
              Me considero <strong>responsable, puntual y orientado a resolver problemas</strong>.
              Mi paso por una bodega me enseñó a cumplir metas diarias y a trabajar en equipo.
              Busco un entorno profesional donde seguir creciendo académica y laboralmente.
            </p>
          </div>

          <dl className="about-facts">
            {facts.map(({ key, value }) => (
              <div className="fact" key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
