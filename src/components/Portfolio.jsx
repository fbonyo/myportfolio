import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import './Portfolio.css';
import moviewatchImage from '../assets/moviewatch.png.png';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Weather Dashboard',
      description: 'A real-time weather application with location-based forecasts, built with modern web technologies.',
      tech: ['React', 'API Integration', 'CSS3', 'Responsive Design'],
      link: 'https://weatherdashke.netlify.app/',
      icon: '☀️'
    },
    {
      id: 2,
      title: 'MovieWatch',
      description: 'A movie discovery platform with search, filtering, and detailed movie information.',
      tech: ['React', 'TMDB API', 'CSS3', 'Search Filters'],
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
          <div className="slider-container">
            {/* LEFT ARROW - Like in the screenshot */}
            <button
              className="slider-arrow prev"
              onClick={prevSlide}
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="projects-wrapper">
              <div 
                className="projects-container" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="project-slide">
                    <div className="project-card">
                      <div className="project-image">
                        <div className={`${project.id === 1 ? 'weather-bg' : 'movie-bg'}`}>
                          {project.id === 1 ? (
                            <div className="weather-icon">{project.icon}</div>
                          ) : (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="project-screenshot"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><rect width="400" height="200" fill="%231a1a1a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial" font-size="20">MovieWatch</text></svg>';
                              }}
                            />
                          )}
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
                        
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <span>View →</span>
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* RIGHT ARROW - Like in the screenshot */}
            <button
              className="slider-arrow next"
              onClick={nextSlide}
              aria-label="Next project"
            >
              <ChevronRight size={24} />
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
      </div>
    </section>
  );
};

export default Portfolio;
