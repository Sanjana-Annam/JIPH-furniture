import React from "react";
import "./offerings.css";

const OfferingCard = ({ icon, title, desc, delay }) => {
  return (
    <div className="offering-card-row" style={{ animationDelay: delay }}>
      <div className="offering-icon-box">
        {icon}
      </div>

      <div className="offering-content">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default OfferingCard;
