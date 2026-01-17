import React from "react";
import OfferingCard from "./OfferingCard";
import "./offerings.css";

// Import Images
import schoolImg from "../../assets/images/Classroom-Furniture18.webp";
import officeImg from "../../assets/images/Office & Workstation Solutions.avif";
import hostelImg from "../../assets/images/HostelFurniture.avif";
import libraryImg from "../../assets/images/Library & Lab Furniture.webp";

const Offering = () => {
  const data = [
    {
      id: 1,
      image: schoolImg,
      title: "School Furniture",
      desc: "Ergonomic desks, chairs, and classroom solutions designed to enhance learning environments and student comfort.",
      delay: "0.1s"
    },
    {
      id: 2,
      image: officeImg,
      title: "Office & Workstation Solutions",
      desc: "Modern workstations, executive furniture, and collaborative spaces that boost productivity and professionalism.",
      delay: "0.2s"
    },
    {
      id: 3,
      image: hostelImg,
      title: "Hostel Furniture",
      desc: "Durable beds, storage solutions, and study furniture built for institutional residential spaces.",
      delay: "0.3s"
    },
    {
      id: 4,
      image: libraryImg,
      title: "Library & Lab Furniture",
      desc: "Specialized reading tables, shelving systems, and laboratory workbenches with precision and durability.",
      delay: "0.4s"
    }
  ];

  return (
    <section id="offerings" className="offerings-section">

      <h2 className="offerings-title">Our Product Categories</h2>

      <p className="offerings-subtitle">
        Premium quality furniture solutions crafted for schools, offices, hostels, libraries and laboratories
      </p>

      <div className="offerings-grid">
        {data.map((item) => (
          <OfferingCard key={item.id} {...item} />
        ))}
      </div>

      <div className="offerings-cta">
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

export default Offering;
