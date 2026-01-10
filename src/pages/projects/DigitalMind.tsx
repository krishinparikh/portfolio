import React from "react";
import styles from "./ProjectPage.module.css";
import LIO_Logo from "./../../assets/LIO_Logo.png";
import DigitalMind1 from "./../../assets/DigitalMind1.png";
import DigitalMind2 from "./../../assets/DigitalMind2.png";

import MinorPageLayout from "../MinorPageLayout";

const DigitalMind: React.FC = () => {
    const content = (
        <div className={styles.container}>
            
            
            <h2 className={styles.subheader}>Background</h2>
            <p className={styles.content}>
              Life is Organized is a productivity consulting business founded by Mridu Parikh. As her practice continues to grow, she envisioned a chatbot that could provide her advice at scale, offering immediate support while maintaining her distinctive approach and voice. I built this chatbot for a fraction of the cost of existing solutions that provide the same services. 
            </p>
            <p className={styles.content}>
              This application will be publicly deployed.
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
              The application implements a Retrieval-Augmented Generation (RAG) pipeline to ensure responses are grounded in Mridu's actual content. Documents from the podcast_scripts folder are ingested, chunked into manageable pieces, and converted into embeddings using OpenAI's text-embedding model. These embeddings are stored in Pinecone, a vector database that enables semantic search. When users ask questions, the system retrieves relevant content chunks, augments the query with this context, and sends it to GPT-4o-mini for response generation.
              <br /><br />
              The tech stack centers on Next.js 16 for the web framework, with TypeScript and React 19 handling the frontend. LangChain orchestrates the AI workflow, streaming responses through the Vercel AI SDK for real-time display. The UI uses Tailwind CSS and shadcn/ui components to create a clean chat interface. The modular architecture separates concerns clearly, with distinct components for chat logic, RAG pipeline steps, and document processing.
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
