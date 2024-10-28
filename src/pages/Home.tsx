import React from "react";
import styles from "./Home.module.css";
import Headshot from "../assets/Headshot.jpg";

// Import your icons
import LinkedinIcon from "../assets/LinkedinIcon.png";
import GithubIcon from "../assets/GithubIcon.png";
import YoutubeIcon from "../assets/YoutubeIcon.png";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainerWrapper}>
      <div className={styles.homeContainer}>
        <div className={styles.content}>
          <h1>Krishin Parikh</h1>
          <p>Passionate about designing and building technology to strengthen human connections.</p>
          <div className={styles.iconLinks}>
            <a href="https://www.linkedin.com/in/krishin-parikh/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedinIcon} alt="Icon 1" className={styles.icon} />
            </a>
            <a href="https://github.com/krishinparikh" target="_blank" rel="noopener noreferrer">
              <img src={GithubIcon} alt="Icon 2" className={styles.icon} />
            </a>
            <a href="https://www.youtube.com/@k2bfree" target="_blank" rel="noopener noreferrer">
              <img src={YoutubeIcon} alt="Icon 3" className={styles.icon} />
            </a>
          </div>
        </div>
        <img src={Headshot} alt="Krishin Parikh" className={styles.image} />
      </div>
    </div>
  );
};

export default Home;
