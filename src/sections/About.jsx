import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm <strong>Zaamir</strong>, a passionate{" "}
            <strong>Full Stack Developer</strong> and{" "}
            <strong>Game Developer</strong> with over 3 years of software engineering experience.
            I build <strong>responsive web apps</strong>,{" "}
            <strong>eCommerce stores</strong>, and{" "}
            <strong>immersive Unity-based 2D/3D games</strong>.
          </p>
          <p>
            I specialize in <strong>React</strong>, <strong>Node.js</strong>,{" "}
            <strong>Unity 3D</strong>, <strong>Firebase</strong>, and{" "}
            <strong>MongoDB</strong>. My code is clean, fast, and scalable —
            delivering top-notch user experiences and performance.
            I’ve collaborated with clients globally, earning consistent 5-star
            reviews for my communication, quality work, and timely delivery.
          </p>

          <h3>My Core Values</h3>
          <ul className="values-list">
            <li className="value-item">⚡ Fast & Reliable Delivery</li>
            <li className="value-item">✅ Clean, Scalable Code</li>
            <li className="value-item">🤝 Client-First Approach</li>
          </ul>
        </div>

        <div className="about-image">
          <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/png/27.png"
            alt="Zaamir - Full Stack & Game Developer Avatar"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
