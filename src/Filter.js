import React, { useState } from "react";
// import Skills from "./Skills";
// import Project from "./Project";

const Filter = ({ updatedSkills }) => {
  //   const [skills, setSkills] = useState("");
  //   const [projects, setProjects] = useState("");
  const updatedSkill = updatedSkills;
  const handleSkills = () => updatedSkill;

  //   const handleProjects = () => {
  //     setProjects(true);
  //   };
  return (
    <div class="filter-tabs">
      <a
        id="projects-button"
        class="project-toggle project-toggle-active"
        href="#projects"
        // onClick={handleProjects}
      >
        Projects
      </a>
      <a
        id="skills-button"
        class="project-toggle"
        href="#skills"
        onClick={handleSkills}
      >
        Skills
      </a>
    </div>
  );
};

export default Filter;
