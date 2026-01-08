import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'Trego',
      description: 'In house tool used at ALX to manage learner project reviews.',
      image: ''
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack online shopping platform with payment integration.',
      image: ''
    },
    {
      title: 'Task Manager',
      description: 'Collaborative task management application with real-time updates.',
      image: ''
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts.',
      image: ''
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-content">
        <div className="section-header">
          <h2>Portfolio</h2>
          <p className="subtitle">Most Recent Work</p>
        </div>

        <div className="portfolio-slider">
          <button className="slider-btn prev" onClick={prevSlide}>
            <ChevronLeft size={32} />
          </button>

          <div className="slider-content">
            <div className="project-preview">
              <div className="project-image-placeholder"></div>
            </div>
            
            <div className="project-info">
              <h3>{projects[currentSlide].title}</h3>
              <p>{projects[currentSlide].description}</p>
            </div>
          </div>

          <button className="slider-btn next" onClick={nextSlide}>
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="slider-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
