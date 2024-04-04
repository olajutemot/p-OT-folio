import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerFlex}>
        <footer>
          &copy; {new Date().getFullYear()} DEV.OT. All Rights Reserved.
        </footer>
        <div>
          <Link to={"/blogs"}>latest posts</Link>
          <a
            href="https://instagram.com/olajutemo_?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
