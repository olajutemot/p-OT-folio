import React from "react";

const Skills = ({ handleSkills, handleProjects, skills, projects }) => {
  return (
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
  );
};

export default Skills;
