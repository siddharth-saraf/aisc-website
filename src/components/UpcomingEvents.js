import React from 'react';
import '../styles/UpcomingEvents.css';

const UpcomingEvents = () => {
  const events = [
    {
      id: 2,
      title: "Sentient Ideathon, Design the Future of AGI: No Code, Just Big Ideas",
      url: "https://luma.com/f2d3usez",
      date: "Mon, 11/17",
      time: "6:00-8:00pm",
      location: "SIG 225"
    },
    {
      id: 3,
      title: "Demo Day",
      date: "Thurs, 11/20",
      time: "6:00-8:00pm",
      location: "TBD"
    }
  ];

  return (
    <section className="upcoming-events">
      <div className="container">
        <div className="events-header">
          <h2 className="events-title">Upcoming Events for Fall 2025</h2>
          <p className="events-subtitle">
            Stay tuned on{' '}
            <a 
              href="https://www.instagram.com/aiscuw/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-link"
            >
              Instagram
            </a>
            {' '}for the latest details!
          </p>
        </div>
        
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h3 className="event-title"><a href={event.url} target="_blank" 
              rel="noopener noreferrer">{event.title}</a></h3>
              <div className="event-details">
                <p className="event-date">{event.date}</p>
                {event.time && <p className="event-time">{event.time}</p>}
                {event.location && <p className="event-location">Location: {event.location}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;