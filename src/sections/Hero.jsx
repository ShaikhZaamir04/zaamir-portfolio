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
        <a href="#projects" className="hero-button">View Projects</a>
      </div>
    </section>
  );
};

export default Hero;
