import React from "react";
import styles from "./blogCards.module.css";

const width = window.innerWidth;
// const height = window.innerHeight;

const BlogCards = (data) => {
  const { title, imageUrl, category, _id } = data;
  return (
    <div
      onClick={() => {
        // router.push(`/pages/blogpage?blogid=${_id}`)
        window.location.href = `/blogpage?blogid=${_id}`;
      }}
    >
      <section className={styles.blogCards}>
        <div className={styles.blogCard}>
          <img
            src="../p-OT-folio/menu/project tile 8.png"
            alt=""
            width={width / 4}
          />
          <a href="/">coding</a>
          <h2>{title}</h2>
          <p>this is my first blog description</p>
          <p>Last Updated: </p>
        </div>
        <div className={styles.blogCard}>
          <img
            src="../p-OT-folio/menu/project tile 8.png"
            alt=""
            width={width / 4}
          />
          <a href="/">coding</a>
          <h2>This is my first blog title</h2>
          <p>this is my first blog description</p>
          <p>Last Updated: </p>
        </div>
      </section>
    </div>
  );
};

export default BlogCards;
