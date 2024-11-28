import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>تواصل معنا</h1>
      <p>
        سنكون سعداء بتلبية طلباتك! . املأ الفورم ادناه او استخدم وسائل التواصل
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">الاسم</label>
          <input type="text" id="name" placeholder="ادخل اسمك" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">البريد الالكتروني</label>
          <input
            type="email"
            id="email"
            placeholder="ادخل بريدك الالكتروني"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">المحتوى</label>
          <textarea
            id="message"
            rows="5"
            placeholder="اكتب طلبك"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          ارسال
        </button>
      </form>
      <div className="social-links">
        <h2>تابعنا</h2>
        <div className="social-icons">
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>

          <a
            href="https://facebook.com/profile.php?id=100076710343784"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a
            href="https://chat.whatsapp.com/JvhRZSJNNCLH8q62S9kB3A"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
