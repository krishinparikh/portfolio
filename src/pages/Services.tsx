import React from "react";
import styles from "./Projects.module.css";
import ServiceCard from "../components/ServiceCard";
import CRM from "../assets/crm.png";
import RubiksCube from "../assets/rubik.png";
import AIAutomation from "../assets/automation.png";
import Chess from "../assets/chess.png";
import JobSearch from "../assets/job-search.png";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";

const Services: React.FC = () => {
    const serviceData = [
        {
            title: "Generative AI Consulting",
            description:
                "I will help your organization become AI-native through a mix of education, strategy, and custom builds.",
            image: AIAutomation,
            link: "/services/generative-ai-consulting",
        },
        {
            title: "CRM Implementation",
            description:
                "I will implement a cost-effective, durable CRM solution that augments your specific organizational processes.",
            image: CRM,
            link: "/services/crm-implementation",
        },
        {
            title: "Professional Development",
            description:
                "Learn the soft skills, resources, and creative techniques required to land your dream job or internship.",
            image: JobSearch,
            link: "/services/professional-development",
        },
        {
            title: "Rubik's Cube Lessons",
            description:
                "Take beginner to intermediate Rubik's Cube lessons from a 13-second-average competitive speedcuber.",
            image: RubiksCube,
            link: "/services/rubiks-cube-lessons",
        }
    ];

    return (
        <div>
            <PageTitle
                title="Services"
                subtitle="Click inside to explore the various freelance services I offer. Each engagement will be tailored to your specific needs. Reach out to learn about next steps if you're interested!"
            ></PageTitle>
            <div className={styles["projects-grid"]}>
                {serviceData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        link={service.link}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Services;
