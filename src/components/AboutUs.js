import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-content">
          <h2 className="about-title">
            Welcome to the AI Student Collective<br />
            (AISC) @ UW!
          </h2>
          <p className="about-description">
            We're on a passionate mission to shape a future of AI literacy for all by empowering students from diverse backgrounds to thrive in the AI landscape.
            <br /><br />
            We offer exciting opportunities for involvement in technical, creative, and business roles. Join us in the AI revolution and be part of something extraordinary.
          </p>
          <div className="about-image-container">
            <img 
              src="https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Website%20Glow.png?v=2023-11-07T22:40:38.455Z" 
              alt="AISC Glow" 
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;