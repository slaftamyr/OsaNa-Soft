import React from "react";
import "./Home.css";
import mainImage from "../../assets/mainImage.jpg";
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
          <img src={mainImage} alt="Design Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Home;
