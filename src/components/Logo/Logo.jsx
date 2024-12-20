import React from "react";
import "./Logo.css";
import logo from "../../assets/logo.png";

const Logo = (setCurrentPage) => {
  return (
    <div className="Logo">
      <img
        onClick={() => setCurrentPage("Home")}
        src={logo}
        alt="OsaNa Soft Logo"
        className="logo-img"
      />
    </div>
  );
};

export default Logo;
