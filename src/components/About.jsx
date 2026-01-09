import { Download } from 'lucide-react';
import './About.css';
import fredImage from '../assets/fred.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="section-header">
          <h2>About Me</h2>
          <p className="subtitle">My introduction</p>
        </div>
        <div className="about-body">
          <div className="about-image">
            <img src={fredImage} alt="Fred" className="character-image" />
          </div>
          <div className="about-text">
            <p>
              Dedicated Front-End Developer with a proven track record of building production-ready applications using React 18, JavaScript (ES6+), and modern web technologies. I specialize in creating responsive, user-friendly interfaces with a focus on clean code, performance optimization, and exceptional user experiences.
            </p>
            <a 
              href="https://github.com/fbonyo/myportfolio/raw/main/cv/Fred_Bonyo_CV.pdf"
              download="Fred_Bonyo_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-cv"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
