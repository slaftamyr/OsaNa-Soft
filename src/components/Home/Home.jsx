import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title"> هل تبحث عن تصاميم مميزة؟</h1>
          <p className="home-description">
            اذا كنت تبحث عن من ينفذ لك ما تريد باحترافية وابداع...فنحن هنا
            لتلبية ما تريد . ماذا تنتظر!!...OsaNa soft افضل خيار.
          </p>
          <button className="contact-button">
            <a
              href="https://wa.me/249969145040"
              target="_blank"
              rel="noopener noreferrer"
            >
              تواصل معنا الآن!
            </a>
          </button>
        </div>
        <div className="home-image">
          <img
            src="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMHBhZ2UlMjBkZXNpZ24lMjBncmFwaGljfGVufDB8fDB8fHww"
            alt="Design Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
