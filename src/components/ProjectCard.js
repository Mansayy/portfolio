import React from "react";
import { Card, Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <Card className="h-100 shadow-sm text-white bg-dark border-0 d-flex flex-column" style={{ backgroundColor: "#0a192f" }}>
        <div className="project-card-img-wrapper">
          <Card.Img variant="top" src={imgUrl} alt={title} className="project-card-img" />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto btn btn-outline-light"
            >
              View
            </a>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
