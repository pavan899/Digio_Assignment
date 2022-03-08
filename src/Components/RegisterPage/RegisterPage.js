import React, { useState } from "react";
import RegisterHeader from "./RegisterHeader";
import AadharRegister from "./AadharRegister";
import AadharBackground from "./AadharBackground.js";
import "./Styles/RegisterPage.css";
import { FaCheckCircle } from "react-icons/fa";

const RegisterPage = () => {
  const [focus, updatefocus] = useState(true);
  const [otpStatus, updateOtpStatus] = useState(false);
  const outFocused = (val) => {
    updatefocus(val);
  };
  const submittedOtp = (status) => {
    updateOtpStatus(status);
  };
  return (
    <div className="registerPageMain">
      <RegisterHeader />
      {focus && !otpStatus ? (
        <AadharRegister submitted={submittedOtp} focus={outFocused} />
      ) : focus && otpStatus ? (
        <div className="Successful">
          <FaCheckCircle />
          &nbsp;Aadhar Verified Successfully!
        </div>
      ) : (
        ""
      )}
      <AadharBackground focus={outFocused} submitted={otpStatus} />
    </div>
  );
};

export default RegisterPage;
