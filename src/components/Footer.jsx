import { Linkedin, Twitter, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-header">
          <div className="footer-name">Fred</div>
          <div className="footer-title">Front-End Developer</div>
        </div>

        <nav className="footer-nav">
          <a onClick={() => scrollToSection('services')}>Services</a>
          <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>

        <div className="footer-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={16} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github size={16} />
          </a>
        </div>

        <div className="footer-bottom">
          <p>© fredbonyo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
