import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate Full Stack Developer with 3+ years of freelance experience.
            I specialize in building responsive websites, modern web apps, and immersive
            game experiences. My core strengths lie in React, Unity3D, and creating
            performance-optimized solutions for clients worldwide.
          </p>

          <h3>Skills:</h3>
          <ul className="skills-list">
            <li className="skill-item">React</li>
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">Unity 3D</li>
            <li className="skill-item">C# / C++</li>
            <li className="skill-item">Node.js</li>
            <li className="skill-item">Shopify / WordPress</li>
            <li className="skill-item">MongoDB / Firebase</li>
            <li className="skill-item">SEO Optimization</li>
          </ul>
        </div>

        <div className="about-image">
          <img
            src="https://avatars.githubusercontent.com/u/12247465?v=4"
            alt="Zaamir Avatar"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
