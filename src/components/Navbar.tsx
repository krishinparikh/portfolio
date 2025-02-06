import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navLink}>HOME</Link>
      <Link to="/portfolio" className={styles.navLink}>PORTFOLIO</Link>
      <Link to="https://www.linkedin.com/in/krishin-parikh/recent-activity/all/" target="_blank" className={styles.navLink}>BLOG</Link>
    </nav>
  );
};

export default Navbar;
