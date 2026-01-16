import React from "react";
import "./brandSlider.css";
import BrandCard from "./BrandCard";

// Import Logos
import iitb from "../../assets/logos/IITbom.jpg";
import iitd from "../../assets/logos/IITDel.png";
import iitg from "../../assets/logos/IITGu.jpg";
import kurukshetra from "../../assets/logos/KU.jpg";
import nitk from "../../assets/logos/NITKUr.jpg";
import godrej from "../../assets/logos/godrej.jpg";

const brands = [
  { logo: iitb, alt: "IIT Bombay" },
  { logo: iitd, alt: "IIT Delhi" },
  { logo: iitg, alt: "IIT Guwahati" },
  { logo: kurukshetra, alt: "Kurukshetra University" },
  { logo: nitk, alt: "NIT Kurukshetra" },
  { logo: godrej, alt: "Godrej" },

  // duplicate for smooth infinite loop
  { logo: iitb, alt: "IIT Bombay" },
  { logo: iitd, alt: "IIT Delhi" },
  { logo: iitg, alt: "IIT Guwahati" },
  { logo: kurukshetra, alt: "Kurukshetra University" },
  { logo: nitk, alt: "NIT Kurukshetra" },
  { logo: godrej, alt: "Godrej" },
];

const BrandSlider = () => {
  return (
    <section className="brand-section">
      <div className="brand-inner">
        <h2>Trusted By Leading Institutions</h2>
        <p>
          Partnering with India's premier educational and corporate organizations
        </p>

        <div className="brand-slider">
          <div className="brand-track">
            {brands.map((brand, index) => (
              <BrandCard
                key={index}
                logo={brand.logo}
                alt={brand.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;
