import React from "react";
import styles from './Projects.module.css';
import ProjectCard from "../components/ProjectCard";
import RubiksCube from "../assets/RubiksCube.jpg";
import EightPuzzle from "../assets/8Puzzle.png";
import AfferenceLogo from "../assets/AfferenceLogo.jpg";
import Nexa from "../assets/Nexa.jpg";
import PersonalWebsite from "../assets/PersonalWebsite.jpg";

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Afference SDK",
      description: "A 4,000+ line C# SDK that will be deployed with Afference products to allow developers to create unique haptic sensations for users in their digital environments.",
      image: AfferenceLogo,
      link: "/projects/project-one",
      tools: "C# • Unity • UML • Python • NumPy • Matplotlib"
    },
    {
      title: "CubeFlow",
      description: "A beautiful Rubik's Cube timer with Google login and cloud support—a feature offered by only one other online timer.",
      image: RubiksCube,
      link: "/projects/project-two",
      tools: "HTML • CSS • JavaScript • Firebase • Node.js"
    },
    {
      title: "8-Puzzle Solver",
      description: "An AI agent that solves any scrambled 8-puzzle using three different local search algorithms and compares their respective performances.",
      image: EightPuzzle,
      link: "/projects/project-three",
      tools: "Python • Flask • React • CSS"
    },
    {
      title: "Nexa",
      description: "An app to help college students maintain professional relationships by using online information to craft personalized AI-generated conversation starters.",
      image: Nexa,
      link: "/projects/project-four",
      tools: "Figma • Customer Discovery"
    },
    {
      title: "Personal Website",
      description: "This website!",
      image: PersonalWebsite,
      link: "/projects/project-five",
      tools: "React • TypeScript • CSS • Vercel"
    }
  ];

  return (
    <div>
      <h1>Projects</h1>
      <div className={styles["projects-grid"]}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            tools={project.tools}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
