import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Zaamir 👋</h1>
        <p className="hero-subtitle">
          A passionate <span>Full Stack Developer</span> & <span>Game Developer</span> <br />
          building modern websites, mobile apps, and games.
        </p>

        <div className="hero-buttons">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50} 
            className="hero-button"
          >
            View Projects
          </Link>

          <a
            href="/Zaamir-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button resume-button"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
