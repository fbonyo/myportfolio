import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <div className="section-header">
          <h2>Contact Me</h2>
          <p className="subtitle">Get in touch</p>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <Phone size={24} />
            </div>
            <div className="contact-details">
              <h3>Call Me</h3>
              <p>+254-706-225-371</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <Mail size={24} />
            </div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>fbonyo@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <MapPin size={24} />
            </div>
            <div className="contact-details">
              <h3>Location</h3>
              <p>Nairobi - Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
