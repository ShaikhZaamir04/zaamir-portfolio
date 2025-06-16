import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Crafted with <span role="img" aria-label="heart">❤️</span> by <strong>Zaamir</strong> | Full Stack & Game Developer</p>
            <p>© {new Date().getFullYear()} Zaamir Shaikh. All rights reserved.</p>
            <a href="#hero" className="back-to-top">↑ Back to Top</a>
        </footer>
    );
};

export default Footer;
