import React from "react";
import "./carousel.css";

const CategorySlide = ({ title, mainImage, subImages }) => {
  return (
    <div className="category-slide">
      <h3 className="category-title">{title}</h3>
      <div className="main-image">
        <img src={mainImage} alt={title} />
      </div>

      

      <div className="sub-images">
        {subImages.map((img, index) => (
          <div className="sub-image-box" key={index}>
            <img src={img} alt={`${title} ${index + 1}`} />
          </div>
        ))}
      </div>

      <a
        href="https://www.jiphfurniture.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="view-products"
      >
        View All Products →
      </a>

    </div>
  );
};

export default CategorySlide;
