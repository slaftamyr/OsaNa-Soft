import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">من نحن</h1>
        <p className="about-subtitle">رحلة الإبداع والتميز مع OsaNa Soft</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            <span className="highlight">OsaNa Soft</span> هي شركة تقدم حلولاً
            مبتكرة وعصرية في مجال التكنولوجيا الرقمية. نحن نؤمن بقوة الإبداع
            والتفكير الاستراتيجي في تقديم خدمات تلبي احتياجات عملائنا وتجعلهم في
            المقدمة دائمًا.
          </p>
          <p>
            لدينا فريق متخصص في تصميم المواقع، تطوير التطبيقات، إنشاء العلامات
            التجارية، وتصميم الجرافيك. هدفنا هو أن نصبح الشريك الموثوق الذي
            يساعدك على تحقيق رؤيتك بأعلى جودة.
          </p>
          <p>
            التزامنا بالتفاصيل والجودة يجعلنا نحرص على تقديم خدمات تتجاوز
            التوقعات وتضمن رضا العملاء. انضم إلينا في رحلتك نحو النجاح!
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://via.placeholder.com/500x400"
            alt="About Us"
            className="image"
          />
        </div>
      </div>
      <div className="about-footer">
        <h2 className="contact-title">تواصل معنا</h2>
        <ul className="contact-list">
          <li>
            <strong>الهاتف:</strong> +249969145040
          </li>
          <li>
            <strong>البريد الإلكتروني:</strong>{" "}
            <a href="osanasoft1010@gmail.com">osanasoft1010@gmail.com</a>
          </li>
          <li>
            <strong>فيسبوك:</strong>{" "}
            <a
              href="https://facebook.com/profile.php?id=100076710343784"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://facebook.com/profile.php?id=100076710343784
            </a>
          </li>
          <li>
            <strong>لينكد إن:</strong>{" "}
            <a
              href="https://linkedin.com/company/osanasoft"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/company/osanasoft
            </a>
          </li>
          <li>
            <strong>واتساب:</strong>{" "}
            <a
              href="https://wa.me/249969145040"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://wa.me/249969145040
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
