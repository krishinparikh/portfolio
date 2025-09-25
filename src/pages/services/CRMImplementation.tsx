import React from "react";
import styles from "./ServicePage.module.css";
import MinorPageLayout from "../MinorPageLayout";

const CRMImplementation: React.FC = () => {
    const content = (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 className={styles.subheader}>Overview</h2>
            <p className={styles.content}>
                As software development costs rapidly decline, organizations are faced with a common dilemma: do we buy an off-the-shelf CRM or build a custom one? The right answer depends on your organization's unique goals and constraints. I will help guide that process, from the initial discovery to the actual implementation. When done right, a CRM can be a tool that provides clarity and structure to your organization — it should not hold you back.
            </p>
            <h2 className={styles.subheader}>Why Me?</h2>
            <p>
                I have successfully implemented three CRMs through internships and contract work:
            </p>
            <ul>
                <li>
                    <b>The O.H.I.O. Fund.</b> I was responsible for building an agentic CRM for an investment firm to streamline management of deal flow, fundraising, and portfolio tracking. This project required not only analysis of the firm's organizational processes, but also to develop enterprise software from scratch: the user interface, data model, software engineering, cloud engineering, AI capabilities, and more.
                </li><p />
                <li>
                    <b>Case Western's Alumni Venture Fund.</b> The Veale Institute for Entrepreneurship at Case Western hired me to build a lightweight technology stack (Airtable, Google Drive, Pitchbook) to streamline internal management of deal flow, fundraising, portfolio tracking, recruiting, and marketing.
                </li><p />
                <li>
                    <b>ImmersiveTouch.</b> This VR healthcare startup hired me to support several business development efforts. I took the initiative to conduct discovery interviews with the sales team to understand and identify pain points the sales journey. Using these insights, I revamped their Zoho CRM to provide more clarity on their sales pipeline.  
                </li>
            </ul>
            <p className={styles.content}>
                Beyond these professional engagements, I enjoy organizing my personal life in Notion, another general-purpose CRM. I have built databases for recruiting, tracking content I consume, and professional contacts.
            </p>
            <h2 className={styles.subheader}>My Process</h2>
            <p className={styles.content}>
                We will begin with an in-depth discovery session — ideally in-person — to discuss your business objectives, current pain points, constraints, and success criteria. I will conduct stakeholder interviews across departments, map existing workflows, and assess your current technology stack to inform which CRM option might be best. While I build it, I will continually check in to make sure we're on track to succeed. 
            </p>
            <p className={styles.content}>
                Email me at <a href="mailto:krishinparikh@gmail.com">krishinparikh@gmail.com</a> to learn about next steps if you're interested!
            </p>
        </div>
    );

    return (
        <MinorPageLayout 
            title="CRM Implementation" 
            subtitle="I will implement a cost-effective, durable CRM solution that augments your specific organizational processes."
        >
            {content}
        </MinorPageLayout>
    );
};

export default CRMImplementation;
