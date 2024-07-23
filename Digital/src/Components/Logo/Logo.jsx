import React from "react";
import logo from "../../assets/Vector.svg";
import "./Logo.css";

function Logo() {
  return (
    <div className="Logotipo">
      <img src={logo} alt="Logo" className="Logo-img" />
      <p>Digital Store</p>
    </div>
  );
}

export default Logo;
