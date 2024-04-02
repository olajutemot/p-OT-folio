import React, { useState } from "react";
import "../components/styles.css";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Socials from "../components/Socials";
import Info from "../components/Info";
import Filter from "../components/Filter";
// import Home from "../pages/Home";

const Portfolio = () => {
  const [skills, setSkills] = useState(true);
  const [projects, setProjects] = useState(true);
  // const [close, setClose] = useState(false);
  const handleSkills = () => {
    setSkills(false);
  };
  const handleProjects = () => {
    setSkills(true);
    setProjects(true);
  };
  const handleClose = () => {
    window.location.href = "/";
    // setClose(<Home />);
  };
  return (
    <div>
      {/* {close || ( */}
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
          <button className="button" id="closePortfolio" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Portfolio;
