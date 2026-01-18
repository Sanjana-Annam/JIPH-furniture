import React from "react";
import "./header.css";
import logo from "../../assets/categories/BrandLogo.png";

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">

        <div className="logo-area">
          <img src={logo} alt="Jiph Furniture Logo" />
        </div>

       

      </div>
    </header>
  );
};

export default Header;
