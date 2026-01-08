import { Download } from 'lucide-react';
import './About.css';

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
            <div className="character-placeholder"></div>
          </div>

          <div className="about-text">
            <p>
              A developer with experience building full stack applications using a variety of 
              technologies. Also very open to learning new technologies and skills.
            </p>
            <button className="download-cv">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
