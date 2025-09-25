import React from "react";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, link }) => {
  return (
    <a href={link} rel="noopener noreferrer" className={styles.cardLink}>
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
};

export default ServiceCard;
