import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Story from "./pages/Story";
import Blog from "./pages/Blog";
import EightPuzzle from "./pages/projects/EightPuzzle";
import AfferenceSDK from "./pages/projects/AfferenceSDK";
import Nexa from "./pages/projects/Nexa";
import PeerEd from "./pages/projects/PeerEd";
import CubeFlow from "./pages/projects/CubeFlow";
import TOFCRM from "./pages/projects/TOFCRM";
// import Fortuity from "./pages/projects/Fortuity";
import Curio from "./pages/projects/Curio";
import GenerativeAIConsulting from "./pages/services/GenerativeAIConsulting";
import CRMImplementation from "./pages/services/CRMImplementation";
// import ProfessionalDevelopment from "./pages/services/ProfessionalDevelopment";
import RubiksCubeLessons from "./pages/services/RubiksCubeLessons";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Define dynamic titles for each route
    const pageTitles: Record<string, string> = {
      "/": "Krishin Parikh",
      "/projects": "Portfolio | Krishin Parikh",
      "/services": "Services | Krishin Parikh",
      "/story": "Story | Krishin Parikh",
      "/projects/tof-crm": "The O.H.I.O. Fund CRM | Krishin Parikh",
      "/projects/afference-sdk": "Afference SDK | Krishin Parikh",
    //   "/projects/fortuity": "Fortuity | Krishin Parikh",
      "/projects/eight-puzzle": "8-Puzzle Solver | Krishin Parikh",
      "/projects/nexa": "Nexa | Krishin Parikh",
      "/projects/peer-ed": "PeerEd | Krishin Parikh",
      "/projects/cube-flow": "CubeFlow | Krishin Parikh",
      "/projects/curio": "Curio | Krishin Parikh",
      "/services/generative-ai-consulting": "Generative AI Consulting | Krishin Parikh",
    //   "/services/crm-implementation": "CRM Implementation | Krishin Parikh",
      "/services/professional-development": "Professional Development | Krishin Parikh",
      "/services/rubiks-cube-lessons": "Rubik's Cube Lessons | Krishin Parikh",
    };

    // Update the document title based on the current path
    document.title = pageTitles[location.pathname] || "Krishin Parikh";
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/story" element={<Story />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects/tof-crm" element={<TOFCRM />} />
        <Route path="/projects/eight-puzzle" element={<EightPuzzle />} />
        {/* <Route path="/projects/fortuity" element={<Fortuity />} /> */}
        <Route path="/projects/afference-sdk" element={<AfferenceSDK />} />
        <Route path="/projects/nexa" element={<Nexa />} />
        <Route path="/projects/peer-ed" element={<PeerEd />} />
        <Route path="/projects/cube-flow" element={<CubeFlow />} />
        <Route path="/projects/curio" element={<Curio />} />
        <Route path="/services/generative-ai-consulting" element={<GenerativeAIConsulting />} />
        <Route path="/services/crm-implementation" element={<CRMImplementation />} />
        {/* <Route path="/services/professional-development" element={<ProfessionalDevelopment />} /> */}
        <Route path="/services/rubiks-cube-lessons" element={<RubiksCubeLessons />} />
      </Routes>
    </>
  );
};

// Wrap App with Router
const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
