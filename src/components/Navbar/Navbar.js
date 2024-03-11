import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.Navbar}>
        <div className={styles.menu}>
          <h1 className={styles.logo}>Dev.OT</h1>
          <a href="/" className={styles.Anchors}>
            HOME
          </a>
          <a href="/" className={styles.Anchors}>
            ABOUT
          </a>
          <a href="/" className={styles.Anchors}>
            CODINGNIGHTSCHOOL
          </a>
        </div>
        <div className={styles.Icons}>
          <i class="fa-solid fa-magnifying-glass"></i>
          {/* <i class="fa-solid fa-plus"></i>
          <i class="fa-regular fa-user"></i> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
