import React from "react";
import ReactDOM from "react-dom/client";
import Hompage from "./Hompage";

const Portfolio = () => {
  return (
    <div class="portfolio lightmode" id="portfolioOverlay">
      <i class="fa-regular fa-moon fa-flip-horizontal" id="dark-button"></i>
      <i class="fa-regular fa-sun" id="light-button"></i>
      <div class="portfolio-container">
        <img
          id="portfolio-img"
          src="./Timmy_AI_genrated-removebg-preview-modified.png"
          alt="Timilehin"
        />
        <div id="socials">
          <a href="https://instagram.com/olajutemo_?igshid=OGQ5ZDc2ODk2ZA==">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/olajutemot">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://twitter.com/olajutemot">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/timilehinolajutemo/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div id="info">
          <div>
            <h3>1+</h3>
            <span>years of work</span>
          </div>
          <div>
            <h3>15+</h3>
            <span>Completed projects</span>
          </div>
          <div>
            <h3>10</h3>
            <span>Satisfied Customers</span>
          </div>
        </div>
        <div id="contact-info">
          <button id="download-CV">
            <a
              href="https://docs.google.com/document/d/1Qr93NMRdaiEXkNffimNsAe4TDVsc3UkB-OlbcrLAN_A/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Check Resume <i class="fa-solid fa-arrow-right"></i>
            </a>
          </button>
          <a href="https://wa.link/fw0mz7" target="_blank" rel="noreferrer">
            {" "}
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        <div class="filter-tabs">
          <a
            id="projects-button"
            class="project-toggle project-toggle-active"
            href="#projects"
          >
            Projects{" "}
          </a>
          <a id="skills-button" class="project-toggle" href="#skills">
            Skills
          </a>
        </div>
        {/* <!-- =========================FILTER SECTION========================== --> */}
        <section class="filter-sections">
          {/* <!-- ===================PROJECTS===================== --> */}
          <section class="grid-project-item" id="projects">
            <div class="project-items">
              <img src="./Project tile 1.png" alt="Project 1" />
              <div class="project-overlay">
                <h3>Web App</h3>
                <p>Dice game</p>
                <i class="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
            <div class="project-items">
              <img src="./project tile 2.png" alt="Project 2" />
              <div class="project-overlay">
                <h3>Web</h3>
                <p>interactive and responsive website</p>
                <i class="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
            <div class="project-items">
              <img src="./project tile 4.png" alt="Project 4" />
              <div class="project-overlay">
                <h3>Web</h3>
                <p>Responsive website</p>
                <i class="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
            <div class="project-items">
              <img src="./project tile 5.png" alt="Project 5" />
              <div class="project-overlay">
                <h3>Web</h3>
                <p>Burger Description website</p>
                <i class="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
          </section>
          {/* <!-- ===================SKILLS===================== --> */}
          <section class="skills-container hidden" id="skills">
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
        <button id="closePortfolio">Close</button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hompage />
  </React.StrictMode>
);
