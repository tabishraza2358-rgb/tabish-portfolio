import site from '../data/site.json';
import profilePhoto from '../assets/profile.png';
import './Hero.css';

function Hero() {
  const { profile } = site;

  return (
    <section id="top" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__row">
        <div className="hero__copy">
          <span className="eyebrow">{profile.role}</span>
          <h1 className="hero__headline">
           I turn ad spend into revenue everyone can measure.
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#work" className="btn btn-primary">
              See the work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Book a call
            </a>
          </div>

          <div className="hero__meta">
            <span>{profile.location}</span>
            <span className="hero__meta-dot" />
            <span>Open to new engagements</span>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img src={profilePhoto} alt={`Portrait of ${profile.name}`} />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-label">Avg. campaign ROAS</span>
            <span className="hero__badge-value">4.6x</span>
          </div>
          <div className="hero__ring" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="92" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
