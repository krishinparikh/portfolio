import React from "react";
import styles from "./Footer.module.css";

import LinkedinIcon from "../assets/LinkedinIcon.png";
import GithubIcon from "../assets/GithubIcon.png";
import YoutubeIcon from "../assets/YoutubeIcon.png";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h1 className={styles.name}><a href="/">Krishin Parikh</a></h1>
                <div className={styles.social}>
                    <a href="mailto:krishinparikh@gmail.com">krishinparikh@gmail.com</a>
                    <a
                        href="https://www.linkedin.com/in/krishin-parikh/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={LinkedinIcon}
                            alt="LinkedIn Icon"
                            className={styles.icon}
                        />
                    </a>
                    <a
                        href="https://github.com/krishinparikh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={GithubIcon}
                            alt="GitHub Icon"
                            className={styles.icon}
                        />
                    </a>
                    <a
                        href="https://www.youtube.com/@k2bfree"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={YoutubeIcon}
                            alt="YouTube Icon"
                            className={styles.icon}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


