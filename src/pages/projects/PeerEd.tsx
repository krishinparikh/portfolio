import React from "react";
import styles from "./ProjectPage.module.css";
import MinorPageLayout from "../MinorPageLayout";

const PeerEd: React.FC = () => {
    const slideSrc =
        "https://docs.google.com/presentation/d/e/2PACX-1vSSRrkN4O4uCoyWmdUc2mtnck8I7WGSieF6JwyygaTt3M7Uu7wcI_TMzZiZ2Qi3g49GdLjmi-RgjgVP/embed?start=false&loop=false&delayms=5000";

    const content = (
        <div className={styles.container}>
            <h2 className={styles.subheader}>Background</h2>
            <p className={styles.content}>
                In 2022, my friends and I conceptualized an educational
                nonprofit idea to increase community engagement and foster kids'
                curiosities. See the slide deck below:
            </p>
            <div className={styles.slidesWrapper}>
                <iframe
                    src={slideSrc}
                    width="100%"
                    height="485"
                    allowFullScreen
                    title="PeerEd Presentation"
                    className={styles.slides}
                ></iframe>
                <h2 className={styles.subheader}>Reflections</h2>
                <p className={styles.content}>
                    While I stand a strong proponent of peer-to-peer learning,
                    this idea was not a viable business model. In this form
                    factor, we would not be providing enough value to schools to
                    justify the costs required to run this program. After
                    pitching our idea to administration at two Nashville
                    independent schools, we decided to stop. Intriguingly, I
                    have yet to come across a successful peer-to-peer learning
                    platform, with the possible exception of{" "}
                    <a href="https://schoolhouse.world/" target="_blank">
                        Schoolhouse
                    </a>{" "}
                    (founded by Sal Khan).
                    <br />
                    <br />
                    One key lesson I learned from PeerEd was to focus on solving
                    a specific burning problem rather than trying to find a
                    solution in search of a problem, which was a mistake I made.
                    In a serindipitous twist, after submitting this pitch deck
                    to the Northeast Ohio Student Venture Fund for funding, I
                    ended up joining the fund as an analyst/investor, teaching
                    me about the world of venture capital and how to build a
                    much better business in the future.
                </p>
            </div>
        </div>
    );

    return (
        <MinorPageLayout 
            title="PeerEd" 
            subtitle="A nonprofit program facilitating peer-to-peer learning between high school and middle school students." 
        >
            {content}
        </MinorPageLayout>
    );
};

export default PeerEd;
