import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PastHighlights.css';

const PastHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "Project Cycles Program",
      date: "April - June 2025 (6 weeks)",
      image: "/events/spring25/demoday.png",
      description: "Our flagship program where 15 teams of UW students collaborated in a mentor-guided sprint to build AI agents from idea to deployment. Over 80 builders participated.",
      hasLink: true,
      link: "/project-cycles"
    },
    {
      id: 2,
      title: "BuildHer x AISC Women in AI",
      date: "May 2025",
      image: "/events/spring25/womeninai.jpg",
      description: "Collaborative event with BuildHer CSeed highlighting female perspectives in AI and promoting diversity in the field. Featured panel discussions and networking."
    },
    {
      id: 3,
      title: "Industry Night with SPACE",
      date: "April 2025",
      image: "/events/spring25/spacenight.png",
      description: "Partnership event with the Society for Professional Advancement through Career Enhancement, connecting students with industry professionals in AI and tech."
    }
  ];

  return (
    <section className="past-highlights">
      <div className="container">
        <h2 className="highlights-title">Spring 2025 Highlights</h2>
        <div className="highlights-grid">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="highlight-card">
              <div className="highlight-image-container">
                <img 
                  src={highlight.image} 
                  alt={highlight.title}
                  className="highlight-image"
                />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-event-title">{highlight.title}</h3>
                <p className="highlight-date">{highlight.date}</p>
                <p className="highlight-description">{highlight.description}</p>
                {highlight.hasLink && (
                  <Link to={highlight.link} className="learn-more-link">
                    Learn More →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/past-events" className="view-all-link">
            View All Past Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PastHighlights;