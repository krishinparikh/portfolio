import React from "react";
import styles from "./ProjectPage.module.css";
import NexaLogo from "../../assets/Nexa.jpg";
import NexaFigma from "../../assets/NexaFigma.png";

const Nexa: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nexa</h1>
      <p className={styles.content}><i>An AI assistant to help college students maintain their professional relationships.</i></p>
      <h2 className={styles.subheader}>Background</h2>
      <p className={styles.content}>Although I pride myself on being an avid networker, I too often fail to keep in touch with the professionals I meet. Some apps have tried to address my problem, most notably <a href="http://getdex.com" target="_blank">Dex</a> and <a href="http://clay.earth">Clay</a>, which brand themselves as "personal CRMs." However, these apps to me seemed to cater more toward working adults. I thought there might be room to innovate in the niche of college students. </p>
      <h2 className={styles.subheader}>Discovery</h2>
      <p className={styles.content}>To validate this problem with a larger sample size, I reached out to over 20 college students, asking each a series of open-ended questions, such as "What are your motivations behing reaching out to someone?" or "What is the hardest thing about networking for you?" I grouped my findings into an Excel sheet and Notion workspace, allowing me to find common themes across people's answers. I learned that most people had this same problem; most attempted to solve it with some form of a spreadsheet but failed to keep up with it. The biggest insight I learned was that many simply do not know what to include in a follow-up message.</p>
      <h2 className={styles.subheader}>Ideation</h2>
      <p className={styles.content}>To address that problem, I ideated a Contacts-style app that could scrape everyone's online presence—their LinkedIn and Twitter activity, for example—and offer personalized AI-generated recommendations based on that. I started wireframing the app in Figma below.</p>
      <img src={NexaFigma} alt="Nexa Wireframe" style={{width: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}} />
      <p className={styles.content}>I had plans to contine designing and start developing this app. My technology stack of choice would have been React Native, Supabase, Node.js, and Express.js.</p>
      <h2 className={styles.subheader}>Reflections</h2>
      <p className={styles.content}>Nexa in its current form is what Y Combinator partner Dalton Caldwell might call a "tarpit idea"—an idea that gains promising initial traction but . In hindsight, there were also several ways I could have validated my initial </p>
    </div>
  );
};

export default Nexa;
