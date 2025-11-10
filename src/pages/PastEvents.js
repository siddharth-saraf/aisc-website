import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './PastEvents.css';

const PastEvents = () => {
  const quarters = [
    {
      id: 1,
      title: "Spring 2025",
      events: [
        {
          id: 1,
          title: "Project Cycles Program",
          date: "April - June 2025 (6 weeks)",
          image: "/events/spring25/demoday.png",
          description: "Our flagship program where 15 teams of UW students collaborated in a mentor-guided sprint to build AI agents from idea to deployment. Over 80 builders participated.",
          highlights: ["15 teams", "80+ participants", "6-week program", "Mentor-guided", "RAG-centric tutorials"],
          isProjectCycles: true,
          link: "/project-cycles"
        },
        {
          id: 2,
          title: "BuildHer x AISC Women in AI",
          date: "May 2025",
          image: "/events/spring25/womeninai.jpg",
          description: "Collaborative event with BuildHer CSeed highlighting female perspectives in AI and promoting diversity in the field. Featured panel discussions and networking.",
          highlights: ["Partnership with BuildHer CSeed", "Panel discussions", "Networking opportunities", "Diversity focus"]
        },
        {
          id: 3,
          title: "Industry Night with SPACE",
          date: "April 2025",
          image: "/events/spring25/spacenight.png",
          description: "Partnership event with the Society for Professional Advancement through Career Enhancement, connecting students with industry professionals in AI and tech.",
          highlights: ["Industry professionals", "Networking", "Career insights", "Professional development"]
        }
      ]
    },
    {
      id: 2,
      title: "Winter 2025",
      events: [
        {
          id: 1,
          title: "AI Across Disciplines Symposium",
          date: "February 2025",
          image: "/events/winter25/across.png",
          description: "Our major symposium featuring live demos, Q&A sessions, food and drinks, plus networking with speakers who are leading innovators discussing AI applications across multiple fields.",
          highlights: ["Live demos", "Q&A sessions", "Networking", "Cross-disciplinary focus", "Industry speakers"]
        },
        {
          id: 2,
          title: "AISC UW Kickoff",
          date: "January 2025",
          image: "/events/winter25/kickoff.png",
          description: "Our inaugural event where we launched AISC at UW. Students heard about our mission and plans, with presentations from Microsoft speakers about their AISC experience and AI career insights.",
          highlights: ["Club launch", "Microsoft speakers", "Mission presentation", "Career insights", "First event"]
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Past Events - AISC UW</title>
        <meta name="description" content="Explore all past events and highlights from AI Student Collective at University of Washington" />
      </Helmet>
      
      <div className="past-events-page">
        <div className="container">
          <div className="events-header">
            <h1 className="events-title">Past Events & Highlights</h1>
            <p className="events-subtitle">
              A complete timeline of our first year from our Kickoff in Winter 2025 to our Project Cycles Demo Day in Spring.
            </p>
          </div>
          
          <div className="quarters-timeline">
            {quarters.map((quarter) => (
              <div key={quarter.id} className="quarter-section">
                <div className="quarter-header">
                  <h2 className="quarter-title">{quarter.title}</h2>
                  <div className="quarter-line"></div>
                </div>
                
                <div className="events-grid">
                  {quarter.events.map((event) => (
                    <div key={event.id} className="event-card">
                      <div className="event-image-container">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="event-image"
                        />
                      </div>
                      <div className="event-content">
                        <h3 className="event-title">{event.title}</h3>
                        <p className="event-date">{event.date}</p>
                        <p className="event-description">{event.description}</p>
                        
                        {event.highlights && (
                          <div className="event-highlights">
                            <h4>Key Highlights:</h4>
                            <ul>
                              {event.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {event.isProjectCycles && (
                          <Link to={event.link} className="learn-more-btn">
                            View Full Project Cycles Showcase →
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PastEvents;