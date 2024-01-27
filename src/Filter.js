import React from "react";
// import Skills from "./Skills";
// import Project from "./Project";

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

// const Filter = ({ updatedSkills }) => {
//   //   const [skills, setSkills] = useState("");
//   //   const [projects, setProjects] = useState("");
//   // const updatedSkill = updatedSkills;
//   // const handleSkills = () => updatedSkill;

//   //   const handleProjects = () => {
//   //     setProjects(true);
//   //   };

//   const [skills, setSkills] = useState(true);
//   const [projects, setProjects] = useState(true);
//   const handleSkills = () => {
//     setSkills(false);
//   };
//   const handleProjects = () => {
//     setSkills(true);
//     setProjects(true);
//   };
//   return (
//     <div class="filter-tabs">
//       <a
//         id="projects-button"
//         className={
//           skills && projects
//             ? "project-toggle project-toggle-active"
//             : "project-toggle"
//         }
//         href="#projects"
//         onClick={handleProjects}
//       >
//         Projects{" "}
//       </a>
//       <a
//         id="skills-button"
//         className={
//           skills && projects
//             ? "project-toggle"
//             : "project-toggle project-toggle-active"
//         }
//         href="#skills"
//         onClick={handleSkills}
//       >
//         Skills
//       </a>
//     </div>
//     // <div class="filter-tabs">
//     //   <a
//     //     id="projects-button"
//     //     class="project-toggle project-toggle-active"
//     //     href="#projects"
//     //     // onClick={handleProjects}
//     //   >
//     //     Projects
//     //   </a>
//     //   <a
//     //     id="skills-button"
//     //     class="project-toggle"
//     //     href="#skills"
//     //     onClick={handleSkills}
//     //   >
//     //     Skills
//     //   </a>
//     // </div>
//   );
// };

export default Filter;
