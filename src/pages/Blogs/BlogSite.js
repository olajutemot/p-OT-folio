import React from "react";
import styles from "./Blog.module.css";

import Navbar from "../../components/Navbar/Navbar";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Footer from "../../components/Footer/Footer";
// import BlogCards from "../../components/blogcards/BlogCards";

const BlogSite = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.blogContainer}>
        <HomeSlider />
        {/* <BlogCards /> */}
      </div>
      <Footer />
    </div>
  );
};

export default BlogSite;
