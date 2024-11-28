import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-section" id="contact">
        <p>© 2024 OsaNa Soft. All rights reserved.</p>
        <div className="contact-icons">
          <a href="https://wa.me/969145040" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://linkedin.com/in/osana-soft"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="osanasoft1010@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://facebook.com/profile.php?id=100076710343784"
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
