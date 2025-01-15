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
          <h2>Leader, Builder, Designer, Entrepreneur.</h2>
          <div className={styles.iconLinks}>
            <a href="https://www.linkedin.com/in/krishin-parikh/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedinIcon} alt="LinkedIn Icon" className={styles.icon} />
            </a>
            <a href="https://github.com/krishinparikh" target="_blank" rel="noopener noreferrer">
              <img src={GithubIcon} alt="GitHub Icon" className={styles.icon} />
            </a>
            <a href="https://www.youtube.com/@k2bfree" target="_blank" rel="noopener noreferrer">
              <img src={YoutubeIcon} alt="YouTube Icon" className={styles.icon} />
            </a>
          </div>
        </div>
        <img src={Headshot} alt="Krishin Parikh" className={styles.image} />
      </div>

      {/* New paragraph section */}
      <div className={styles.aboutSection}>
        <p>
            I am a junior double majoring in Computer Science and Finance and minoring in Economics at Case Western Reserve University, driven by a passion for building and designing technologies that strengthen human connections—a bold vision shaped by over two decades of dynamic experiences.
            <br /><br />
            The signs of my future career path were clear from a young age: I loved taking apart and rebuilding household electronics, coding video games in Scratch, 3D printing personalized trinkets for friends and family, and building a buzzer system for my middle school Quiz Bowl team.
            <br /><br />
            Growing up, I also had a variety of creative side hustles: a Rubik's Cube summer camp, a website selling my hip-hop beats, lemonade stands, and countless other trials & failures. These, coupled with my natural desire to share my knowledge and creations with others, largely sparked my interest in entrepreneurship.
            <br /><br />
            High school exposed me to a different type of building—team building. Leading student organizations like Mock Trial, Student Council, and the Yearbook Committee, I learned that 1) great people are the cornerstone of success, 2) meaningful progress requires healthy disagreement, and 3) people are receptive to clear visions told through stories.
            <br /><br />
            In my freshman year, I applied an EdTech startup idea of mine to Venture @ CWRU, a student-venture fund. While the startup didn't work out, I inadvertently got dragged into the fund as an analyst/investor, teaching me about the world of venture capital and how to build a much better business in the future. Under my leadership, Venture @ CWRU grew from just 4 to 25+ recurring members, becoming one of the most active business organizations on campus.
            <br /><br />
            I've continued my passion for startups as a selected Alumni Venture Fellow, where I've gotten the opportunity to source deals and make investments of up to $25,000 per company. In 2023, I was a selected Veale Snyder Fellow, allowing me to take fully funded trips to Silicon Valley, Las Vegas (for the Consumer Electronics Show), and Ireland to visit tech companies and network with professionals.
            <br /><br />
            That Fellowship opened many doors, including my previous internship at Afference, a startup whose mission is to bring the sense of touch—a key aspect of human connection—to the digital world. I helped build and design a software development kit that will be deployed alongside Afference products, allowing software developers to integrate complex haptics into their digital experiences.
            <br /><br />
            So, what's next?
            <br /><br />
            This spring semester, I'm studying abroad in Madrid, Spain! Aside from that, I'm always seeking new opportunities to build, contribute, and learn with innovative teams. If you'd like to connect, please feel free to email me at krishinparikh@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default Home;
