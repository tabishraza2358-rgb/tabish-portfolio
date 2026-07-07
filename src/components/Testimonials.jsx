import site from '../data/site.json';
import './Testimonials.css';

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function Testimonials() {
  const { testimonials } = site;

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Client Notes</span>
          <h2>What it's like to work together</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <blockquote className="testimonials__card" key={testimonial.name}>
              <p className="testimonials__quote">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="testimonials__footer">
                <span className="testimonials__avatar">{initials(testimonial.name)}</span>
                <div>
                  <cite className="testimonials__name">{testimonial.name}</cite>
                  <span className="testimonials__role">{testimonial.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
