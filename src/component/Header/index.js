import React from "react";
import "./index.css";

const Header = () => {
  return (
    <nav className="header">
      <h1 className="company-name">TANN TRIM</h1>
      <div className="head-card">
        <p className="name">Bags</p>
        <p className="name">Travel</p>
        <p className="name">Accesories</p>
        <p className="name">Gifting</p>
        <p className="name">Jewelery</p>
      </div>
      <div className="app-bar-nav">
        <img
          src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713086786/Frame_51_ufoohk.png"
          alt="logo"
          className="logo-img"
        />
        <img
          src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713087125/Frame_52_vjsneo.png"
          alt="logo"
          className="logo-img"
        />
        <img
          src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713087143/Frame_53_w1bue2.png"
          alt="logo"
          className="logo-img"
        />
        <img
          src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713087161/Frame_54_m1fta6.png"
          alt="logo"
          className="logo-img"
        />
      </div>
    </nav>
  );
};

export default Header;
