import React from "react";
import logo from "../assets/test.png";

const Login = () => {
  return (
    <>
      <div className="register">
        <div className="register-steps">
          <div className="register-steps__step">
            <img
              src={logo}
              style={{ width: "7rem", marginBottom: "1rem" }}
              alt="Gain Full Access"
            />
            <h2>Gain Full Access</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              mollis ipsum et egestas ultrices.
            </p>
          </div>
        </div>
        <div className="register-form form">
          <h1>Login</h1>
          <p>Lorem ipsum dolor sit amet...</p>
          <div className="form-group">
            <label>
              Email Address <span>*</span>
            </label>
            <input type="email" placeholder="user@example.com" />
          </div>
          <div className="form-group">
            <label>
              Password <span>*</span>
            </label>
            <input type="password" placeholder="*******" />
          </div>
          <p className="forgot">
            <a className="link" href="/forgot-password">
              Forgot Password?
            </a>
          </p>
          <div className="form-group">
            <button>Proceed</button>
          </div>
          <p className="no-member">
            Not yet a member?{" "}
            <a className="link" href="/get-started">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
