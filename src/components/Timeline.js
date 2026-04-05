import React from "react";
import timelineData from "../assets/timelineData.js"; 
import "../styles/Timeline.css"; 
import Footer from "./Footer"

const Timeline = () => {
  return (
    <section id="timeline" className="section">
      <h2 className="text-center mb-4 timeline-heading">My Timeline</h2>
      <div className="timeline-container">
        <div className="timeline">
          {timelineData.map((item) => (
            <div key={item.id} className="timeline-item">
              {/* <div className="timeline-icon" style={{ backgroundColor: item.color }}>
                <item.icon size={30} color="white" />
              </div> */}
              <div className="timeline-content">
                <h3>{item.description}</h3>
                <p className="location">{item.location}</p>
                <p className="description">{item.title}</p>
                <p className="date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
    
  );
};

export default Timeline;
