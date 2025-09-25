import React from "react";
import styles from "./ServicePage.module.css";
import MinorPageLayout from "../MinorPageLayout";

const GenerativeAIConsulting: React.FC = () => {
    const content = (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 className={styles.subheader}>Overview</h2>
            <p className={styles.content}>
                Organizations everywhere are racing to figure out how to effectively integrate Generative AI into their daily workflows — but most don't know how, or even where, to start. I can help drive AI initiatives in multiple ways:
            </p>
            <ul>
                <li>
                    <b>Generative AI Training.</b> I provide comprehensive training on ChatGPT, Claude, and other AI platforms, teaching teams both effective prompt engineering and advanced usage techniques. This includes hands-on workshops covering prompt structure, chain-of-thought reasoning, role-based prompting, and custom GPT creation.
                </li><p />
                <li>
                    <b>Strategic Guidance.</b> I work with leadership teams to develop comprehensive AI strategies that go beyond basic tool adoption. This means conducting deep-dive assessments of your business processes, identifying high-impact automation opportunities, and creating prioritized roadmaps with clear ROI metrics.
                </li><p />
                <li>
                    <b>Custom Automations.</b> I build production-ready, enduring automations using both no-code platforms (n8n, Make, Zapier) and custom development (Python, LangChain, APIs).
                </li><p />
                <li>
                    <b>Data Infrastructure Optimization.</b> I help organizations audit, clean, and structure their data for AI consumption. This includes establishing data pipelines, implementing quality controls, and ensuring AI systems have access to the right information. 
                </li><p />
                <li>
                    <b>Rapid Prototyping.</b> If you have an idea, I can build proof-of-concept solutions in days, not months, allowing you to validate AI use cases before committing to full-scale implementation.
                </li><p />
            </ul>
            <h2 className={styles.subheader}>Why Me?</h2>
            <p className={styles.content}>
                I'm not just someone who writes and talks about AI; I'm a hands-on practitioner who brings a unique blend of technical expertise, business acumen, and entrepreneurial experience.
            </p>
            <p className={styles.content}>
                My skill set is best evidenced by my work at The O.H.I.O. Fund, where I built an <a href="/projects/tof-crm">agentic CRM platform</a> from the ground up that drives operational efficiency through natural language pipeline queries and automated pitch deck data extraction. I stay at the forefront of AI development through continuous experimentation with the latest frameworks, MCP servers, and prompt engineering techniques, having developed multiple AI-powered applications including intelligent networking agents, real-time language translation tools, and automated business development systems.
            </p>
            <p className={styles.content}>
                My venture capital experience — serving as President of Case Western's Alumni Venture Fund — gives me unique insight into what actually works in business environments. I understand both the technical possibilities of AI and the market realities of implementation, having helped evaluate dozens of startups and worked directly with companies like Afference to develop a production <a href="/projects/afference-sdk">software development kit</a>.
            </p>
            <h2 className={styles.subheader}>My Process</h2>
            <p className={styles.content}>
                We will begin with an in-depth discovery session — ideally in-person — to understand your business objectives, current pain points, and AI readiness. I will conduct stakeholder interviews across departments, map existing workflows, and assess your current technology stack to identify the highest-impact opportunities. Within 1-2 weeks, I will deliver a comprehensive assessment of your AI opportunities complete with prioritized recommendations. There's no silver bullet approach to AI transformation; some clients will need custom automation solutions first, others require foundational data work, and many benefit from team training before technical implementation.
            </p>
            <p className={styles.content}>
                Email me at <a href="mailto:krishinparikh@gmail.com">krishinparikh@gmail.com</a> to learn about next steps if you're interested!
            </p>
        </div>
    );

    return (
        <MinorPageLayout 
            title="Generative AI Consulting" 
            subtitle="I will help your organization become AI-native through a mix of education, strategy, and custom builds."
        >
            {content}
        </MinorPageLayout>
    );
};

export default GenerativeAIConsulting;
