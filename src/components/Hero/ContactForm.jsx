import React from "react";
import "./contactform.css";

const ContactForm = () => {

  const openZohoBooking = () => {
    window.open(
      "https://makinglangingpages.zohobookings.in/#/358248000000037054",
      "_blank"
    );
  };

  return (
    <div className="contact-card">

      <h2>Schedule a Free Consultation</h2>

      <p className="contact-desc">
        Book a one-on-one discussion with our furniture expert to plan your project, 
        get design suggestions, and receive a custom quotation.
      </p>

      <div className="contact-features">
        <span>✔ Expert Guidance</span>
        <span>✔ Custom Solutions</span>
        <span>✔ Free Estimates</span>
      </div>

      <button className="contact-btn" onClick={openZohoBooking}>
        Book Appointment →
      </button>

      <small className="contact-note">
        No spam. Your information is 100% private.
      </small>

    </div>
  );
};

export default ContactForm;
