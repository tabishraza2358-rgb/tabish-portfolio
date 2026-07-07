import site from '../data/site.json';
import './About.css';

function About() {
  const { about } = site;

  return (
    <section id="about" className="section about">
      <div className="container about__row">
        <div className="section-head about__head">
          <span className="eyebrow">About</span>
          <h2>{about.heading}</h2>
        </div>

        <div className="about__body">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="about__paragraph">
              {paragraph}
            </p>
          ))}

          <div className="about__stats">
            {about.stats.map((stat) => (
              <div className="about__stat" key={stat.label}>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
