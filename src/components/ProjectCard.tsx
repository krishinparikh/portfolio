import React from "react";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tools: string; // New property for tools/technologies
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, tools }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.tools}>{tools}</p> {/* New line for tools/technologies */}
      </div>
    </a>
  );
};

export default ProjectCard;
