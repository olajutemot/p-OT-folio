import React from "react";
import { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState(false);
  const updatedSkills = setSkills(true);
  return (
    <div>
      {/* <section
        className={skills ? "skills-container hidden" : "skills-container"}
        id="skills"
        skills={updatedSkills}
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
      </section> */}
    </div>
  );
};

export default Skills;
