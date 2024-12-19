import React from "react";
import "./Services.css";

const Services = () => {
  const handleOrderClick = () => {
    const message = "مرحبًا، أود الاستفسار عن خدمة ....";
    const whatsappUrl = `https://wa.me/249969145040?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="services-container">
      <h1 className="services-title">خدماتنا</h1>
      <p className="services-intro">
        نحن نقدم مجموعة متنوعة من الخدمات الاحترافية التي تضمن لك النجاح. اختر
        الخدمة التي تحتاج إليها وتواصل معنا عبر الواتساب.
      </p>
      <div className="services-cards">
        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3 className="service-card-title">التصميم</h3>
          <p className="service-card-description">
            نقدم خدمات تصميم الموشن جرافيك والفيديوهات، تصميم البوسترات،
            والمحتوى البصري المميز الذي يعكس هوية علامتك التجارية.
          </p>
          <button className="service-button" onClick={handleOrderClick}>
            اطلب الآن
          </button>
        </div>
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3 className="service-card-title">البرمجة والتطوير</h3>
          <p className="service-card-description">
            تطوير تطبيقات موبايل، مواقع إلكترونية، وبرمجيات سطح المكتب لتلبية
            احتياجات عملك المتنوعة.
          </p>
          <button className="service-button" onClick={handleOrderClick}>
            اطلب الآن
          </button>
        </div>
        <div className="service-card">
          <div className="service-icon">✍️</div>
          <h3 className="service-card-title">كتابة المحتوى</h3>
          <p className="service-card-description">
            كتابة محتوى إبداعي يتناسب مع احتياجات السوق لزيادة التفاعل مع جمهورك
            !وتوصيل رسالتك بشكل احترافي.
          </p>
          <button className="service-button" onClick={handleOrderClick}>
            اطلب الآن
          </button>
        </div>
        <div className="service-card">
          <div className="service-icon">📈</div>
          <h3 className="service-card-title">التسويق الرقمي</h3>
          <p className="service-card-description">
            استراتيجيات تسويق رقمي مبتكرة تهدف إلى تعزيز وجودك على الإنترنت
            وزيادة الوعي بعلامتك التجارية.
          </p>
          <button className="service-button" onClick={handleOrderClick}>
            اطلب الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
