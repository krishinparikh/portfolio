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
      <p className={styles.content}>Although I pride myself on being an avid networker, I too often fail to keep in touch with the professionals I meet. Some apps have tried to address my problem, most notably <a href="http://getdex.com" target="_blank">Dex</a> and <a href="http://clay.earth">Clay</a>, which brand themselves as "personal CRMs." However, these apps to me seemed to cater more toward working adults. I thought there might be room to innovate in this niche. </p>
      <h2 className={styles.subheader}>Discovery</h2>
      <p className={styles.content}>To validate this problem with a larger sample size, I reached out to over 20 college students, asking each a series of open-ended questions, such as "What are your motivations behing reaching out to someone?" or "What is the hardest thing about networking for you?" I grouped my findings into an Excel sheet and Notion workspace, allowing me to find common themes across people's answers. I learned that most people had this same problem and were </p>
      <h2 className={styles.subheader}>Ideation</h2>
      <img src={NexaFigma} alt="Nexa Wireframe" className={styles.image} />
      <p className={styles.content}>I learned that most people </p>
      <h2 className={styles.subheader}>Reflections</h2>
      <p className={styles.content}>Nexa in its current form is what Y Combinator partner Dalton Caldwell might call a "tarpit idea"—an idea that gains promising initial traction but  </p>
    </div>
  );
};

export default Nexa;
