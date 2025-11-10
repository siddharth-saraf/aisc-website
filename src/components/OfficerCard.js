import React from 'react';
import './OfficerCard.css';

const OfficerCard = ({ member }) => {
  return (
    <div className="officer-card">
      <div className="officer-image-container">
        <img 
          src={member.image} 
          alt={member.name}
          className="officer-image"
        />
      </div>
      <div className="officer-info">
        <h3 className="officer-name">{member.name}</h3>
        <p className="officer-title">{member.title}</p>
      </div>
    </div>
  );
};

export default OfficerCard;