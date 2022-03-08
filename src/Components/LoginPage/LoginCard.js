import React from "react";

const LoginCard = (props) => {
  const emailSubmitted = (e) => {
    e.preventDefault();
    props.mailStatus(true);
  };
  return (
    <div className="loginBox">
      <div className="loginCardMain">
        <div className="gmailLogin">
          <div>
            sanket@digio.in uses gmail?
            <br />
            login using gmail
          </div>
          <div>
            <button className="gmailBtn">Google</button>
          </div>
        </div>
      </div>
      <div className="Border">
        <span>OR</span>
      </div>
      <div className="emailLogin">
        <form onSubmit={emailSubmitted}>
          <div className="emailLoginInner">
            <div className="label">Proceed with your email address</div>
            <div className="emailContainer">
              <input id="emailInput" type="email" required />
            </div>
            <div className="TandC">
              By continuing i confirm to the Terms and Services and Privacy
              Policy of{" "}
              <a href="https://www.digio.in/" target="_blank" rel="noreferrer">
                digio.in
              </a>
            </div>
            <div className="SubmitContainer">
              <input type="submit" className="submitBtn" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
