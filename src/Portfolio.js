import React from "react";
import { useState } from "react";
import "./styles.css";
// import Project from "./Project";
// import Skills from "./Skills";
import Socials from "./Socials";
import Info from "./Info";
// import Filter from "./Filter";

const Portfolio = () => {
  const [skills, setSkills] = useState(true);
  const [projects, setProjects] = useState(true);
  const handleSkills = () => {
    setSkills(false);
  };
  const handleProjects = () => {
    setSkills(true);
    setProjects(true);
  };
  return (
    <div class="portfolio lightmode" id="portfolioOverlay">
      <div class="portfolio-container">
        <img id="portfolio-img" src="menu/Timmy Ai.png" alt="Timilehin" />
        <Socials />
        <Info />
        {/* <Filter /> */}
        <div class="filter-tabs">
          <a
            id="projects-button"
            className={
              skills && projects
                ? "project-toggle project-toggle-active"
                : "project-toggle"
            }
            href="#projects"
            onClick={handleProjects}
          >
            Projects{" "}
          </a>
          <a
            id="skills-button"
            className={
              skills && projects
                ? "project-toggle"
                : "project-toggle project-toggle-active"
            }
            href="#skills"
            onClick={handleSkills}
          >
            Skills
          </a>
        </div>
        <section class="filter-sections">
          {/* <Project /> */}
          <section
            className={skills && projects ? "grid-project-item" : "hidden"}
            id="projects"
          >
            <div class="project-items">
              <img src="menu/Project tile 1.png" alt="Project 1" />
              <div class="project-overlay">
                <h3>Web App</h3>
                <p>Dice game</p>
                <i class="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
            <div class="project-items">
              <img src="menu/project tile 2.png" alt="Project 2" />
              <div class="project-overlay">
                <h3>Web</h3>
                <p>interactive and responsive website</p>
                <i class="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
            <div class="project-items">
              <img src="menu/project tile 4.png" alt="Project 4" />
              <div class="project-overlay">
                <h3>Web</h3>
                <p>Responsive website</p>
                <i class="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
            <div class="project-items">
              <img src="menu/project tile 5.png" alt="Project 5" />
              <div class="project-overlay">
                <h3>Web</h3>
                <p>Burger Description website</p>
                <i class="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
          </section>
          {/* <Skills /> */}
          <section
            className={skills && projects ? "hidden" : "skills-container"}
            id="skills"
          >
            <div class="frontend">
              <h3>Frontend Developer</h3>

              <div class="Skills-grid">
                <div>
                  <article class="skill-details">
                    <i class="fa-regular fa-circle-check fa-2xs"></i>
                    <div>
                      <h3 class="skill-name">HTML</h3>
                      <p class="skill-level">Advanced</p>
                    </div>
                  </article>

                  <article class="skill-details">
                    <i class="fa-regular fa-circle-check fa-2xs"></i>
                    <div>
                      <h3 class="skill-name">CSS</h3>
                      <p class="skill-level">Intermediate</p>
                    </div>
                  </article>

                  <article class="skill-details">
                    <i class="fa-regular fa-circle-check fa-2xs"></i>
                    <div>
                      <h3 class="skill-name">JAVASCRIPT</h3>
                      <p class="skill-level">Intermediate</p>
                    </div>
                  </article>
                </div>

                <div>
                  <article class="skill-details">
                    <i class="fa-regular fa-circle-check fa-2xs"></i>
                    <div>
                      <h3 class="skill-name">REACT</h3>
                      <p class="skill-level">Basic</p>
                    </div>
                  </article>

                  <article class="skill-details">
                    <i class="fa-regular fa-circle-check fa-2xs"></i>
                    <div>
                      <h3 class="skill-name">BOOTSTRAP</h3>
                      <p class="skill-level">Basic</p>
                    </div>
                  </article>

                  <article class="skill-details">
                    <i class="fa-regular fa-circle-check fa-2xs"></i>
                    <div>
                      <h3 class="skill-name">GIT</h3>
                      <p class="skill-level">Intermediate</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div class="backend">
              <h3>Backend Developer</h3>
              <div class="Skills-grid">
                <div>
                  <article class="skill-details">
                    <i class="fa-regular fa-circle-check fa-2xs"></i>
                    <div>
                      <h3 class="skill-name">NODE JS</h3>
                      <p class="skill-level">Basic</p>
                    </div>
                  </article>

                  <article class="skill-details">
                    <i class="fa-regular fa-circle-check fa-2xs"></i>
                    <div>
                      <h3 class="skill-name">PYTHON</h3>
                      <p class="skill-level">Basic</p>
                    </div>
                  </article>
                  <article class="skill-details">
                    <i class="fa-regular fa-circle-check fa-2xs"></i>
                    <div>
                      <h3 class="skill-name">MY SQL</h3>
                      <p class="skill-level">Basic</p>
                    </div>
                  </article>
                </div>
                <div>
                  <article class="skill-details">
                    <i class="fa-regular fa-circle-check fa-2xs"></i>
                    <div>
                      <h3 class="skill-name">MY SQL</h3>
                      <p class="skill-level">Basic</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </section>
        <button className="button" id="closePortfolio">
          Close
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
