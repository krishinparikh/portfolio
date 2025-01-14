import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import EightPuzzle from "./pages/projects/EightPuzzle";
import AfferenceSDK from "./pages/projects/AfferenceSDK";
import Nexa from "./pages/projects/Nexa";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Define dynamic titles for each route
    const pageTitles: Record<string, string> = {
      "/": "Krishin Parikh",
      "/projects": "Projects | Krishin Parikh",
      "/blog": "Blog | Krishin Parikh",
      "/projects/eight-puzzle": "8-Puzzle Solver | Krishin Parikh",
      "/projects/afference-sdk": "Afference SDK | Krishin Parikh",
      "/projects/nexa": "Nexa | Krishin Parikh",
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects/eight-puzzle" element={<EightPuzzle />} />
        <Route path="/projects/afference-sdk" element={<AfferenceSDK />} />
        <Route path="/projects/nexa" element={<Nexa />} />
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
