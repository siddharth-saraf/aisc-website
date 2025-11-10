import React from 'react';
import './Pillars.css';

const Pillars = () => {
  const pillars = [
    {
      id: 1,
      title: "ACCESSIBILITY",
      icon: "https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Globe%20Icon.png?v=2023-11-08T00:10:22.634Z",
      description: "Promoting AI accessibility for all by breaking down the barriers to knowledge and opportunity"
    },
    {
      id: 2,
      title: "LITERACY",
      icon: "https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Handshake%20Icon.png?v=2023-11-08T00:10:54.858Z",
      description: "Empowering students with enriching resources and experiences to shape the future"
    },
    {
      id: 3,
      title: "DIVERSITY",
      icon: "https://uploads.quarkly.io/6426e7e68d8a1a002089f81f/images/AISC%20Davis%20Community%20Icon.png?v=2023-11-08T00:11:12.221Z",
      description: "Celebrating diversity in AI, fostering innovation through varied perspectives"
    }
  ];

  return (
    <section className="pillars">
      <div className="container">
        <h2 className="pillars-title">Our 3 Pillars</h2>
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="pillar-card">
              <div className="pillar-header">
                <img src={pillar.icon} alt={pillar.title} className="pillar-icon" />
                <h3 className="pillar-title">{pillar.title}</h3>
              </div>
              <p className="pillar-description">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;