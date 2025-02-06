import React from "react";
import styles from "./ProjectPage.module.css";
import EightPuzzleScreenshot from "../../assets/EightPuzzleScreenshot.png";

const EightPuzzle: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>8-Puzzle Solver</h1>
      <p className={styles.content}><i>An AI agent web application that solves the famous 8-puzzle using three local search algorithms.</i></p>
      <p className={styles.content}><b>Website: </b><a href="http://eightpuzzlesolver.vercel.app" target="_blank">eightpuzzlesolver.vercel.app</a></p>
      <p className={styles.content}><b>GitHub: </b><a href="http://github.com/krishinparikh/eight-puzzle" target="_blank">github.com/krishinparikh/eight-puzzle</a></p>
      <img className={styles.image} src={EightPuzzleScreenshot} style={{width: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}} />
      <h2 className={styles.subheader}>Background</h2>
      <p className={styles.content}>In my Intro to Artificial Intelligence class, I built a Python terminal application that could solve any 8-Puzzle. After the class, I wrote a friendlier user interface in React, which connects to the Python backend via Flask.</p>
      <h2 className={styles.subheader}>Development</h2>
      <p className={styles.content}>All of the 8-Puzzle logic is handled in Python. The puzzle itself is represented as a 2D array. The Agent class contains the 4 solving algorithms: depth-first search (DFS), breadth-first search (BFS), and two different A* searches. The A* searches respectively use two heuristics to increase performance: the sum of the Manhattan distances between each tile and its corresponding goal position, and the number of misplaced tiles. Next, I wrote a React frontend and reimplemented the moving logic in TypeScript. I created a basic REST API in Flask that allows React and Python to communicate with one another; when "Solve" is clicked, React sends the current puzzle state to the EightPuzzle Python script, which then sends the solutions back to React as an array of strings. The backend is hosted on Render and the frontend on Vercel.</p>
      <h2 className={styles.subheader}>Reflections</h2>
      <p className={styles.content}>This project was fun because it touched a little bit of several domains: algorithms, frontend development, and REST APIs. Later in the class, I delved into basic AI learning algorithms, such as <a href="https://github.com/krishinparikh/iris-ml" target="_blank" rel="noopener noreferrer">k-means clustering and two-layer neural networks</a>; I can't wait to get my hands on more sophisticated AI models in the future. Additionally, this project inspired me to build an AI agent for another, far more difficult game: chess. This is currently a work in progress, but you can find the source code <a href="http://github.com/krishinparikh/chess/tree/dev" target="_blank">here</a>.</p>
    </div>
  );
};

export default EightPuzzle;
