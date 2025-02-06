import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import EightPuzzle from "./pages/projects/EightPuzzle";
import AfferenceSDK from "./pages/projects/AfferenceSDK";
import Nexa from "./pages/projects/Nexa";
import PeerEd from "./pages/projects/PeerEd";
import CubeFlow from "./pages/projects/CubeFlow";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Define dynamic titles for each route
    const pageTitles: Record<string, string> = {
      "/": "Krishin Parikh",
      "/portfolio": "Portfolio | Krishin Parikh",
      "/blog": "Blog | Krishin Parikh",
      "/portfolio/eight-puzzle": "8-Puzzle Solver | Krishin Parikh",
      "/portfolio/afference-sdk": "Afference SDK | Krishin Parikh",
      "/portfolio/nexa": "Nexa | Krishin Parikh",
      "/portfolio/peer-ed": "PeerEd | Krishin Parikh",
      "/portfolio/cube-flow": "CubeFlow | Krishin Parikh",
    };

    // Update the document title based on the current path
    document.title = pageTitles[location.pathname] || "Krishin Parikh";
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio/eight-puzzle" element={<EightPuzzle />} />
        <Route path="/portfolio/afference-sdk" element={<AfferenceSDK />} />
        <Route path="/portfolio/nexa" element={<Nexa />} />
        <Route path="/portfolio/peer-ed" element={<PeerEd />} />
        <Route path="/portfolio/cube-flow" element={<CubeFlow />} />
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
