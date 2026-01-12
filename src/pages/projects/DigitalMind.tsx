import React from "react";
import styles from "./ProjectPage.module.css";
import LIO_Logo from "./../../assets/LIO_Logo.png";
import DigitalMind1 from "./../../assets/DigitalMind1.png";
import DigitalMind2 from "./../../assets/DigitalMind2.png";

import MinorPageLayout from "../MinorPageLayout";

const DigitalMind: React.FC = () => {
    const content = (
        <div className={styles.container}>
            <p className={styles.content}>
                <b>Website: </b>
                <a
                    href="https://chat.lifeisorganized.com/"
                    target="_blank"
                >
                    chat.lifeisorganized.com
                </a>
            </p>
            <p className={styles.content}>
                <b>GitHub: </b>
                <a
                    href="https://github.com/krishinparikh/lifeisorganized-ai"
                    target="_blank"
                >
                    github.com/krishinparikh/lifeisorganized-ai
                </a>
            </p>
            
            <h2 className={styles.subheader}>Background</h2>
            <p className={styles.content}>
              Life is Organized is a productivity consulting business founded by Mridu Parikh. As her practice continues to grow, she envisioned a chatbot that could provide her advice at scale, offering immediate support while maintaining her distinctive approach and voice. I built this chatbot for a fraction of the cost of existing solutions that provide the same services. 
            </p>
            <p className={styles.content}>
              This application was deployed on her website.
            </p>

            <img
                className={styles.image}
                src={DigitalMind1}
                style={{
                    width: "100%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "4%"
                }}
            />

            <img
                className={styles.image}
                src={DigitalMind2}
                style={{
                    width: "100%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            />
            
            <h2 className={styles.subheader}>Development</h2>
            <p className={styles.content}>
              The application implements a Retrieval Augmented Generation (RAG) pipeline to ensure responses are grounded in Mridu's actual content. Documents are loaded from two sources: podcast transcripts and blog posts, supporting both .md and .docx formats. These documents are split into chunks, converted into embeddings using OpenAI's text-embedding model, and stored in Pinecone with separate namespaces for each content type. When users ask questions, the system retrieves semantically similar chunks, augments the query with this context, and sends the enhanced prompt to GPT-4o-mini for response generation.
            </p>
            <p>
              The tech stack centers on Next.js 16 for the web framework, with TypeScript and React 19 handling the frontend. LangChain orchestrates the AI workflow, streaming responses through the Vercel AI SDK for real-time display. The UI uses Tailwind CSS and shadcn/ui components to create a clean chat interface. Beyond the core chat functionality, the system includes activity tracking that logs conversations to a Notion database and sends email notifications via Gmail API, allowing Mridu to monitor and review user interactions.
            </p>

            <h2 className={styles.subheader}>Reflections</h2>
            <p className={styles.content}>
              Despite its relatively straightforward architecture, the chatbot has delivered surprisingly impressive results in both accuracy and tone. This outcome underscores a key insight: the quality of ingested data is likely the most critical factor determining chatbot performance. Having well-crafted source material that authentically captures Mridu's voice and expertise proved more valuable than complex technical optimizations.
            </p>
            <p className={styles.content}>
              In the future, this would be easily extensible to an AI voice application, emulating her real voice, using a service like ElevenLabs — and even possibly a deepfake version. 
            </p>
        </div>
    );

    return (
        <MinorPageLayout
            title="Consultant Digital Mind"
            subtitle="AI chatbot for productivity consultant client that delivers on-demand advice in her authentic voice and expertise."
        >
            {content}
        </MinorPageLayout>
    );
};

export default DigitalMind;
