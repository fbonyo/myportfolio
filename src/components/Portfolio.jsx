import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import './Portfolio.css';
import moviewatchImage from '../assets/moviewatch.png.png';
import weatherdashImage from '../assets/weatherdashh.png';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Weather Dashboard',
      description: 'A real-time weather application with location-based forecasts.',
      tech: ['React', 'API', 'CSS3'],
      link: 'https://weatherdashke.netlify.app/',
      image: weatherdashImage
    },
    {
      id: 2,
      title: 'MovieWatch',
      description: 'A movie discovery platform with search and filtering.',
      tech: ['React', 'TMDB API', 'CSS3'],
      link: 'https://moviewatchke.netlify.app/',
      image: moviewatchImage
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-content">
        <div className="section-header">
          <h2>Portfolio</h2>
          <p className="subtitle">Most Recent Work</p>
        </div>
        
        <div className="portfolio-slider">
          <button className="slider-nav prev" onClick={prevSlide} aria-label="Previous project">
            <ChevronLeft size={20} />
          </button>

          <div className="slider-wrapper">
            <div className="projects-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {projects.map((project) => (
                <div key={project.id} className="project-slide">
                  <div className="project-card">
                    <div className="project-image">
                      <div className={project.id === 1 ? 'weather-bg' : 'movie-bg'}>
                        <img src={project.image} alt={project.title} className="project-screenshot" />
                      </div>
                    </div>
                    <div className="project-details">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tech">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <span>View</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-nav next" onClick={nextSlide} aria-label="Next project">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="slider-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
