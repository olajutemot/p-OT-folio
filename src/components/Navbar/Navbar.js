import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.Navbar}>
        <div className={styles.menu}>
          <h1 className={styles.logo}>Dev.OT</h1>
          <Link to={"/blogs"} className={styles.Anchors}>
            HOME
          </Link>
          <Link href="/" className={styles.Anchors}>
            ABOUT
          </Link>
          <Link href="/" className={styles.Anchors}>
            CODINGNIGHTSCHOOL
          </Link>
        </div>
        <div className={styles.Icons}>
          <i class="fa-solid fa-magnifying-glass"></i>
          {/* <i class="fa-solid fa-plus"></i>
          <i class="fa-regular fa-user"></i> */}
          <button type="">logout</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
