import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup here
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-top">
            <div className="newsletter-section">
              <div className="newsletter-text">
                <h3 className="newsletter-title">JOIN OUR NEWSLETTER</h3>
                <p className="newsletter-description">
                  Get weekly club updates, AI news, and resources for learning more about AI.
                </p>
              </div>
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
            </div>
            
            <div className="contact-section">
              <h3 className="contact-title">CONTACT</h3>
              <div className="contact-links">
                <a 
                  href="https://www.instagram.com/aiscuw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.linkedin.com/company/ai-student-collective-uw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  LinkedIn
                </a>
                <a 
                  href="mailto:aisc@uw.edu"
                  className="contact-link"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-logo-section">
              <img 
                src="https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Logo%20Outline%20White.png?v=2023-11-07T22:12:47.498Z" 
                alt="AISC UW Logo" 
                className="footer-logo"
              />
              <div className="footer-logo-text">
                <span className="logo-text-bold">AISC </span>
                <span className="logo-text-light">@ UW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;