import React from "react";

interface MinorPageTitleProps {
    title: string;
    subtitle?: string;
}

const MinorPageTitle: React.FC<MinorPageTitleProps> = ({ title, subtitle }) => {
    return (
        <div
            style={{
                maxWidth: "800px",
                margin: "0 auto",
                textAlign: "center",
                padding: "4rem 1rem 2rem 1rem"
            }}
        >
            <h1 style={{ fontSize: "3.5rem" }}>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
};

export default MinorPageTitle;
