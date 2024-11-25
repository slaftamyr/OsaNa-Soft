import React from "react";
import "./Services.css";

const services = [
  {
    title: "تصميم المواقع",
    description:
      "نقوم بإنشاء مواقع ويب عصرية تتناسب مع احتياجات العملاء بأحدث التقنيات.",
    icon: "🌐",
  },
  {
    title: "تطوير التطبيقات",
    description: "تطوير تطبيقات مميزة ومتكاملة مع واجهات استخدام جذابة وسهلة.",
    icon: "📱",
  },
  {
    title: "العلامات التجارية",
    description: "تصميم شعارات وهوية بصرية تعبر عن علامتك التجارية بتميز.",
    icon: "🎨",
  },
  {
    title: "الجرافيك ديزاين",
    description: "تصميم مواد تسويقية مبتكرة وإبداعية تعزز رؤيتك التجارية.",
    icon: "✏️",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">خدماتنا</h1>
      <p className="services-intro">
        نحن نقدم مجموعة واسعة من الخدمات المصممة لتلبية احتياجاتك بلمسة من
        الاحترافية والجودة.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <a
              href="https://linkedin.com/in/solafa-ameer"
              target="_blank"
              rel="noopener noreferrer"
              className="service-button"
            >
              اطلب الآن
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
