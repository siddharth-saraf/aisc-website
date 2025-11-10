import React from 'react';
import './PastHighlights.css';

const PastHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "AI Across Disciplines Symposium",
      date: "February 2025",
      image: "https://uploads.quarkly.io/66b57a1ac2c6080018ead5e1/images/acrossbw.png?v=2025-03-24T06:27:58.764Z",
      description: "The event included live demos, Q&A sessions, food and drinks, plus networking with speakers who are leading innovators discussing AI applications in law, space, defense, business, and digital humanities"
    },
    {
      id: 2,
      title: "AISC UW Kickoff",
      date: "January 2025",
      image: "https://uploads.quarkly.io/66b57a1ac2c6080018ead5e1/images/kickoffbw.png?v=2025-03-24T06:14:32.195Z",
      description: "Our first event where we kicked off providing students with an opportunity to hear from us about our plans as well as presentations with speakers from Microsoft about their experience with AISC and how AI is used in their career"
    }
  ];

  return (
    <section className="past-highlights">
      <div className="container">
        <h2 className="highlights-title">Past Highlights</h2>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastHighlights;