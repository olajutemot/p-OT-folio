import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
    </footer>
  );
};

export default Footer;
