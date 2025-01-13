import React from "react";
import styles from "./ProjectPage.module.css";
import EightPuzzleScreenshot from "../../assets/EightPuzzleScreenshot.png";

const EightPuzzle: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>8-Puzzle Solver</h1>
      <p className={styles.content}>
        An AI agent web application that solves the famous 8-puzzle using three local search algorithms.
      </p>
      <img className={styles.image} src={EightPuzzleScreenshot} />
      <h2 className={styles.subheader}>Background</h2>
      <p>In my Intro to Artificial Intelligence class, I built a Python terminal application that could solve any 8-Puzzle. After the class, I rebuilt the user interface in React, which connects to the Python backend via Flask. The backend is hosted on Render and the frontend on Vercel.</p>
      <h2 className={styles.subheader}>Development</h2>
      <p>The 8-Puzzle is represented as a 2D array. Each </p>
      <h2 className={styles.subheader}>Reflections</h2>
      <p>This was the first artificial intelligence project i </p>
    </div>
  );
};

export default EightPuzzle;
