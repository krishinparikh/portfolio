import React from "react";
import styles from "./ProjectPage.module.css";
import NexaRoadmap from "../../assets/NexaRoadmap.png";
import NexaFigma from "../../assets/NexaFigma.png";

const Nexa: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nexa</h1>
      <p className={styles.content}><i>An AI assistant to help college students maintain their professional relationships.</i></p>
      <img src={NexaFigma} alt="Nexa Wireframe" style={{width: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}} />
      <h2 className={styles.subheader}>Background</h2>
      <p className={styles.content}>Although I consider myself an avid networker, I often struggle to maintain connections with the professionals I meet. Some apps, like <a href="http://getdex.com" target="_blank">Dex</a> and <a href="http://clay.earth">Clay</a>, have attempted to address this issue by positioning themselves as "personal CRMs." However, these platforms seemed more tailored to working professionals. I saw an opportunity to innovate specifically for the niche of college students.</p>
      <h2 className={styles.subheader}>Discovery</h2>
      <p className={styles.content}>To validate this problem with a larger sample size, I reached out to over 20 college students, asking each a series of open-ended questions, such as "What are your motivations behing reaching out to someone?" or "What is the hardest thing about networking for you?" I grouped their answers into an Excel sheet and Notion workspace to identify common themes. I discovered that most people faced the same issue, often attempting to address it with spreadsheets but struggling to maintain them. The most significant insight was that many wanted to follow up but were unsure what to include in their follow-up messages.</p>
      <h2 className={styles.subheader}>Ideation</h2>
      <p className={styles.content}>To address that problem, I envisoned a Contacts-style mobile app that could scrape the online presence of the user's contacts—such as LinkedIn and Twitter activity, for example—and offer personalized AI-generated recommendations based on that. The app could send reminder notifications to follow up with specific contacts. I started wireframing the app in Figma shown above. I outlined a detailed plan, shown below, to determine when to release which features.</p>
      <img src={NexaRoadmap} alt="Nexa Product Roadmap" style={{width: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}} />
      <br /><br />
      <p className={styles.content}>My technology stack of choice would have been React Native for mobile frontend; Supabase for the SQL database and authentication; Node.js and Express.js for connecting the stack together; the Gmail API for sending and reading emails; and OpenAI API for AI generation. Unfortunately, my plans to contine designing and start developing this app were cut short.</p>
      <h2 className={styles.subheader}>Reflections</h2>
      <p className={styles.content}>Nexa in its current form factor is what Y Combinator partner Dalton Caldwell might call a "tarpit idea"—an idea that gains promising initial traction but reveals significant challenges upon closer examination. In hindsight, the simplest way to validate the AI aspect of this app would have been to take a set of random LinkedIn notifications and manually process them through an LLM to evaluate whether it could generate meaningful recommendations. There might be potential for this idea in another form factor, like a Chrome extension.
        <br /><br />
        Despite these setbacks, I gained a deep appreciation for the challenge of identifying high value problems that can be solved through business and technology. 
      </p>
    </div>
  );
};

export default Nexa;
