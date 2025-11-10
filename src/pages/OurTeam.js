import React from 'react';
import { Helmet } from 'react-helmet';
import OfficerCard from '../components/OfficerCard';
import { teamMembers } from '../data/teamData';
import './OurTeam.css';

const OurTeam = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - AISC UW</title>
        <meta name="description" content="Meet the team behind AI Student Collective at University of Washington" />
      </Helmet>
      
      <div className="our-team-page">
        <div className="container">
          <div className="team-header">
            <h1 className="team-title">Our Team</h1>
            <p className="team-subtitle">
              Say hello to the AISC Board at UW!
            </p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member) => (
              <OfficerCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;