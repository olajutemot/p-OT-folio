import React from "react";

const Project = ({ handleSkills, handleProjects, skills, projects }) => {
  return (
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
  );
};

export default Project;
