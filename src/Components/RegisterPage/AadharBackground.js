import React from "react";
import "./Styles/Aadharbackground.css";
import NonDisclosure from "../../Assets/nonDisclosure.jpg";

const AadharBackground = (props) => {
  const openModal = () => {
    props.focus(true);
  };
  return (
    <div className="NonDisclosure">
      <div className="imageContainer">
        <img src={NonDisclosure} alt="" className="NonDisclosureImg" />
      </div>
      <div>
        <button
          className={props.submitted ? "RequestBtn disabled" : "RequestBtn"}
          onClick={openModal}
        >
          Request OTP to Sign
        </button>
      </div>
    </div>
  );
};

export default AadharBackground;
