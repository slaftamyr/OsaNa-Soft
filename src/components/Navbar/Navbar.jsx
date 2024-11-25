import React from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li onClick={() => setCurrentPage("Home")}>الرئيسية</li>
        <li onClick={() => setCurrentPage("Services")}>خدماتنا</li>
        <li onClick={() => setCurrentPage("About")}>من نحن</li>
        <li onClick={() => setCurrentPage("Portfolio")}>معرض الاعمال</li>
        <li onClick={() => setCurrentPage("Contact")}>!تواصل معنا</li>
      </ul>
    </nav>
  );
};

export default Navbar;
