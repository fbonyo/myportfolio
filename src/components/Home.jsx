import { Linkedin, Twitter, Github, ChevronDown } from 'lucide-react';
import './Home.css';
import profileImage from '../assets/download.png.png';

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="social-links">
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
        <div className="home-text">
          <h1>Hi I'm Fred</h1>
          <h2>Front-End Developer</h2>
          <p>
            I create responsive and user-friendly<br />
            web interfaces using modern technologies<br />
            like React, JavaScript, and CSS.
          </p>
          <button className="contact-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            <span>Contact Me</span>
            <ChevronDown size={18} style={{ transform: 'rotate(-90deg)' }} />
          </button>
        </div>
        <div className="home-image">
          <div className="avatar-circle">
            <img
              src={profileImage}
              alt="Fred - Front-End Developer"
              className="profile-image"
            />
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <div className="mouse"></div>
        <span>Scroll down</span>
      </div>
    </section>
  );
};

export default Home;
