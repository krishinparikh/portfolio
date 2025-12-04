import React from "react";
import styles from "./ProjectPage.module.css";
import MinorPageLayout from "../MinorPageLayout";
import HomeImage from "../../assets/Curio/Home.png";
import LearningSessionImage from "../../assets/Curio/LearningSession.png";
import ModuleImage from "../../assets/Curio/Module.png";
import ArchitectureImage from "../../assets/Curio/Architecture.png";
import LowFidelityImage from "../../assets/Curio/LowFidelity.png";

const Curio: React.FC = () => {
    const content = (
        <div className={styles.container}>
            <h2 className={styles.subheader}>Background</h2>
            <p className={styles.content}>
              What is the best method to self-learn a topic? On one hand, a regular course (perhaps through school or online) provides clear structure, but constrains learners into a one-size-fits-all curriculum. On the other hand, ChatGPT and other AI tools adapt to each user, but lack the structure of a traditional course.
            </p>
            <p className="styles content">
              Is there an alternative learning tool that balances both structure and flexibility? That question inspired Curio, a platform that uses AI to generate a structured course on any topic, adapted to each user.   
            </p>
            <p className="styles content">
              I was awarded a $1k grant from the Veale Institute for Entrepreneurship to pursue this idea. 
            </p>
            <img
                src={HomeImage}
                alt="Curio Home"
                style={{
                    width: "100%",
                    marginTop: "4%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                }}
            />
            <img
                src={LearningSessionImage}
                alt="Curio Learning Session"
                style={{
                    width: "100%",
                    marginTop: "4%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                }}
            />
            <img
                src={ModuleImage}
                alt="Curio Module"
                style={{
                    width: "100%",
                    marginTop: "4%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                }}
            />
            <h2 className={styles.subheader}>Ideation</h2>
            <p className={styles.content}>
              The goal for the first iteration of this product was to validate the idea of providing structure to an AI-driven learning experience. Therefore, I did not want to build any major features beyond this core capability. I started by making a low-fidelity mockup in Figma, which informed the general user flow.
            </p>
            <img
                src={LowFidelityImage}
                alt="Low Fidelity Mockup"
                style={{
                    width: "100%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                }}
            />


            <h2 className={styles.subheader}>Implementation</h2>
            
            <img
                src={ArchitectureImage}
                alt="Curio Architecture"
                style={{ width: "100%" }}
            />
            <p className={styles.content}>
            I built the MVP with Next.js for rapid development. Server Actions eliminated the need for separate API routes, and custom React hooks with Tanstack Query handled state management efficiently.
            </p>
            <p className="styles content">
              Data is stored in a PostgreSQL database — hosted on Neon — which works perfectly fine. However, given the small number of tables and large amounts of JSON data, I am curious if a document-store database like MongoDB would fit my needs better. 
            </p>
            <p className={styles.content}>
                One new technical challenge I faced was creating a WebSocket server for real-time AI chat generation. Next.js does not have native support for this, so I used Socket.io to create another server that will be hosted separately. 
            </p>
            <p className={styles.content}>
                The most interesting part of this project was the LLM integration. I created an abstract LLMProvider class with concrete implementations for OpenAI, Anthropic, etc., each handling complete() and stream() methods. I also built a custom MarkdownRenderer component to properly style generated content, which utilized a variety of styling libraries.
            </p>
            <p className={styles.content}>
              Authentication uses Google Sign In via Auth.js, with full login functionality planned for later.
            </p>
            
            
            <h2 className={styles.subheader}>Next Steps</h2>
            <p className={styles.content}>
                The product in its current state is an LLM wrapper, but I am curious if it will nonetheless provide user value. I plan to give this MVP to select beta users and continue iterating. While the product direction will largely be informed by this feedback, I have a few interesting feature ideas in mind:
            </p>
            <ul>
              <li>
                Specialized course generation agent that scrapes the web for curriculum insights
              </li><p />
              <li>
                Knowledge graph tracking user's learned concepts to enable contextual connections
              </li><p />
              <li>
                Quizzes, diagrams, and practice exercises
              </li><p />
              <li>
                Social feed to see what friends are learning
              </li>
            </ul>
            <p className={styles.content}>
                After the core features are determined with a high degree of certainty, I will refactor the tech stack to Vite (React) with FastAPI (Python). While Next.js with server actions has enabled me to move quickly, I don't believe this architecture will scale well. Additionally, I anticipate implementing more robust AI/ML down the road, which Python is better suited for. 
            </p>
        </div>
    );

    return (
        <MinorPageLayout
            title="Curio"
            subtitle="Create courses on anything tailored to your unique background and interests — powered by AI."
        >
            {content}
        </MinorPageLayout>
    );
};

export default Curio;
