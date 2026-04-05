import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <div className="project-card">
        <div className="project-card-img-wrapper">
          <img src={imgUrl} alt={title} className="project-card-img" />
        </div>
        <div className="project-card-body">
          <h5 className="project-card-title">{title}</h5>
          <p className="project-card-text">{description}</p>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-btn"
          >
            View
          </a>
        )}
      </div>
    </Col>
  );
};

export default ProjectCard;
