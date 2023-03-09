import React from "react";
import { Link } from "react-router-dom";
import { VscSettings } from "react-icons/vsc";

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
                <Link to="/get-started">
                  <button>Get Started</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="main-two">
            <div>
              <VscSettings className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
