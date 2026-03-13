import { services } from '../data/siteContent.js'
import Icon from './Icon.jsx'
import SectionIntro from './SectionIntro.jsx'

function ServicesSection() {
  return (
    <section className="services" id="services">
      <SectionIntro
        label="Ways I Can Help"
        title="Support that fits where your site is"
        emphasis="right now."
        description="Whether you need a simple page, a fuller site, or help improving what already exists, we can choose an approach that makes sense for your business."
        className="section-intro--compact"
      />

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">
              <Icon name={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
