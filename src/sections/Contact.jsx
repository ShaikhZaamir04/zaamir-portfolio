import React from "react";
import "./Contact.css";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaStore } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Let's Connect</h2>
        <p className="contact-text">
          Have a project in mind or just want to say hi? Reach out!
        </p>

        <div className="contact-methods">
          <a href="https://wa.me/919876543210" target="_blank" className="contact-card whatsapp">
            <FaWhatsapp className="icon" />
            <span>WhatsApp</span>
          </a>

          <a href="mailto:zaamir.webdev@gmail.com" className="contact-card email">
            <FaEnvelope className="icon" />
            <span>Email</span>
          </a>

          <a href="https://linkedin.com/in/zaamir04" target="_blank" className="contact-card linkedin">
            <FaLinkedin className="icon" />
            <span>LinkedIn</span>
          </a>

          <a href="https://fiverr.com/yourusername" target="_blank" className="contact-card fiverr">
            <FaStore className="icon" />
            <span>Fiverr</span>
          </a>


        </div>

        
      </div>
    </section>
  );
};

export default Contact;
