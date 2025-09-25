import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Headshot from "../assets/Headshot.jpg";
import Footer from "../components/Footer";

// Import your icons
import LinkedinIcon from "../assets/LinkedinIcon.png";
import GithubIcon from "../assets/GithubIcon.png";
import YoutubeIcon from "../assets/YoutubeIcon.png";


const Home: React.FC = () => {
    const phrases = [
        "seek discomfort",
        "process over outcomes",
        "invest in relationships",
        "work hard, play hard",
        "follow curiosity",
        "seek different viewpoints",
        "walk the talk",
        "focus on the long-term",
    ];

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const intervalDuration = 3000; // Total time for each phrase
        const fadeDuration = 500; // Time for fade transition

        const interval = setInterval(() => {
            // Start fade out
            setIsVisible(false);

            // Wait for fade out, then change text and fade in
            setTimeout(() => {
                setCurrentPhraseIndex((prevIndex) =>
                    prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
                );
                setIsVisible(true);
            }, fadeDuration);
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <div>
            <div className={styles.homeContainerWrapper}>
                <div className={styles.homeContainer}>
                    <div className={styles.content}>
                        <h1>Krishin Parikh</h1>
                        <div
                            className={`${styles.rotatingText} ${
                                isVisible ? styles.visible : styles.hidden
                            }`}
                        >
                            {phrases[currentPhraseIndex]}
                        </div>
                        <div className={styles.iconLinks}>
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
                    <img
                        src={Headshot}
                        alt="Krishin Parikh"
                        className={styles.image}
                    />
                </div>

                {/* New paragraph section */}
                <div className={styles.aboutSection}>
                    <p>
                        I am a technology leader who thrives at creating structure from ambiguity — with the mindset of an engineer and entrepreneur.
                    </p>

                    <p>
                        📚 I study Computer Science, Finance, and Economics at{" "}
                        <a
                            href="http://case.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Case Western Reserve University
                        </a>{" "}
                        (Class of 2026).
                    </p>

                    <p>
                        🌎 I have a track record of delivering substantial value through various internships across finance, VR/AR, and healthcare:
                    </p>

                    <ul>
                        <li>
                            Product Engineering at{" "}
                            <a
                                href="http://theohiofund.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                The O.H.I.O. Fund
                            </a>{" "}
                            (Present)
                        </li>
                        <li>
                            Software Engineering at{" "}
                            <a
                                href="http://afference.io"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Afference
                            </a>{" "}
                            (Summer/Fall 2024)
                        </li>
                        <li>
                            Business Development at{" "}
                            <a
                                href="http://immersivetouch.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ImmersiveTouch
                            </a>{" "}
                            (Summer 2023)
                        </li>
                    </ul>

                    <p>
                        💵 I am President of Case Western's <a href="https://case.edu/entrepreneurship/funding/cwru-alumni-venture-fund" target="_blank" rel="noopener noreferrer">Alumni Venture Fund</a>—a venture fund investing in Case alumni/faculty ($425k invested across 15 companies)—exposing me to countless startups and teaching me important entrepreneurial lessons.
                    </p>

                    <p>
                        🧠 I like <a href="/projects">building stuff</a>,{" "}
                        <a
                            href="https://substack.com/@krishinparikh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            writing my thoughts
                        </a>
                        ,{" "}
                        <a
                            href="https://krishin.notion.site/library"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            consuming knowledge
                        </a>
                        , and{" "}
                        <a
                            href="http://krishin.notion.site/tools"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            exploring high-leverage tools
                        </a>
                        .
                    </p>

                    <p>
                        👋 I love meeting people — reach me at{" "}
                        <a href="mailto:krishinparikh@gmail.com">
                            krishinparikh@gmail.com
                        </a>{" "}
                        or{" "}
                        <a
                            href="http://linkedin.com/in/krishin-parikh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                        !
                    </p>
                    <p>
                        Read my <a href="/story">full story</a> to learn my "why"
                        behind the "what".
                    </p>
                </div>
                
            </div>
        <Footer />
        </div>
};

export default Home;
