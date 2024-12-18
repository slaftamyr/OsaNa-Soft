import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // تحضير الرسالة
    const whatsappMessage = `الاسم: ${name}%0Aالبريد الإلكتروني: ${email}%0Aالرسالة: ${message}`;
    const whatsappURL = `https://wa.me/249969145040?text=${whatsappMessage}`;

    // فتح الرابط
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-page">
      <h1>تواصل معنا</h1>
      <p>
        سنكون سعداء بتلبية طلباتك! . املأ الفورم ادناه او استخدم وسائل التواصل
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">الاسم</label>
          <input
            type="text"
            id="name"
            placeholder="ادخل اسمك"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">البريد الالكتروني</label>
          <input
            type="email"
            id="email"
            placeholder="ادخل بريدك الالكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">المحتوى</label>
          <textarea
            id="message"
            rows="5"
            placeholder="اكتب طلبك"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
            href="https://www.linkedin.com/company/osana-soft/"
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
