import React from "react";

const Filter = ({ handleSkills, handleProjects, skills, projects }) => {
  return (
    <div className="filter-tabs">
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
  );
};

export default Filter;
