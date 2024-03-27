import React from "react";
import styles from "./blogCards.module.css";

const width = window.innerWidth;

const BlogCards = ({ blogs }) => {
  console.log(blogs);

  const extractFirstParagraph = (text) => {
    // Split the text into paragraphs based on new lines
    const paragraphs = text.split("\t");
    // Return the first paragraph
    return paragraphs[0];
  };

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
            <div>
              <img src={blog.imageUrl} alt="" width={width / 4} />
              <a href="/">{blog.category}</a>
              <h2>{blog.title}</h2>
              <p>{extractFirstParagraph(blog.description)}</p>
              <p>Last Updated: </p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
