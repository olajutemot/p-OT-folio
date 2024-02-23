import React, { useState } from "react";
import "./styles.css";
import Project from "./Project";
import Skills from "./Skills";
import Socials from "./Socials";
import Info from "./Info";
import Filter from "./Filter";
import Home from "../pages/Home";

const Portfolio = () => {
  const [skills, setSkills] = useState(true);
  const [projects, setProjects] = useState(true);
  const [close, setClose] = useState(false);
  const handleSkills = () => {
    setSkills(false);
  };
  const handleProjects = () => {
    setSkills(true);
    setProjects(true);
  };
  const handleClose = () => {
    setClose(<Home />);
  };
  return (
    <div>
      {close || (
        <div class="portfolio lightmode" id="portfolioOverlay">
          <div class="portfolio-container">
            <img
              id="portfolio-img"
              src="../p-OT-folio/menu/Timmy Headshot.png"
              alt="Timilehin"
            />
            <Socials />
            <Info />
            <Filter
              handleSkills={handleSkills}
              handleProjects={handleProjects}
              skills={skills}
              projects={projects}
            />

            <section class="filter-sections">
              <Project
                handleSkills={handleSkills}
                handleProjects={handleProjects}
                skills={skills}
                projects={projects}
              />

              <Skills
                handleSkills={handleSkills}
                handleProjects={handleProjects}
                skills={skills}
                projects={projects}
              />
            </section>
            <button
              className="button"
              id="closePortfolio"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
