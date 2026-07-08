import { useEffect, useState } from 'react';
import projects from '../data/projects.json';
import './Projects.css';

function Projects() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!activeImage) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveImage(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [activeImage]);

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Selected Social Meida Post's</span>
          <h2>High Engaging Content</h2>
          <p>Social media graphics, branding materials, and digital creatives designed to increase engagement and strengthen brand identity.</p>
         
        </div>

        <div className="work__grid">
          {projects.map((project) => (
            <article className="work__card" key={project.id}>
              {project.image && (
                <button
                  type="button"
                  className="work__chart"
                  onClick={() => setActiveImage(project)}
                  aria-label={`View full results graph for ${project.client}`}
                >
                  <img src={project.image} alt={`Results graph for ${project.client}`} loading="lazy" />
                  <span className="work__chart-hint">View full graph ↗</span>
                </button>
              )}

            
            </article>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          className="work__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.client} results graph`}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="work__lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={activeImage.image}
            alt={`Results graph for ${activeImage.client}`}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Projects;
