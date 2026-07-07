import site from '../data/site.json';
import './Ticker.css';

function Ticker() {
  const items = site.ticker;
  // Duplicate the list so the marquee loops seamlessly.
  const trackItems = [...items, ...items];

  return (
    <div className="ticker" role="presentation">
      <div className="ticker__live">
        <span className="ticker__dot" />
        LIVE
      </div>
      <div className="ticker__track-wrap">
        <ul className="ticker__track">
          {trackItems.map((item, index) => (
            <li className="ticker__item" key={`${item.label}-${index}`}>
              <span className="ticker__value">{item.value}</span>
              <span className="ticker__label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Ticker;
