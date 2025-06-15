import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Zaamir 👋</h1>
        <p className="hero-subtitle">
          A passionate <span>Full Stack Developer</span> & <span>Game Developer</span>  
          building modern websites, mobile apps, and games.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-button">View Projects</a>
          <a 
            href="public\Zaamir-Resume.pdf" 
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
