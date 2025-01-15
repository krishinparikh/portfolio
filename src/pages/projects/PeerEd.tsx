import React from "react";
import styles from "./ProjectPage.module.css";

const PeerEd: React.FC = () => {
  const slideSrc = "https://docs.google.com/presentation/d/e/2PACX-1vSSRrkN4O4uCoyWmdUc2mtnck8I7WGSieF6JwyygaTt3M7Uu7wcI_TMzZiZ2Qi3g49GdLjmi-RgjgVP/embed?start=false&loop=false&delayms=5000";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PeerEd</h1>
      <div className={styles.slidesWrapper}>
        <iframe
          src={slideSrc}
          width="100%"
          height="485"
          allowFullScreen
          title="PeerEd Presentation"
          className={styles.slides}
        ></iframe>
      </div>
    </div>
  );
};

export default PeerEd;
