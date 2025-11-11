import React from 'react';
import { Helmet } from 'react-helmet';
import OfficerCard from '../components/OfficerCard';
import '../styles/OurTeam.css';

const teamMembers = [
  {
    id: 1,
    name: "Vikram Murali",
    title: "Founder/President",
    image: "/officers/vikram_murali.jpeg"
  },
  {
    id: 2,
    name: "Siddharth Saraf",
    title: "Co-Founder/Senior VP",
    image: "/officers/siddharth_saraf.jpg"
  },
  {
    id: 3,
    name: "Mohit Mohanraj",
    title: "VP of Finance",
    image: "/officers/mohit_mohanraj.png"
  },
  {
    id: 4,
    name: "Madhu Gandhi",
    title: "VP of Operations",
    image: "/officers/madhu_gandhi.jpg"
  },
  {
    id: 5,
    name: "Asmi Sathaye",
    title: "VP of Education",
    image: "/officers/asmi_sathaye.png"
  },
  {
    id: 6,
    name: "Reuben Santoso",
    title: "VP of Innovation",
    image: "/officers/reuben_santoso.png"
  },
  { 
    id: 7,
    name: "Saachi Sharma",
    title: "VP of Strategy & Partnerships",
    image: "/officers/saachi_sharma.jpg"},
  {
    id: 8,
    name: "Sahana Hegde",
    title: "Director of Marketing",
    image: "/officers/sahana_hegde.png"
  },
  {
    id: 9,
    name: "Sri Paruchuri",
    title: "Director of External/Internal",
    image: "/officers/sri_paruchuri.png"
  },
  {
    id: 10,
    name: "Hasan Wazir",
    title: "Director of Learning",
    image: "/officers/hasan_wazir.png"
  },
  {
    id: 11,
    name: "Nitya Kakulamarri",
    title: "Director of Projects",
    image: "/officers/nitya_kakulamarri.png"
  }
];

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