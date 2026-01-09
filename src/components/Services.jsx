import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import './Services.css';

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    'Responsive Web Design & Development',
    'React Application Development',
    'API Integration & Data Management',
    'Performance Optimization',
    'Cross-Browser Compatibility',
    'Mobile-First Design Implementation',
    'Modern UI/UX Implementation',
    'Code Refactoring & Maintenance'
  ];

  return (
    <section id="services" className="services">
      <div className="services-content">
        <div className="section-header">
          <h2>Services</h2>
          <p className="subtitle">What I Offer</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">{'</>'}</div>
            <h3>Frontend Developer</h3>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="service-link"
            >
              View More
              {isOpen ? <ChevronUp size={18} /> : <ArrowRight size={18} />}
            </button>
            
            {isOpen && (
              <div className="service-details">
                <ul>
                  {services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
