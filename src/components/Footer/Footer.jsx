import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-section" id="contact">
        <p>© 2024 OsaNa Soft. All rights reserved.</p>
        <div className="contact-icons">
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:example@example.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://facebook.com/username"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
