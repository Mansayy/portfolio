import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/autocat.jpg";
import projImg2 from "../assets/img/book.png";
import projImg3 from "../assets/img/git.png";
import '../styles/ProjectPage.css'; 

const Projects = () => {
  const projectList = [
    {
      title: "AutoCat",
      description: "AutoCat is a framework using LLMs for retail product categorization and recommendation." ,
      imgUrl: projImg1,
      link: "https://drive.google.com/file/d/13MnCh4yAlHzHNgDlvf28xjjAR29pi1Mm/view?usp=sharing",
    },
    {
      title: "Book Social Network",
      description: "A full-stack web app for book lovers to connect and share.",
      imgUrl: projImg2,
      link: "https://github.com/Mansayy/book-social-network",
    },
    {
      title: "GitHub",
      description: "Explore more of my projects and open-source contributions.",
      imgUrl: projImg3,
      link: "https://github.com/Mansayy",
    },
  ];

  return (
    <section id="projects" className="section">
      <Container>
      <h2 className="text-center mb-4 project-heading" >
         My Projects
      </h2>
        <Row>
          {projectList.map((project, index)  => (
            <ProjectCard key={index} {...project} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
