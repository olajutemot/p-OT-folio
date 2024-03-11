import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerFlex}>
        <footer>
          &copy; {new Date().getFullYear()} DEV.OT. All Rights Reserved.
        </footer>
        <div>
          <a href="/">latest posts</a>
          <a href="/">instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
