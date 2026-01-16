import React from "react";
import TestCard from "./TestCard";
import "./test.css";

const Test = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sanya Kapoor",
      text: "Jiph Furniture Pvt. Ltd. provided us with exceptional school furniture. I am fully satisfied and will order again!"
    },
    {
      id: 2,
      name: "Nisha Varma",
      text: "The wooden wardrobes from Jiph Furniture Pvt. Ltd. are superb quality and a great addition to our facilities!"
    },
    {
      id: 3,
      name: "Kiran Menon",
      text: "The writing pad chairs from Jiph Furniture Pvt. Ltd. exceeded our expectations. Highly recommend for any educational setting!"
    },
    {
      id: 4,
      name: "Vihaan Reddy",
      text: "Jiph Furniture Pvt. Ltd. transformed our classroom with their furniture. We love the results and highly recommend them!"
    },
    {
      id: 5,
      name: "Rajesh Kumar",
      text: "We recently outfitted our hostel with bunk beds from Jiph Furniture Pvt. Ltd. Perfect for our needs. Great value and service!"
    }
  ];

  return (
    <section id="testimonials" className="test-section">

      <h2 className="test-title">Client Experiences</h2>

      <p className="test-subtitle">
        Real feedback from our satisfied customers
      </p>

      <div className="test-grid">
        {testimonials.map((item) => (
          <TestCard key={item.id} {...item} />
        ))}
      </div>

    </section>
  );
};

export default Test;
