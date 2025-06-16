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
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo" onClick={() => setActive("Home")}>
          Z.S
        </div>

        {/* Hamburger Menu Toggle */}
        <button
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Click-away Overlay */}
        {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

        {/* Navigation Links */}
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={`nav-item ${isOpen ? "fade-in" : ""}`}
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={active === link.name ? "active" : ""}
                onSetActive={() => setActive(link.name)}
                onClick={() => setIsOpen(false)}
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
