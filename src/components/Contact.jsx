import site from '../data/site.json';
import './Contact.css';

function Contact() {
  const { profile } = site;

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__panel">
          <div className="contact__copy">
            <span className="eyebrow">Contact</span>

            <h2>Got a growth number you need to hit?</h2>

            <p>
              Tell me the goal and the deadline — I'll tell you honestly whether
              it's realistic, and what it takes to get there.
            </p>
          </div>

          <div className="contact__details">
            <a
              className="contact__row"
              href={`mailto:${profile.email}`}
            >
              <span className="contact__label">Email</span>
              <span className="contact__value">{profile.email}</span>
            </a>

            <a
              className="contact__row"
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            >
              <span className="contact__label">Phone</span>
              <span className="contact__value">{profile.phone}</span>
            </a>

            <div className="contact__row">
              <span className="contact__label">Based in</span>
              <span className="contact__value">{profile.location}</span>
            </div>

            <div className="contact__actions">
              <a
                href={`mailto:${profile.email}`}
                className="btn btn-primary"
                target='_blank'
              >
                Email Me
              </a>

              <a
                href={profile.resumeUrl}
                className="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>

            <div className="contact__socials">
              <a
                href="https://www.linkedin.com/in/tabishraza23"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
