import React from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      week: "Week 1",
      title: "Spring Kickoff & Project Cycles",
      date: "Thurs, 4/3",
      time: "5:30-7:00pm",
      location: "Paccar 290"
    },
    {
      id: 2,
      week: "Week 2",
      title: "Industry Night: AISC x SPACE",
      date: "Mon, 4/7",
      time: "5:00-7:00pm",
      location: ""
    },
    {
      id: 3,
      week: "Week 3",
      title: "Husky Hacks: AI Product Hackathon",
      date: "Sat-Sun, 4/26-4/27",
      time: "9:00am-5:00pm",
      location: "Kane 110"
    },
    {
      id: 4,
      week: "Week 7",
      title: "Women in AI",
      date: "TBD",
      time: "",
      location: ""
    },
    {
      id: 5,
      week: "Week 8",
      title: "Project Cycles Demo Day",
      date: "TBD",
      time: "",
      location: ""
    },
    {
      id: 6,
      week: "Week 9",
      title: "Healthcare Fireside Chat",
      date: "TBD",
      time: "",
      location: ""
    }
  ];

  return (
    <section className="upcoming-events">
      <div className="container">
        <div className="events-header">
          <h2 className="events-title">Upcoming Events for Spring 2025</h2>
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
              <div className="event-week-badge">{event.week}</div>
              <h3 className="event-title">{event.title}</h3>
              <div className="event-details">
                <p className="event-date">{event.date}</p>
                {event.time && <p className="event-time">{event.time}</p>}
                {event.location && <p className="event-location">{event.location}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;