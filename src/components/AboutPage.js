import React, { Component } from "react";
import "../styles/AboutPage.css";

class AboutPage extends Component {
  render() {
    const one = (
      <p>
        Looking for a Software Engineer who can transform your tech vision into
        reality? With a dynamic blend of advanced frontend and backend skills, I
        specialize in building high-performance, large-scale distributed systems
        and seamless user experiences. I'm passionate about using technology to
        drive innovation. I am currently a <b>Software Development Engineer</b> at{" "}
        <b>Coforge</b>, working for the <b>New Hampshire Department of Safety</b>.
        I graduated from <b>New York University</b> in 2024 with a Masters in
        Computer Engineering.
      </p>
    );

    const two = (
      <p>
        Outside of work, you'll find me reading, volunteering, or exploring the
        outdoors.
      </p>
    );

    const tech_stack = [
      "Java",
      "Angular",
      "Database",
      "Python",
      "React",
      "TypeScript"
    ];

    return (
      <section id="about" className="section">
        <div id="about-section-content">
          <div className="about-heading">
            <span className="section-title">About Me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {one}
              <p>Here are some technologies I work with:</p>
              <ul className="tech-stack">
                {tech_stack.map((tech_item, i) => (
                  <li key={i}>{tech_item}</li>
                ))}
              </ul>
              {two}
            </div>
            <div className="about-image">
              <img alt="Mansi Joshi" src={"/mansi.jpg"} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutPage;
