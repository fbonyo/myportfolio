import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import './Header.css';

const Header = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Fred</div>
        <nav className="nav">
          <a 
            onClick={() => scrollToSection('home')}
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection('about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection('skills')}
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Skills
          </a>
          <a 
            onClick={() => scrollToSection('services')}
            className={activeSection === 'services' ? 'active' : ''}
          >
            Services
          </a>
          <a 
            onClick={() => scrollToSection('portfolio')}
            className={activeSection === 'portfolio' ? 'active' : ''}
          >
            Portfolio
          </a>
          <a 
            onClick={() => scrollToSection('contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact Me
          </a>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
