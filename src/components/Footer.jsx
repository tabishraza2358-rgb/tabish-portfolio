import site from '../data/site.json';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__row">
        <span>© {year} {site.profile.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
