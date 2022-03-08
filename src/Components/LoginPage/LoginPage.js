import React from "react";
import "./Styles/LoginPage.css";
import LoginHeader from "./LoginHeader.js";
import LoginCard from "./LoginCard.js";
import LoginFooter from "./LoginFooter.js";

const LoginPage = (props) => {
  const mailStatus = () => {
    props.mailStatus(true);
  };
  return (
    <div className="LoginContainer">
      <LoginHeader />
      <LoginCard mailStatus={mailStatus} />
      <LoginFooter />
    </div>
  );
};

export default LoginPage;
