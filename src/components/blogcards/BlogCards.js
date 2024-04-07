import React from "react";
import styles from "./blogCards.module.css";

const BlogCards = ({ blogs }) => {
  console.log(blogs);

  return (
    <div className={styles.blogcardContainer}>
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className={styles.blogCards}
          onClick={() => {
            window.location.href = `/blogpage?blogid=${blog._id}`;
          }}
        >
          <section className={styles.blogCard}>
            {/* <div> */}
            <img src={blog.imageUrl} alt="" />
            <a href="/">{blog.category}</a>
            <div>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
            {/* <h2>{blog.title}</h2>
            <p>{blog.description}</p> */}
            <p>Last Updated: </p>
            {/* </div> */}
          </section>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
