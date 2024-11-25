import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Services from "./components/Services/Services.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Logo from "./components/Logo/Logo.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import "./App.css";
const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Services":
        return <Services />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Portfolio />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <header>
        <div className="logo">
          <Logo />
        </div>
        <Navbar setCurrentPage={setCurrentPage} />
      </header>
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
