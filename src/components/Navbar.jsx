import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("");

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Zaamir Shaikh</div>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={active === link.name ? "active" : ""}
                onClick={() => setActive(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
