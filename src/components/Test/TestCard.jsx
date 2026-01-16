import React from "react";
import "./test.css";

const TestCard = ({ name, text }) => {
  return (
    <div className="test-card">

      <div className="quote-icon">“</div>
      <div className="test-info">
        <h4>{name}</h4>
      </div>

      <p className="test-text">
        {text}
      </p>

      
    </div>
  );
};

export default TestCard;
