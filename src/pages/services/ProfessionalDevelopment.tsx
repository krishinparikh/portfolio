import React from "react";
import styles from "./ServicePage.module.css";
import MinorPageLayout from "../MinorPageLayout";

const ProfessionalDevelopment: React.FC = () => {
    const content = (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 className={styles.subheader}>Overview</h2>
            <p>
                Organizations everywhere are racing to figure out how to integrate AI into their daily workflows, but most don't know where to start.
            </p>
            <p>
                
            </p>
            <h2 className={styles.subheader}>Why Me?</h2>
            <p>
                I'm not just someone who writes and talks about AI; I'm a hands-on practitioner who brings a unique blend of technical expertise and business acumen.
            </p>
            <p>
                My skill set is best evidenced by my work at The O.H.I.O. Fund, where I built an agentic CRM from the ground up. 
            </p>
            <h2 className={styles.subheader}>My Process</h2>
            <p>
                First, we will meet—ideally in-person—to build rapport and discuss what you're seeking to achieve. Next, I will 
            </p>
        </div>
    );

    return (
        <MinorPageLayout 
            title="Professional Development" 
            subtitle="I will implement a cost-effective, durable CRM solution that augments your specific organizational processes."
        >
            {content}
        </MinorPageLayout>
    );
};

export default ProfessionalDevelopment;
