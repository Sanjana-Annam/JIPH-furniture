import React, { useRef, useEffect } from "react";
import CategorySlide from "./CategorySlide";
import "./carousel.css";

import schoolMain from "../../assets/categories/school-main.avif";
import school1 from "../../assets/categories/school1.webp";
import school2 from "../../assets/categories/school2.avif";
import school3 from "../../assets/categories/school3.avif";
import school4 from "../../assets/categories/school4.avif";

import officeMain from "../../assets/categories/office-main.avif";
import office1 from "../../assets/categories/office1.avif";
import office2 from "../../assets/categories/office2.webp";
import office3 from "../../assets/categories/office3.avif";
import office4 from "../../assets/categories/office4.avif";


const CategoryCarousel = () => {
  const sliderRef = useRef(null);

  let touchStartX = 0;
  let touchEndX = 0;

  // ===== AUTO SLIDE =====
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;

      sliderRef.current.scrollBy({
        left: slideWidth,
        behavior: "smooth",
      });

      if (
        sliderRef.current.scrollLeft + slideWidth >=
        sliderRef.current.scrollWidth
      ) {
        sliderRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;

      sliderRef.current.scrollBy({
        left: -slideWidth,
        behavior: "smooth",
      });
    }
  };

  // ===== DESKTOP CLICK HANDLER =====
  const handleClick = (e) => {
    const container = e.currentTarget;
    const clickX = e.nativeEvent.offsetX;

    if (clickX < container.offsetWidth / 2) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  // ===== MOBILE TOUCH HANDLERS =====

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  };

  const handleGesture = () => {
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      // Swiped Left
      nextSlide();
    }

    if (swipeDistance < -50) {
      // Swiped Right
      prevSlide();
    }
  };

  const categories = [
    {
      title: "School Furniture",
      mainImage: schoolMain,
      subImages: [school1, school2, school3, school4],
    },
    {
      title: "Office Furniture",
      mainImage: officeMain,
      subImages: [office1, office2, office3, office4],
    },
  ];

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">Our Product Categories</h2>

      <p className="carousel-subtitle">
        Explore premium furniture collections designed for every institutional need
      </p>

      <div className="carousel-wrapper">
        <div
          className="carousel-container"
          ref={sliderRef}
          onClick={handleClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {categories.map((item, index) => (
            <CategorySlide key={index} {...item} />
          ))}
        </div>

        {/* Arrows for Desktop */}
        <div className="nav-arrow left" onClick={prevSlide}>
          ‹
        </div>

        <div className="nav-arrow right" onClick={nextSlide}>
          ›
        </div>
      </div>

      <div className="carousel-cta">
        <a
          href="https://www.jiphfurniture.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="explore-btn"
        >
          Explore All Products
        </a>
      </div>
    </section>
  );
};

export default CategoryCarousel;