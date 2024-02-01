import React, { useState } from "react";
import Portfolio from "./Portfolio";
import "./styles.css";
import BlogSite from "./BlogSite";

const Hompage = () => {
  const [portfolio, setPortfolio] = useState(false);
  const [blog, setBlog] = useState(false);
  const handlePortfolio = () => {
    setPortfolio(<Portfolio />);
  };
  const handleBlog = () => {
    setBlog(<BlogSite />);
  };
  return (
    <div>
      {portfolio || blog || (
        <div className="container">
          <img src="./p-OT-folio/menu/Timmy Headshot.png" alt="Timilehin" />
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
            <button className="button" id="openPortfolio" onClick={handleBlog}>
              Visit my Blog
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hompage;
