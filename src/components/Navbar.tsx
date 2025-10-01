import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
      </button>

      <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
          onClick={closeMenu}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
          onClick={closeMenu}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
          onClick={closeMenu}
        >
          Services
        </NavLink>
        <NavLink
          to="/story"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
          onClick={closeMenu}
        >
          Story
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
