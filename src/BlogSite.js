import React from "react";
import styles from "./Blog.module.css";

const BlogSite = () => {
  return (
    <div className={styles.Red}>
      <h1>Hi welcome to my blog page</h1>
      <p>
        This is still in progress, kindly enter your email below to get a
        notification when the page is lived
      </p>
      <input type="email" placeholder="enter your email" />

      <h2>
        click this to <button>Go back</button> or reload page to go back
      </h2>
    </div>
  );
};

export default BlogSite;
