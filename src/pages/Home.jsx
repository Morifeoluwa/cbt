import React from "react";

import logo from "../assets/test-white.png";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="home-main">
          <div className="main-one">
            <div className="home-title">
              <h1 className="home-title__header">Online CBT Manager</h1>
            </div>
            <div className="home-body">
              <h2 className="home-body__header">
                Manage everything in one place
              </h2>
              <p>Get to understand it better</p>
              <div className="home-body__bottom">
                <hr />
                <a href="/get-started">
                  <button>Get Started</button>
                </a>
              </div>
            </div>
          </div>
          <div className="main-two">
            <div>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
