import React, { useState } from "react";
import "./styles.css";

const Hompage = () => {
  const [portfolio, setPortfolio] = useState("");

  const handlePortfolio = () => {
    setPortfolio(<portfolio />);
  };

  return (
    <div className="container">
      <img src="menu/Timmy Headshot.png" alt="Timilehin" />
      <header>
        <h1>Hey I am olajutemo Timilehin</h1>
        <p>I am a Front-end Web Developer & software Engineer</p>
      </header>
      <div className="buttons">
        <button id="openPortfolio" onClick={handlePortfolio}>
          View my Portfolio
        </button>
        <button id="openPortfolio">Visit my Blog</button>
      </div>
    </div>
  );
};

export default Hompage;
