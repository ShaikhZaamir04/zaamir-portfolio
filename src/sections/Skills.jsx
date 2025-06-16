import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skillsData = [
    {
        title: "Web Development",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Tailwind CSS"],
    },
    {
        title: "CMS Platforms",
        skills: ["Wix", "WordPress", "Shopify"],
    },
    {
        title: "Databases & Backend",
        skills: ["PHP", "MySQL", "Firebase", "MongoDB"],
    },
    {
        title: "Frameworks",
        skills: ["Django", "MERN Stack"],
    },
    {
        title: "Android App Development",
        skills: ["React Native", "Android Studio"],
    },
    {
        title: "Game Development",
        skills: ["Unity 3D", "AR", "VR"],
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "Microsoft Clarity", "Google Analaytics"],
    },
    {
        title: "Additional Expertise",
        skills: [
            "Payment Integration",
            "Login Authentication",
            "Security",
            "Monetization",
            "SEO Optimization",
            "E-commerce Functionality",
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-heading">Skills</h2>
            <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {skillsData.map((category, index) => (
                    <motion.div className="skill-card" key={index} variants={cardVariants}>
                        <h3 className="skill-title">{category.title}</h3>
                        <div className="skill-tags">
                            {category.skills.map((skill, i) => (
                                <span className="skill-tag" key={i}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
