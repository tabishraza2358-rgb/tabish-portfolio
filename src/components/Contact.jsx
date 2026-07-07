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
              Tell me the goal and the deadline — I&apos;ll tell you honestly whether it&apos;s
              realistic, and what it takes to get there.
            </p>
          </div>

          <div className="contact__details">
            <a className="contact__row" href={`mailto:${profile.email}`}>
              <span className="contact__label">Email</span>
              <span className="contact__value">{profile.email}</span>
            </a>
            <a className="contact__row" href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
              <span className="contact__label">Phone</span>
              <span className="contact__value">{profile.phone}</span>
            </a>
            <div className="contact__row">
              <span className="contact__label">Based in</span>
              <span className="contact__value">{profile.location}</span>
            </div>

            <div className="contact__actions">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                Email me
              </a>
              <a href={profile.resumeUrl} className="btn btn-ghost">
                Download resume
              </a>
            </div>

            <div className="contact__socials">
              <a href={profile.socials.linkedin}>LinkedIn</a>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
