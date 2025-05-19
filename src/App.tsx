import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Story from "./pages/Story";
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
      "/story": "Story | Krishin Parikh",
      "/projects": "Portfolio | Krishin Parikh",
      "/projects/eight-puzzle": "8-Puzzle Solver | Krishin Parikh",
      "/projects/afference-sdk": "Afference SDK | Krishin Parikh",
      "/projects/nexa": "Nexa | Krishin Parikh",
      "/projects/peer-ed": "PeerEd | Krishin Parikh",
      "/projects/cube-flow": "CubeFlow | Krishin Parikh",
    };

    // Update the document title based on the current path
    document.title = pageTitles[location.pathname] || "Krishin Parikh";
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects/eight-puzzle" element={<EightPuzzle />} />
        <Route path="/projects/afference-sdk" element={<AfferenceSDK />} />
        <Route path="/projects/nexa" element={<Nexa />} />
        <Route path="/projects/peer-ed" element={<PeerEd />} />
        <Route path="/projects/cube-flow" element={<CubeFlow />} />
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
