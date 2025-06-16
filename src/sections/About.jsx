import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm <strong>Zaamir</strong>, a dedicated <strong>Full Stack Developer</strong> and <strong>Game Developer</strong> with 3+ years of experience in freelancing.
            I specialize in building <strong>responsive web apps</strong>, <strong>eCommerce platforms</strong>, and <strong>immersive Unity-based games</strong>.
          </p>
          <p>
            My strengths include working with <strong>React, Node.js, Unity 3D, Firebase, and MongoDB</strong>. I focus on clean code, fast performance, and delivering exceptional user experiences.
            I’ve collaborated with international clients and consistently received 5-star reviews for communication, quality, and timely delivery.
          </p>

          <h3>Values I Follow</h3>
          <ul className="values-list">
            <li className="value-item">⚡ Fast Delivery</li>
            <li className="value-item">✅ Clean, Maintainable Code</li>
            <li className="value-item">🤝 Client-Centric Approach</li>
          </ul>
        </div>

        <div className="about-image">
          <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/png/27.png"
            alt="Zaamir Avatar"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
