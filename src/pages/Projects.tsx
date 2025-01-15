import React from "react";
import styles from './Projects.module.css';
import ProjectCard from "../components/ProjectCard";
import RubiksCube from "../assets/RubiksCube.jpg";
import EightPuzzleImg from "../assets/8Puzzle.png";
import AfferenceLogo from "../assets/AfferenceLogo.jpg";
import NexaImg from "../assets/Nexa.jpg";
import PersonalWebsite from "../assets/PersonalWebsite.jpg";
import PeerEd from "../assets/PeerEd.png";

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Afference SDK",
      description: "A 4,000+ line C# SDK that allows developers to use Afference products to integrate haptics into their digital experiences.",
      image: AfferenceLogo,
      link: "/projects/afference-sdk",
      tools: "C# • Unity • UML • Python • NumPy • Matplotlib"
    },
    {
      title: "CubeFlow",
      description: "A beautiful Rubik's Cube timer with Google login and cloud support—a feature offered by only one other online timer.",
      image: RubiksCube,
      link: "/projects/cube-flow",
      tools: "HTML • CSS • JavaScript • Firebase • Node.js"
    },
    {
      title: "8-Puzzle Solver",
      description: "An AI agent that solves any scrambled 8-puzzle using three different local search algorithms and compares their respective performances.",
      image: EightPuzzleImg,
      link: "/projects/eight-puzzle",
      tools: "Python • Flask • React.js • TypeScript • CSS • Render • Vercel"
    },
    {
      title: "Nexa",
      description: "An app to help college students maintain professional relationships by using online information to craft personalized AI-generated conversation starters.",
      image: NexaImg,
      link: "/projects/nexa",
      tools: "Figma • Customer Discovery"
    },
    {
      title: "Personal Website",
      description: "This website!",
      image: PersonalWebsite,
      link: "/",
      tools: "React.js • TypeScript • CSS • Vercel"
    },
    {
        title: "PeerEd",
        description: "A nonprofit program facilitating peer-to-peer learning between high school and middle school students.",
        image: PeerEd,
        link: "/projects/peer-ed",
        tools: "Startup Ideation"
    },
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
