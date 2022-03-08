import React from "react";
import DigioLogo from "../../Assets/digio_logo.jpg";

const LoginFooter = () => {
  return (
    <div className="LoginFootermain">
      <div className="footerLogo">
        <img src={DigioLogo} alt="" className="footerLogoImg" />
        <span>
          Powered by
          <br />
          <a href="https://www.digio.in/#/index">www.digio.in</a>
        </span>
      </div>
      <div className="steps">
        <span id="step">1</span>/3
      </div>
    </div>
  );
};

export default LoginFooter;
