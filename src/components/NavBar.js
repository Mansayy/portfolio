import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul>
          <li><a href="#intro">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="mailto:mj2966@nyu.edu" target="_blank" className="icon"><FaEnvelope /></a>
        <a href="https://github.com/mansayy" target="_blank" rel="noopener noreferrer" className="icon"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/joshi--mansi/" target="_blank" rel="noopener noreferrer" className="icon"><FaLinkedin /></a>
      </div>
    </nav>
  );
};

export default Navbar;

