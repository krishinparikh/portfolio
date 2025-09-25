import React from "react";
import styles from "./ProjectPage.module.css";
import AfferenceLogo from "../../assets/AfferenceLogo.jpg";
import Phantom from "../../assets/Phantom.png";
import AfferenceRing from "../../assets/AfferenceRing.jpg";
import MinorPageLayout from "../MinorPageLayout";

const AfferenceSDK: React.FC = () => {
    const content = (
        <div className={styles.container}>
            <h2 className={styles.subheader}>Background</h2>
            <p className={styles.content}>
                Co-founded by a serial entrepreneur and a neurotechnology
                expert,{" "}
                <a href="http://afference.io" target="_blank">
                    Afference
                </a>{" "}
                is an early-stage startup aiming to bring the sense of
                touch—a core sensory experience—to virtual reality and smart
                wearables. Drawing from their expertise in neural
                engineering, Afference builds rings and gloves that create
                unique haptics in the fingertips by electrically stimulating
                the peripheral nervous system. Watch{" "}
                <a
                    href="https://youtu.be/KGDWtPeMpDs?si=iZTiMGDsmiQvp4Cy"
                    target="_blank"
                >
                    Freethink's Hard Reset video
                </a>{" "}
                to learn more about Afference.
                <br />
                <br />I was hired to help develop a scalable library to
                facilitate internal experimentation of different neural
                stimulation paradigms to discover different possible
                sensations. Later, this code will serve as the foundation of
                the software development kit (SDK), which will be deployed
                alongside Afference products.
            </p>
            <h2 className={styles.subheader}>Development</h2>
            <p className={styles.content}>
                I was tasked with developing the layer of the software stack
                responsible for translating digital interactions—such as
                pressing a button in virtual reality—into stimulation
                parameters understood by the device firmware to accurately
                simulate that specific interaction. The science underneath
                this software was informed by haptic research developed by
                the CTO. To better understand this research, I began by
                creating a Python model using libraries such as NumPy,
                SciPy, and Matplotlib, allowing me to visualize how
                adjusting different variables impacted the resulting
                stimulation paradigms.
                <br />
                <br />
                After gaining clarity through the Python model, I shifted my
                focus to Unity and C#, the platforms where the team had
                previously built several virtual reality and computer demos
                leveraging Afference haptics. In Unity, I designed and
                developed an internal tool that enabled users to transform
                any intensity curve into customized stimulation parameters
                for the Phantom, the Afference product shown below.
            </p>
            <img src={Phantom} alt="" style={{ width: "70%" }} />
            <p className={styles.content}>
                The original Unity application was a significant
                advancement, but it was limited to the specific hardware
                configuration and stimulation parameters of the Phantom
                device. It did not accommodate the variety of prototypes and
                plans for both past and future Afference wearables, such as
                the Afference Ring shown below.
            </p>
            <img
                src={AfferenceRing}
                alt="Afference Ring"
                style={{ width: "15%", margin: "20px 0px" }}
            />
            <p className={styles.content}>
                To address these limitations, the natural next step was to
                build an object-oriented system capable of abstracting the
                wide range of possible hardware configurations and
                stimulation mechanisms. This level of abstraction is
                essential, as the system must handle scenarios where certain
                sensations cannot be produced consistently across multiple
                products due to varying hardware constraints.
                <br />
                <br />
                To achieve this, the CTO and I collaborated on creating a
                new native C# library. I took the lead in establishing and
                organizing the GitHub repository, and we utilized UML
                diagrams to reach a shared understanding of the system
                design. A project of this scale required careful
                consideration of the entire user experience of the SDK,
                including designing an intuitive API entry point and
                determining which features should be exposed or hidden from
                users.
            </p>
            <h2 className={styles.subheader}>Reflections</h2>
            <p className={styles.content}>
                I learned so much not only about robust
                object-oriented programming, but also the importance of best
                practices that often get overlooked: repository
                organization, clear commenting, rigorous documentation and
                diagramming, and establishing coding conventions. Ignoring
                these best practices significantly raises the risk of
                accumulating technical debt, a serious issue that several
                big companies suffer from.
            </p>
        </div>
    );

    return (
        <MinorPageLayout
            title="Afference SDK"
            subtitle="A C# library that allows software developers to use Afference products to integrate complex haptics into their digital experiences."
        >
            {content}
        </MinorPageLayout>
    );
};

export default AfferenceSDK;
