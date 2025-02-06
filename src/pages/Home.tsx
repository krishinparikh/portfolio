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
          <h2>Student, Leader, Technologist</h2>
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
            I am a junior double majoring in Computer Science and Finance and minoring in Economics at Case Western Reserve University, motivated to build and design technologies that strengthen human connections—a bold vision shaped by over two decades of dynamic experiences.
            <br /><br />
            The signs of my future career path were clear from a young age: I loved taking apart and rebuilding household electronics, coding video games in Scratch, 3D printing personalized trinkets for friends and family, and building a buzzer system for my middle school Quiz Bowl team. 
            <br /><br />
            I loved turning my hobbies into side hustles. After seventh grade, I founded a summer camp to teach kids how to solve the Rubik's Cube, a skill I had honed to <a href="https://www.youtube.com/watch?v=2yrVTqqy4yc" target="_blank">under 15 seconds</a>. I also built an e-commerce website to sell my <a href="https://www.youtube.com/watch?v=-atg20iRoEA" target="_blank">custom hip-hop beats</a>. The satisfaction of providing value to others through my own creations ignited a lifelong passion for entrepreneurship.
            <br /><br />
            High school exposed me to a different kind of building—team building. As Senior Class President, I spearheaded multiple initiatives to help reconnect our class following the disruptions of COVID and broader social challenges. As the Editor of the Yearbook and Captain of the Mock Trial team, I sharpened my ability to craft compelling stories that resonate with diverse audiences, both through visual narratives and persuasive speech.
            <br /><br />
            In my freshman year, I applied an <a href="/projects/peer-ed" target="_blank">EdTech startup idea</a> of mine to <a href="https://linkedin.com/company/neosvf-cwru/" target="_blank">Venture @ CWRU</a>, a student-run venture fund. While the startup didn't work out, I inadvertently got dragged into the fund as an analyst/investor, teaching me about the world of venture capital and how to build a much better business in the future. Under my leadership, Venture @ CWRU grew from just 4 to 25+ recurring members, becoming one of the most active business organizations on campus.
            <br /><br />
            I've further pursued venture capital as a selected <a href="https://case.edu/entrepreneurship/alumni-venture-fund" target="_blank">Alumni Venture Fellow</a>, where I've gotten the opportunity to source deals and make investments of up to $25,000 per company. I was also 1 of 5 members on Case Western's <a href="http://vcic.org" target="_blank" rel="noopener noreferrer">Venture Capital Investment Competition</a> (VCIC) team, where we placed 3rd in our region for our outstanding due diligence and deal memo construction. 
            <br /><br />
            To better understand the ins-and-outs of startups, I interned at <a href="http://immersivetouch.com" target="_blank" rel="noopener noreferrer">ImmersiveTouch</a> during the summer of 2023, where I researched competitors and learned about healthcare sales cycles and processes. That fall, I was 1 of 12 selected <a href="https://case.edu/entrepreneurship/vealesnyderfellows" target="_blank">Veale Snyder Fellows</a>, allowing me to take fully funded trips to Silicon Valley, Las Vegas (for the Consumer Electronics Show), and Ireland to visit tech companies and network with professionals.
            <br /><br />
            That Fellowship opened many doors, including my previous internship at <a href="http://afference.io" target="_blank">Afference</a>, a startup whose mission is to bring the sense of touch—a key aspect of human connection—to the digital world. I helped build and design a software development kit that will be deployed alongside Afference products, allowing software developers to integrate complex haptics into their digital experiences.
            <br /><br />
            Amid the many incredible opportunites I've been fortunate to receive, I make a conscious effort to never forget my "why." Teaching STEM at the <a href="https://time2rise.org/" target="_blank">Time to Rise</a> summer program and volunteering at <a href="https://idealist.org/en/nonprofit/e0c31efdb62448d686bd135188131234-lunch-buddies-at-bolton-elementary-cleveland" target="_blank">Bolton Elementary School</a> have kept me grounded and attuned to the deeply rooted social and educational issues I aspire to address in the future.
            <br /><br />
            This spring, I'm excited to further expand my horizons during my semester study abroad at Universidad Carlos III de Madrid in Spain! Otherwise, I'm always seeking new opportunities to build, contribute, and learn with innovative teams. If you'd like to connect, please email me at <a href="mailto:krishinparikh@gmail.com">krishinparikh@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Home;
