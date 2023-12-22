import React from "react";

const Filter = () => {
  return (
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
  );
};

export default Filter;
