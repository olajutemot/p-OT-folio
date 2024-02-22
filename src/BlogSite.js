import React from "react";
import styles from "./Blog.module.css";

const BlogSite = () => {
  return (
    <div>
      <nav className={styles.Navbar}>
        <div className={styles.Icons}>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-plus"></i>
          <i class="fa-regular fa-user"></i>
        </div>
        <div className="anchors">
          <a href="/">Home</a>
          <a href="/">about</a>
        </div>
      </nav>
    </div>
  );
};

export default BlogSite;
