import { Linkedin, Twitter, Github } from 'lucide-react';
import './Footer.css';
const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>Fred</h3>
            <p>Fullstack Developer</p>
          </div>

          <nav className="footer-nav">
            <a onClick={() => scrollToSection('services')}>Services</a>
            <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </nav>

          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© FredrickBonyo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
