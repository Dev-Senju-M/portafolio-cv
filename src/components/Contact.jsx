import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-head">
          <span className="section-index">04</span>
          <h2 className="section-title">Contáctame</h2>
          <span className="section-line" />
        </div>

        <p className="contact-subtitle">
          Estoy abierto a oportunidades, prácticas y proyectos en el área de sistemas. Escríbeme y te respondo.
        </p>

        <div className="contact-links">
          <a href="mailto:bryantto2017ig@gmail.com" className="contact-card">
            <span className="contact-label">Correo</span>
            <span className="contact-value">bryantto2017ig@gmail.com</span>
          </a>
          <a
            href="https://github.com/Dev-Senju-M"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/Dev-Senju-M</span>
          </a>
        </div>
      </div>
    </section>
  )
}
