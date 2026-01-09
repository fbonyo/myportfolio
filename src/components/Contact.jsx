import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xbddrdrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 8000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <div className="section-header">
          <h2>Contact Me</h2>
          <p className="subtitle">Get in touch</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={18} />
              </div>
              <div className="contact-details">
                <h3>Call Me</h3>
                <p>+254-706-225-371</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={18} />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>fbonyo@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={18} />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Nairobi - Kenya</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <>Sending...</>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="status-message success">
                ✅ Message sent successfully! I'll get back to you within 24-48 hours via email. Check your inbox!
              </p>
            )}
            {status === 'error' && (
              <p className="status-message error">
                ❌ Failed to send message. Please email me directly at fbonyo@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
