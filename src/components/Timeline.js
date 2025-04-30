import React from "react";
import timelineData from "../assets/timelineData.js"; 
import { FaSchool, FaBriefcase } from "react-icons/fa";
import "../styles/Timeline.css"; 

const Timeline = () => {
  return (
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
  );
};

export default Timeline;
