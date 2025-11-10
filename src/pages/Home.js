import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Pillars from '../components/Pillars';
import PastHighlights from '../components/PastHighlights';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AISC UW - AI Student Collective</title>
        <meta name="description" content="Creating a future of AI literacy for all at University of Washington" />
        <meta property="og:title" content="AISC UW - AI Student Collective" />
      </Helmet>
      
      <div className="home-page">
        <Hero />
        <AboutUs />
        <Pillars />
        // CHANGE: <PastHighlights />
      </div>
    </>
  );
};

export default Home;