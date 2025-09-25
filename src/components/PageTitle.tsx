import React from "react";

interface PageTitleProps {
    title: string;
    subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
    return (
        <div
            style={{
                textAlign: "center",
                paddingTop: "4rem",
                paddingBottom: "4rem",
                
            }}
        >

            <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1rem" }}>
                <h1>
                    {title}
                </h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
            
            <div style={{ paddingTop: "4rem" }}>
                <hr
                    style={{
                        margin: 0,
                        border: "none",
                        borderTop: "1px solid rgb(224, 224, 224)",
                    }}
                />
            </div>
        </div>
    );
};

export default PageTitle;
