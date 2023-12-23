import React, { useState } from "react";
import Portfolio from "./Portfolio";
import "./styles.css";

const Hompage = () => {
  const [portfolio, setPortfolio] = useState(false);

  const handlePortfolio = () => {
    setPortfolio(<Portfolio />);
    console.log(portfolio);
  };

  return (
    <div>
      {portfolio || (
        <div className="container">
          <img src="menu/Timmy Headshot.png" alt="Timilehin" />
          <header>
            <h1>Hey I am olajutemo Timilehin</h1>
            <p>I am a Front-end Web Developer & software Engineer</p>
          </header>
          <div className="buttons">
            <button
              className="button"
              id="openPortfolio"
              onClick={handlePortfolio}
            >
              View my Portfolio
            </button>
            <button className="button" id="openPortfolio">
              Visit my Blog
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hompage;
