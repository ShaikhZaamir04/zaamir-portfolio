import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">My Portfolio</div>

        {/* Hamburger Icon */}
        <div
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Overlay */}
        {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

        {/* Mobile Navigation */}
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={isOpen ? "fade-in" : ""}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className={active === link.name ? "active" : ""}
                onSetActive={() => setActive(link.name)}
                onClick={() => setIsOpen(false)}
                spy={true}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
