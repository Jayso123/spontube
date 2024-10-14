import React, { useState } from "react";
import "../Css/Login.css";
import logo from "../assets/images.png";
import "font-awesome/css/font-awesome.min.css";
// import Signup from "./Signup";
// import { NavLink } from "react-router-dom";

function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleToggle = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Remember Me:", rememberMe);
  };

  return (
    <>
      <div className="body try">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" id="logo" />
          </div>
          <h2>Log in to Spontube</h2>
          <div className="login">
            <div className="google">
              <p className="g-logo"></p>
              <h3 className="abc">Continue with Google</h3>
            </div>
            <div className="FB">
              <p className="fb-logo"></p>
              <h3 className="abd">Continue with Facebook</h3>
            </div>
            <div className="Apple">
              <p className="AP-logo"></p>
              <h3 className="abe">Continue with Apple</h3>
            </div>
            <div className="Mobile">
              <h3 className="aba">Continue with Mobile Number</h3>
            </div>
          </div>
          <br />
          <br />
          <hr className="hr" />
          <div className="login-con">
            <div className="login-d">
              <form onSubmit={handleSubmit}>
                <label className="label-email" htmlFor="email">
                  Email or username
                </label>
                <br />
                <p className="data-1">
                  <input
                    aria-invalid="false"
                    id="email"
                    type="text"
                    placeholder="Email or username"
                    autoCapitalize="off"
                    autoComplete="off"
                  />
                </p>
                <br />
                <label className="label-pass" htmlFor="pass">
                  Password
                </label>
                <br />
                <p className="data-1">
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    autoComplete="off"
                    placeholder="Password"
                  />
                  <span id="eye" className="fa fa-eye"></span>
                </p>

                <div className="remember-me">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={handleToggle}
                    />
                    <span className="slider"></span>
                  </label>
                  <span className="me">Remember Me</span>
                </div>

                <button type="submit" className="sub">
                  {/* <NavLink to="/signup">Login</NavLink> */}
                  Login
                </button>

                <br />
                <br />
                <p className="forget">
                  <u className="ww">Forgot your Password?</u>
                </p>
              </form>
              <br />
              <hr className="hrr" />
              <p className="sign">
                Don't have an account?
                <u className="ww">Sign up for Spontube</u>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="fo">
          <p className="text">
            This site is protected by reCAPTCHA and the Google
            <u className="ww">Privacy Policy</u> and
            <u className="ww">Terms of Service</u> apply.
          </p>
        </p>
      </div>
    </>
  );
}

export default Login;
