import React, { useState } from "react";
import logo from "../assets/test.png";

const Register = () => {
  const [index, setIndex] = useState(0);
  const slider = [
    {
      image: "/images/1.png",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis ipsum et egestas ultrices.",
    },
    {
      image: "/images/2.png",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis ipsum et egestas ultrices.",
    },
    {
      image: "/images/3.png",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis ipsum et egestas ultrices.",
    },
  ];

  const dots = [];

  for (let i = 0; i < slider.length; i++) {
    dots.push(
      <span
        className={index === i ? "active" : null}
        onClick={() => setIndex(i)}
        key={i}
      ></span>
    );
  }

  return (
    <>
      <div className="register">
        <div className="register-steps">
          <div className="register-steps__step">
            <img src={slider[index].image} alt={slider[index].title} />
            <h2>{slider[index].title}</h2>
            <p>{slider[index].text}</p>
          </div>
          <div className="register-steps__dots">{dots}</div>
        </div>
        <div className="register-form form">
          <img src={logo} alt="logo" />
          <h1>Create Account</h1>
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
          <div className="form-group">
            <button>Proceed</button>
          </div>
          <p className="no-member">
            Already a member?{" "}
            <a className="link" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
