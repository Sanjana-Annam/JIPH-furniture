import React from "react";

const HeroContent = () => {
  return (
    <div className="hero-content">

      <span className="hero-badge">
        Trusted Furniture Manufacturer Since 2008
      </span>

      <h1>
        Custom Furniture for <br />
        Premium Homes & Workspaces
      </h1>

      <p>
        We design and manufacture high-quality furniture for residences,
        offices, institutions, and commercial spaces — built to last,
        crafted to impress.
      </p>

      <div className="hero-proof">
        <div>
          <strong>2,500+</strong>
          <span>Projects Delivered</span>
        </div>
        <div>
          <strong>15+</strong>
          <span>Years Experience</span>
        </div>
        <div>
          <strong>120+</strong>
          <span>Corporate Clients</span>
        </div>
      </div>

      <div className="hero-actions">
        <a href="#offerings" className="btn-primary">
          Explore Products
        </a>
        <a href="#contact" className="btn-secondary">
          Get Quote
        </a>
      </div>

      <div className="hero-nav">
        <a href="#offerings">Offerings</a>
        <a href="#process">Process</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#faq">FAQs</a>
      </div>

    </div>
  );
};

export default HeroContent;
