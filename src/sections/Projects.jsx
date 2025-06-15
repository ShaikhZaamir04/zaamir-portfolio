import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "Responsive React-based portfolio to showcase my skills and projects.",
    tech: ["React", "Framer Motion", "CSS"],
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Unity 3D Game",
    description: "Immersive 3D adventure game built in Unity with C# scripting.",
    tech: ["Unity", "C#", "Blender"],
    github: "https://github.com/yourusername/unitygame",
  },
  {
    title: "E-Commerce Store",
    description: "Modern Shopify store with SEO optimization and clean UI.",
    tech: ["Shopify", "Liquid", "SEO"],
    github: "https://github.com/yourusername/shopify-store",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">Project Link</a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Coming Soon Cards */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            className="project-card coming-soon"
            key={`coming-soon-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 * (projects.length + index) }}
            viewport={{ once: true }}
          >
            <div className="project-content">
              <h3>Coming Soon</h3>
              <p>Exciting project is on its way. Stay tuned!</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
