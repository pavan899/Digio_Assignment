import React, { useState, useRef } from "react";
import "./Styles/RegisterAadhar.css";
import AadharLogo from "../../Assets/Aadhaar_Logo.png";

const AadharRegister = (props) => {
  const aadharSubmitButton = useRef(null);
  const otpSubmitButton = useRef(null);
  const otpInputBox = useRef(null);
  //hardcoded default otp
  const otp = "000000";

  const [aadharNumber, updateAadhar] = useState("");
  const [OtpNumber, updateOtp] = useState("");
  const outFocused = () => {
    props.focus(false);
  };
  const focused = (e) => {
    e.stopPropagation();
  };
  const aadarUpdated = (e) => {
    e.target.value.length <= 12 && updateAadhar((prevValue) => e.target.value);
  };
  const OtpUpdated = (e) => {
    e.target.value.length <= 6 && updateOtp((prevValue) => e.target.value);
  };
  const aadharSubmitted = (e) => {
    e.preventDefault();
    otpInputBox.current.disabled = false;
  };
  const otpSubmitted = (e) => {
    e.preventDefault();
    otp === OtpNumber ? props.submitted(true) : props.submitted(false);
    otpInputBox.current.style.borderColor = "red";
  };
  return (
    <div className="AadharregisterMain" onClick={outFocused}>
      <div className="AadharPopup">
        <div className="aadharModalBox" onClick={focused}>
          <div className="AadharIconContainer">
            <img src={AadharLogo} alt="" className="AadharImage" />
          </div>
          <div className="inputBoxContainer">
            <form onSubmit={aadharSubmitted}>
              <div className="AadharNumberContainer">
                <input
                  className="aadharNumber"
                  placeholder="Ex: 0123-0123-0123"
                  onChange={aadarUpdated}
                  value={aadharNumber}
                />
                <input
                  type="submit"
                  className="SubmitBtn"
                  disabled={aadharNumber.length === 12 ? false : true}
                  ref={aadharSubmitButton}
                />
                <div className="checkboxContainer">
                  <input type="checkbox" />{" "}
                  <span>I agree to e sign the KYC to get started</span>
                </div>
              </div>
            </form>

            <div className="OtpContainer">
              <form onSubmit={otpSubmitted}>
                <input
                  className="Otp"
                  placeholder="Ex: 012345"
                  onChange={OtpUpdated}
                  value={OtpNumber}
                  disabled
                  ref={otpInputBox}
                />
                <input
                  type="submit"
                  className="SubmitBtn"
                  disabled={OtpNumber.length === 6 ? false : true}
                  ref={otpSubmitButton}
                />
              </form>
            </div>
            <p>Hardcoded otp is 000000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadharRegister;
