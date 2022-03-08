import React from "react";
import "./Styles/LoginPage.css";
import Logo from "../../Assets/logo-digio.png";

const LoginHeader = () => {
  return (
    <header className="LoginHeader">
      <div className="TextContainer">
        Sign Document Using
        <br />
        <span className="mailId">sanket@digio.in</span>
      </div>
      <div className="LogoContainer">
        <img src={Logo} alt="" className="LogoImg" />
      </div>
    </header>
  );
};

export default LoginHeader;
