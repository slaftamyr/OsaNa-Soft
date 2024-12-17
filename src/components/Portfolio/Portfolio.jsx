import React, { useState } from "react";
import "./Portfolio.css";
import design1 from "../../assets/image1.jpg";
import design2 from "../../assets/image2.jpg";
import design3 from "../../assets/image3.jpg";
import design4 from "../../assets/image4.jpg";

import design5 from "../../assets/image5.jpg";
import design6 from "../../assets/image6.jpg";
import design7 from "../../assets/image7.jpg";
const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // قائمة التصاميم التي سيتم عرضها داخل الكاردات
  const designs = [
    {
      id: 1,
      title: "تصميم خلفية جميلة ومتناسقة الالوان",
      image: design1, // صورة التصميم
    },
    {
      id: 2,
      title: "تصميم خلفية جميلة ومتناسقة الالوان",
      image: design2, // صورة التصميم
    },
    {
      id: 3,
      title: "تصميم خلفية جميلة ومتناسقة الالوان",
      image: design3, // صورة التصميم
    },
    {
      id: 4,
      title: "تصميم خلفية جميلة ومتناسقة الالوان",
      image: design4, // صورة التصميم
    },
    {
      id: 5,
      title: "تصميم خلفية جميلة ومتناسقة الالوان",
      image: design5, // صورة التصميم
    },
    {
      id: 6,
      title: "تصميم خلفية جميلة ومتناسقة الالوان",
      image: design6, // صورة التصميم
    },
    {
      id: 7,
      title: "تصميم خلفية جميلة ومتناسقة الالوان",
      image: design7, // صورة التصميم
    },
  ];

  // دالة لفتح نافذة العرض المنبثقة عند النقر على الصورة
  const openModal = (image) => {
    setSelectedImage(image); // تعيين الصورة المحددة لعرضها في الـ Modal
  };

  // دالة لإغلاق نافذة العرض المنبثقة
  const closeModal = () => {
    setSelectedImage(null); // إعادة تعيين الصورة إلى null لإغلاق الـ Modal
  };

  {
    /*const projects = [
  {
    id: 1,
    title: "منصة  الأمل التعليمية",
    description:
      "منصة تعليمية متكاملة للتعليم عن بعد وتقدم جميع الطرق المتاحة للتعليم لطلاب مع واجهة تفاعلية متميزة ومتوافقة مع جميع احجام الاجهزة",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "متجر بسمة الكتروني",
    description:
      "متجر الكتروني متكامل مع طرق عرض مريحة ومصممة خصيصا لاعجاب العميل مع طرق تنقل احترافية لللتنقل بين المنتجات والطلب",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "  مازدا العقارية",
    description: "موقع شركة مازدا العقارية",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/project3",
  },
];*/
  }
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">مشاريعنا</h1>
      <p className="dashboard-description">
        <ul className="description-list">
          <li>
            نفخر بتنفيذ مجموعة متنوعة من المشاريع المبتكرة التي تعكس جودة
            خدماتنا واحترافية فريقنا.
          </li>
          <li>
            إذا كنت تبحث عن شريك موثوق لتحويل فكرتك إلى مشروع ناجح، فلا تتردد في
            التواصل معنا.
          </li>
          <li>
            رؤيتنا تركز على تقديم حلول عصرية تلبي احتياجاتك وتفوق توقعاتك.
          </li>
          <li>مشروعك القادم يبدأ هنا! 😊</li>
        </ul>
      </p>

      {/*<div className="portfolio-grid">
        {projects.map((project) => (
          <div className="portfolio-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-image"
            />
            <h2 className="portfolio-card-title">{project.title}</h2>
            <p className="portfolio-description">{project.description}</p>
            <a
              href={project.link}
              className="portfolio-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              عرض
            </a>
          </div>
        ))}
      </div>*/}
      <h1 className="portfolio-title">تصاميم خلفيات متناسقة</h1>
      <div className="portfolio-grid">
        {designs.map((design) => (
          <div className="portfolio-card" key={design.id}>
            <img
              src={design.image}
              alt={design.title}
              className="portfolio-image"
              onClick={() => openModal(design.image)} // فتح الصورة في الـ Modal
            />
          </div>
        ))}
      </div>

      {/* نافذة الـ Modal لعرض الصورة بشكل أكبر عند النقر عليها */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImage} alt="تصميم" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
