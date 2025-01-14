import React from "react";
import styles from "./ProjectPage.module.css";
import AfferenceLogo from "../../assets/AfferenceLogo.jpg";
import Phantom from "../../assets/Phantom.png";
import AfferenceRing from "../../assets/AfferenceRing.jpg";

const AfferenceSDK: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Afference SDK</h1>
      <p className={styles.content}><i>A C# library that allows software developers to use Afference products to integrate complex haptics into their digital experiences.</i></p>
      <p className={styles.content}><b>Website: </b><a href="http://afference.io" target="_blank">afference.io</a></p>
      <img src={AfferenceLogo} alt="" style={{width: "50%"}} />
      <h2 className={styles.subheader}>Background</h2>
      <p className={styles.content}>Co-founded by a serial entrepreneur and a neurotechnology expert, Afference is an early-stage startup aiming to bring the sense of touch—a core sensory experience—to virtual reality and smart wearables. Drawing from their expertise in neural engineering, Afference builds rings and gloves that create unique haptics in the fingertips by electrically stimulating the peripheral nervous system. I was hired to help develop a scalable library to facilitate internal experimentation of different neural stimulation paradigms to discover different possible sensations. Later, this code will serve as the foundation of the software development kit (SDK), which will be deployed alongside Afference products.</p>
      <h2 className={styles.subheader}>Development</h2>
      <p className={styles.content}>This project draws from haptic research theorized by the CTO. To make more sense of this research, I first created a Python model using NumPy and Matplotlib to visualize how adjusting different variables can influence the resulting stimulation paradigms. I then shifted my focus to Unity, in which the team had built several virtual reality and computer demos that utilized Afference haptics. In Unity, I designed and built an internal tool giving users the power to transform any intensity curve into different stimulation parameters of the Phantom—the Afference product pictured below—in their own desired way.</p>
      <img src={Phantom} alt="" style={{width: "70%"}} />
      <p className={styles.content}>While this Unity application was a solid step forward, it was limited to the specific hardware configuration and stimulation parameters of the Phantom; it did not support the many prototypes and plans of past and future Afference wearables, such as the Afference Ring pictured below.
      </p>
      <br />
      <img src={AfferenceRing} alt="Afference Ring" style={{width: "15%"}} />
      <p className={styles.content}>Therefore, the natural next step was to build an object-oriented system that could abstract the various possible hardware configurations and stimulation mechanisms. Using legacy code as a starting point, the CTO and I started collaborating on a new native C# library. We used UML to gain consensus on the system design and determine which aspects to expose and hide to users. Ultimately, we created a </p>
      <h2 className={styles.subheader}>Reflections</h2>
      <p className={styles.content}>This was the first real system I have ever designed. I learned so much not only about robust object-oriented programming, but also the importance of best practices that often get overlooked: repository organization, clear commenting, rigorous documentation and diagramming, and establishing coding conventions. Ignoring these best practices significantly raises the risk of accumulating technical debt, a serious issue that several big companies suffer from.</p>
    </div>
  );
};

export default AfferenceSDK;
