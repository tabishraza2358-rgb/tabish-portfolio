import { useEffect, useState } from 'react';
import results from '../data/results.json';
import './Results.css';

function Results() {
  const [activeResult, setActiveResult] = useState(null);

  useEffect(() => {
    if (!activeResult) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveResult(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [activeResult]);

  return (
    <section id="results" className="section results">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Results</span>
          <h2>Monthly &amp; overall performance</h2>
          
        </div>

        <div className="results__grid">
          {results.map((result) => (
            <button
              type="button"
              className="results__card"
              key={result.id}
              onClick={() => setActiveResult(result)}
              aria-label={`View full graph: ${result.title}`}
            >
              <div className="results__image-wrap">
                <img src={result.image} alt={result.title} loading="lazy" />
                <span className="results__hint">View full graph ↗</span>
              </div>
              
            </button>
          ))}
        </div>
      </div>

      {activeResult && (
        <div
          className="results__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeResult.title}
          onClick={() => setActiveResult(null)}
        >
          <button
            type="button"
            className="results__lightbox-close"
            onClick={() => setActiveResult(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={activeResult.image} alt={activeResult.title} />
            <figcaption>
              <strong>{activeResult.title}</strong>
              <span>{activeResult.period}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

export default Results;
