import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navLink}>HOME</Link>
      <Link to="/projects" className={styles.navLink}>PORTFOLIO</Link>
      <Link to="/story" className={styles.navLink}>STORY</Link>
    </nav>
  );
};

export default Navbar;
