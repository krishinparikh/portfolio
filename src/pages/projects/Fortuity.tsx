import React from "react";
import styles from "./ProjectPage.module.css";
import MinorPageLayout from "../MinorPageLayout";

const Fortuity: React.FC = () => {
    const slideSrc = "https://docs.google.com/presentation/d/e/2PACX-1vRFxMYMszYg2gS_zwD4PVqDlLB-5Mb7WJnBEQegUbEHGqjG2vIkD9pXNMdpXZCgfhYJaJ5ijFRZoITN/pubembed?start=false&loop=false&delayms=5000";

    const content = (
        <div className={styles.container}>
            <h2 className={styles.subheader}>Background</h2>
            <iframe
                    src={slideSrc}
                    width="100%"
                    height="485"
                    allowFullScreen
                    title="Fortuity Pitch Deck"
                    className={styles.slides}
                ></iframe>
            <p className={styles.content}>
                
            </p>
            <h2 className={styles.subheader}>Discovery</h2>
            <h2 className={styles.subheader}>Ideation</h2>
            <h2 className={styles.subheader}>Development</h2>
            <h2 className={styles.subheader}>Reflections</h2>
        </div>
    );

    return (
        <MinorPageLayout 
            title="Fortuity" 
            subtitle="A consumer SaaS platform that accelerates personalized networking for job seekers." 
        >
            {content}
        </MinorPageLayout>
    );
};

export default Fortuity;
