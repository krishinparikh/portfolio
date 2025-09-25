import React from "react";
import styles from "./ProjectPage.module.css";
import CubeFlow1 from "../../assets/CubeFlow1.png";
import CubeFlow2 from "../../assets/CubeFlow2.png";
import MinorPageLayout from "../MinorPageLayout";

const CubeFlow: React.FC = () => {
    const content = (
        <div className={styles.container}>
            <p className={styles.content}>
                <b>GitHub: </b>
                <a
                    href="http://github.com/krishinparikh/Cube-Flow"
                    target="_blank"
                >
                    github.com/krishinparikh/Cube-Flow
                </a>
            </p>
            <img
                src={CubeFlow1}
                alt="CubeFlow Main Page"
                style={{
                    width: "100%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            />
            <h2 className={styles.subheader}>Background</h2>
            <p className={styles.content}>
                In middle school, I was a{" "}
                <a
                    href="https://youtu.be/2yrVTqqy4yc?si=erE_85EInkUJ6hJB"
                    target="_blank"
                >
                    competitive speedcuber
                </a>
                , spending hours repeatedly solving the Rubik's Cube and
                recording my times to improve my speed. My timer of choice was
                the standard in the speedcubing community,{" "}
                <a href="https://cstimer.net/" target="_blank">
                    csTimer
                </a>
                . Until recently, though, csTimer did not support login and
                cloud, meaning I—along with other users—could only see my solve
                times and data on my local device. This problem sparked the idea
                of CubeFlow.
            </p>
            <h2 className={styles.subheader}>Development</h2>
            <p className={styles.content}>
                I developed the frontend using vanilla HTML and CSS. The timer
                functionality is all written in JavaScript, which includes the
                timer itself, pressing the spacebar to start/stop, and
                generating a random scramble at every new solve. I added Google
                login functionality shown below with Google Firebase and stored
                users' times in its NoSQL database, Cloud Firestore, connecting
                the stack together with Node.js.
            </p>
            <img
                src={CubeFlow2}
                alt="CubeFlow Login Page"
                style={{
                    width: "100%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            />
            <h2 className={styles.subheader}>Reflections</h2>
            <p className={styles.content}>
                This project was my introduction to fullstack development. I
                realized it was quite difficult to import libraries and connect
                APIs like Firebase using vanilla HTML and JavaScript, which is a
                big reason I made the switch to React.js. For my next fullstack
                project, I'm looking forward to using Supabase instead of
                Firebase, which is a "backend as a service" alternative built on
                top of PostgreSQL rather than NoSQL.
                <br />
                <br />
                One feature I would love to add in the future is a 3D
                visualization of the scramble generated for each solve. This
                would involve developing a Rubik's Cube library capable of
                updating the cube's state based on a sequence of moves. With
                this foundation, I could see the project evolving into creating
                an AI agent capable of solving the cube.
            </p>
        </div>
    );

    return (
        <MinorPageLayout
            title="CubeFlow"
            subtitle="A beautiful Rubik's Cube timer with Google login and cloud support."
        >
            {content}
        </MinorPageLayout>
    );
};

export default CubeFlow;
