import React from "react";
import styles from './Projects.module.css';
import ProjectCard from "../components/ProjectCard";
import RubiksCube from "../assets/RubiksCube.jpg";
import EightPuzzleImg from "../assets/8Puzzle.png";
import AfferenceLogo from "../assets/AfferenceLogo.jpg";
import NexaImg from "../assets/Nexa.jpg";
import PersonalWebsite from "../assets/PersonalWebsite.jpg";
import PeerEd from "../assets/PeerEd.png";
import TOFLogo from "../assets/TOFLogo.png";
// import FortuityLogo from "../assets/FortuityLogo.png";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";

const Projects: React.FC = () => {
  const projectData = [
    {
        title: "The O.H.I.O. Fund CRM",
        description: "An advanced CRM for an investment firm to streamline management of deal flow, fundraising, and portfolio tracking.",
        image: TOFLogo,
        link: "/projects/tof-crm",
        tools: "React • TypeScript • FastAPI • LangChain"
    },
    {
      title: "Afference SDK",
      description: "A C# library that allows software developers to use Afference products to integrate complex haptics into their digital experiences.",
      image: AfferenceLogo,
      link: "/projects/afference-sdk",
      tools: "C# • Unity • UML • Python • NumPy • Matplotlib"
    },
    // {
    //     title: "Fortuity",
    //     description: "A consumer SaaS platform that accelerates personalized networking for job seekers.",
    //     image: FortuityLogo,
    //     link: "/projects/fortuity",
    //     tools: "Startup Ideation"
    // },
    {
      title: "CubeFlow",
      description: "A beautiful Rubik's Cube timer with Google login and cloud support—a feature offered by only one other online timer.",
      image: RubiksCube,
      link: "/projects/cube-flow",
      tools: "HTML • CSS • JavaScript • Firebase • Node.js"
    },
    
    {
      title: "8-Puzzle Solver",
      description: "An AI agent web application that solves the famous 8-puzzle using three local search algorithms.",
      image: EightPuzzleImg,
      link: "/projects/eight-puzzle",
      tools: "Python • Flask • React.js • TypeScript • CSS • Render • Vercel"
    },
    {
      title: "Nexa",
      description: "A mobile app AI assistant to help college students maintain their professional relationships.",
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
      <PageTitle title="Portfolio" subtitle="A collection of my internship work, startup ideas, and side projects. Click inside for a detailed case study of each project, from ideation to launch."></PageTitle>
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
      <Footer></Footer>
    </div>
  );
};

export default Projects;
