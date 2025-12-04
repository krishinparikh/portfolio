import React from "react";
import styles from "./ServicePage.module.css";
import MinorPageLayout from "../MinorPageLayout";

const RubiksCubeLessons: React.FC = () => {
    const content = (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 className={styles.subheader}>Overview</h2>
            <p>
                I will help you master the Rubik's Cube — whether you're a beginner who doesn't know how to solve it, or you're a novice trying to shave off time.
            </p>
            <p>
                As a beginner, I will guide you through my self-authored Rubik's Cube tutorial. As an intermediate, I will guide you through CFOP best practices, such as lookahead, common F2L patterns, rotations, and finger tricks.
            </p>
            <h2 className={styles.subheader}>Why Me?</h2>
            <p>
                I have been solving Rubik's Cubes of all shapes and sizes since 2013. My fastest time ever is 7.84 seconds, and I regularly average around 13 seconds. In 2018, as a seventh-grader, I started a Rubik's Cube summer camp, teaching 15 kids in under a week how to solve it with a 100% success rate.
            </p>
            <p>
                While cubing is a great party trick (don't get me wrong), it has more importantly helped me develop better pattern regognition algorithmic thinking—transferable qualities to anything. I hope to teach you the same skills.
            </p>
        </div>
    );

    return (
        <MinorPageLayout 
            title="Rubik's Cube Lessons" 
            subtitle="Take beginner to intermediate Rubik's Cube lessons from a 13-second-average competitive speedcuber."
        >
            {content}
        </MinorPageLayout>
    );
};

export default RubiksCubeLessons;
