import React from "react";
import "./styles.css";
import Filter from "./Filter";
import Project from "./Project";
import Skills from "./Skills";
import Socials from "./Socials";
import Info from "./Info";

const Portfolio = () => {
  return (
    <div class="portfolio lightmode" id="portfolioOverlay">
      <div class="portfolio-container">
        <img id="portfolio-img" src="menu/Timmy Ai.png" alt="Timilehin" />
        <Socials />
        <Info />
        <Filter />
        <section class="filter-sections">
          <Project />
          <Skills />
        </section>
        <button id="closePortfolio">Close</button>
      </div>
    </div>
  );
};

export default Portfolio;
