import site from '../data/site.json';
import './Services.css';

const TAGS = ['PAID', 'SEO', 'FLOW', 'DATA'];

function Services() {
  const { services } = site;

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Services</span>
          <h2>Where I actually move the needle</h2>
          <p>Four disciplines, one funnel. I pick whichever combination your growth stage needs.</p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article className="services__card" key={service.title}>
              <span className="services__tag">{TAGS[index] ?? '—'}</span>
              <h3>{service.title}</h3>
              <p className="services__desc">{service.description}</p>
              <ul className="services__list">
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
