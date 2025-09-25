import React from "react";
import styles from "./ProjectPage.module.css";
import MinorPageLayout from "../MinorPageLayout";

// Image imports
import LowFidelity from "../../assets/tof-lowfidelity.png";
import HighFidelity1 from "../../assets/tof-highfidelity-1.png";
import HighFidelity2 from "../../assets/tof-highfidelity-2.png";
import HighFidelity3 from "../../assets/tof-highfidelity-3.png";
import Product1 from "../../assets/tof-product-1.png";
import Product2 from "../../assets/tof-product-2.png";

const TOFCRM: React.FC = () => {
    const content = (
        <div className={styles.container}>
            <h2 className={styles.subheader}>Background</h2>
            <p className={styles.content}>
                The O.H.I.O. Fund, started in 2024, invests in high-growth private assets—including venture capital, private equity, real estate, infrastructure, and funds—to catalyze the growth of Ohio. I was hired with a small team to combine my technical skill set and venture capital experience to help automate highly manual internal processes, specifically related to deal flow and fundraising.
            </p>
            <p>
                Their model is unique in several aspects. Firstly, it is comprised of multiple active funds — one of which is an evergreen fund — but the deals in the pipeline are shared among all of them. Secondly, the criteria for prospective deals to proceed to subsequent pipeline stages varies across asset classes — a problem that typical VC/PE firms don't deal with. They have several options for financing deals (equity or debt). These nuances were some of the many important considerations for my work. 
            </p>
            <h2 className={styles.subheader}>Discovery</h2>
            <p className={styles.content}>
                The team originally had an abstract vision of what they wanted accomplished, but it was my job to define the project scope and requirements. I started this discovery process by scheduling 1-on-1 meetings with the employees (general partners, associates, and administrators), asking open ended questions about the nature of their work. The fund originally used a mix of Airtable and HubSpot for data management. I watched each employee physically demonstrate how they would source deals, communicate with stakeholders, and perform other common tasks, giving me valuable insights. 
            </p>
            <p className={styles.content}>
                I learned that they were essentially receiving more deal flow and prospective investors than they could keep up with. Oftentimes, they would be flooded with emails that would go uncheched, losing potential opportunities. Additionally, their data was living in multiple places, lacking a single sources of truth. It became clear that they needed a centralized platform to track their investment activity. 
            </p>
            <p className={styles.content}>
                Once the problem was well understood, the next major crossroads was deciding whether to build or buy this software. After researching and booking demos for many platforms, we ultimately decided to build it in-house. The existing solutions were either too expensive or lacked alignment with The O.H.I.O. Fund model. This decision was also appealing due to the increasing ease of developing software with AI. The only disadvantage of building in-house: it's not super easy to build an enterprise-grade CRM.
            </p>
            <h2 className={styles.subheader}>Ideation</h2>
            <p className={styles.content}>
                From our initial chats with the employees—and additional ones afterwards—we constructed process flow diagrams that reflected the ideal end-to-end processes for investing and fundraising, respectively. These diagrams helped inform the CRM user experience.
            </p>
            <p className={styles.content}>
                Simultaneously, we iteratively constructed a relational database schema. This was one of the most meticulous exercises because it's difficult, though not impossible, to reverse after implementation. Our model had to support several key abstractions: multiple asset classes, deal structures, and pipeline stages to name a few.
            </p>
            <p className={styles.content}>
                Only after gaining clarity on the UX flow and data model did I create a low-fidelity mockup on Figma. The main purpose of this exercise was to visualize the user flow and reconsider product requirements that we previously overlooked.
            </p>
            <img
                src={LowFidelity}
                alt="Low Fidelity Mockup"
                style={{ width: "100%" }}
            />
            <p className={styles.content}>
                Then, I moved onto the high-fidelity mockup. I created my own design system, taking inspiration from shadcn/ui components.
            </p>
            <img
                src={HighFidelity1}
                alt="High Fidelity Mockup 1"
                style={{
                    width: "48%",
                    marginRight: "4%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" 
                }}
            />
            <img
                src={HighFidelity2}
                alt="High Fidelity Mockup 2"
                style={{
                    width: "48%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" 
                }}
            />
            <img
                src={HighFidelity3}
                alt="High Fidelity Mockup 2"
                style={{
                    width: "100%",
                    marginTop: "4%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" 
                }}
            />
            <h2 className={styles.subheader}>Development</h2>
            <p className={styles.content}>
                The first software development challenge was determining the best tech stack to use. Given our desire to optimize for a large developer ecosystem and speed, we landed on the following:
            </p>
            <p className={styles.content}>
                Frontend: React, TypeScript, Tailwind, shadcn/ui
                <br />
                Backend: FastAPI, Pydantic, SQLAlchemy, SQLModel, Alembic, PostgreSQL
                <br />
                Cloud: AWS RDS (database), AWS App Runner (server), AWS ECS, Docker
            </p>
            <p className={styles.content}>
                The repository is structured as a modular monolith with directories for the frontend and backend. Conceptually, the frontend has abstracted layers for REST API routes, business services, custom hooks, components, types, and pages. Similarly, the backend has abstracted layers for database schemas, REST API routes, and business services. 
            </p>
            <p className={styles.content}>
                A primary goal of ours was to experiment with AI-driven software development processes. As the frontend developer, I wanted to formulate a way to convert the high-fidelity Figma mockup into modular, scalable code. The naive approach would be to screenshot each page and ask AI to convert that into code. Unfortunately, this would result in a monolith that lacks effective component-based architecture, making it harder to scale. Instead, I took a more thoughtful approach to converting each Figma component to React code. 
            </p>
            <p className={styles.content}>
                I started by using some Figma extensions to convert my Figma design system (variables and styles) into a global TailwindCSS file compatible with shadcn/ui. Then, I set up two MCP servers in Claude Code: one for Figma and another for <a href="https://github.com/Jpisnice/shadcn-ui-mcp-server" target="blank">shadcn/ui</a>. The Figma MCP gave Claude context of each Figma component, including a screenshot and its parameters. The shadcn/ui MCP allowed Claude to plan highly accurate code implementations by referencing the official documentation and determining which component(s) to use based on provided examples.
            </p>
            <p className={styles.content}>
                I used a reusable prompt in addition to these MCP servers to iteratively convert each Figma component into scalable React code. After building the skeletons of the components, I used another reusable prompt to add the logic that connected the frontend and backend together via hooks and functions by giving context to the right schema types. 
            </p>
            <img
                src={Product2}
                alt="CRM Page 2"
                style={{
                    width: "100%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" 
                }}
            />
            <p className={styles.content}>
                Once the foundation was laid, we built an AI chatbot using LangChain (agentic framework), allowing us to query company data in natural language. We implemented this using text-to-SQL techniques, giving the agent access to the database schema.
            </p>
            <img
                src={Product1}
                alt="CRM Page 1"
                style={{
                    width: "100%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" 
                }}
            />
            
            <h2 className={styles.subheader}>Reflections</h2>
            <p className={styles.content}>
                The CRM is nearing completion and approaching feature parity with The O.H.I.O. Fund's existing software, positioning us for data migration. This end-to-end development experience has crystallized three key insights:

            </p>

            <ol className={styles.content}>
                <li>
                    Building a production system end-to-end, from conception to launch, has reinforced my desire to engage in the entire product lifecycle as opposed to solely writing code.
                </li><p />
                <li>
                    Software development has changed forever. Instead of manually writing code, the job of software engineers will be to effectively prompt AI agents to write it for you. This certainly is not an excuse, however, to avoid learning good software engineering principles. The best developers will be the best communicators, which requires a robust understanding of the fundamentals.
                </li><p />
                <li>
                    Effective AI implementation is 98% foundation, 2% intelligence. While this is somewhat tongue-in-cheek, it reflects a crucial reality: AI systems are only as good as the data and architecture they're built upon. Without proper data modeling and well-designed abstractions, even sophisticated AI becomes ineffective. The "AI strategy" that matters most happens in the database design and system architecture phases.
                </li>
            </ol>
        </div>
    );

    return (
        <MinorPageLayout 
            title="The O.H.I.O. Fund CRM" 
            subtitle="An advanced CRM for an investment firm to streamline management of deal flow, fundraising, and portfolio tracking." 
        >
            {content}
        </MinorPageLayout>
    );
};

export default TOFCRM;
