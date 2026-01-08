import { ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Designer',
      description: 'View More'
    },
    {
      icon: '</>',
      title: 'Frontend Developer',
      description: 'View More'
    },
    {
      icon: '💾',
      title: 'Backend Developer',
      description: 'View More'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-content">
        <div className="section-header">
          <h2>Services</h2>
          <p className="subtitle">What I Offer</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <a href="#" className="service-link">
                {service.description}
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
