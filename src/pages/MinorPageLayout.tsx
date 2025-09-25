import React from "react";
import MinorPageTitle from "../components/MinorPageTitle";
import Footer from "../components/Footer";

interface MinorPageLayoutProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const MinorPageLayout: React.FC<MinorPageLayoutProps> = ({ 
    title, 
    subtitle, 
    children 
}) => {
    return (
        <div>
            <MinorPageTitle title={title} subtitle={subtitle} />
            <main style={{ padding: "0 1rem" }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MinorPageLayout;
