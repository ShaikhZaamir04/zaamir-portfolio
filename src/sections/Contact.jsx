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
          <a href="https://wa.me/9819240792" target="_blank" className="contact-card whatsapp">
            <FaWhatsapp className="icon" />
            <span>WhatsApp</span>
          </a>

          <a href="mailto:shaikhzaamir04@gmail.com" className="contact-card email">
            <FaEnvelope className="icon" />
            <span>Email</span>
          </a>

          <a href="https://www.linkedin.com/in/shaikh-zaamir/" target="_blank" className="contact-card linkedin">
            <FaLinkedin className="icon" />
            <span>LinkedIn</span>
          </a>

          <a href="https://www.fiverr.com/zaamir_shaikh" target="_blank" className="contact-card fiverr">
            <FaStore className="icon" />
            <span>Fiverr</span>
          </a>
        </div>

        <form
          action="https://formspree.io/f/xwpbbbrz"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>


      </div>
    </section>
  );
};

export default Contact;
