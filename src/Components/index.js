import React, { useState } from "react";
import LoginPage from "./LoginPage/LoginPage.js";
import RegisterPage from "./RegisterPage/RegisterPage.js";

const Components = () => {
  const [mailLogged, updateMailLogged] = useState(false);
  const emailStatus = (value) => {
    updateMailLogged(value);
  };
  return (
    <>
      {mailLogged ? <RegisterPage /> : <LoginPage mailStatus={emailStatus} />}
    </>
  );
};
export default Components;
