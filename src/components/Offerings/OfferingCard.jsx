import React from "react";
import "./offerings.css";

const OfferingCard = ({ image, title, desc, delay }) => {
  return (
    <div className="offering-card-row" style={{ animationDelay: delay }}>

      <div className="offering-image-box">
        <img src={image} alt={title} />
      </div>

      <div className="offering-content">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>

    </div>
  );
};

export default OfferingCard;
