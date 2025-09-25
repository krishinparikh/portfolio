import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/story"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Story
      </NavLink>
    </nav>
  );
};

export default Navbar;
