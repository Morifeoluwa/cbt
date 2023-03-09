import React from "react";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="home-main">
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
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
