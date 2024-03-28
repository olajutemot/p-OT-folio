import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./blogPage.module.css";
import ClockLoader from "react-spinners/ClockLoader";

const BlogPage = () => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState({
    _id: "",
    title: "",
    description: "",
    imageUrl: "",
    paragraphs: [],
    category: "",
    owner: "",
    createdAt: "",
    updatedAt: "",
  });
  const [blogcreatedat, setBlogcreatedat] = useState("");

  const getBlogbyId = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const blogid = queryParams.get("blogid");
    console.log(blogid);
    if (blogid) {
      setLoading(true);
      // Replace this with your backend API URL
      fetch(`http://localhost:8000/blog/${blogid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          setLoading(false);
          if (response.ok) {
            setBlog(response.data.blog);
            const formattedDate = formatDate(response.data.blog.createdAt);
            setBlogcreatedat(formattedDate);
          } else {
            toast(response.message, {
              type: "error",
            });
          }
        })
        .catch((error) => {
          setLoading(false);
          toast(error.message, {
            type: "error",
          });
        });
    }
  };
  useEffect(() => {
    getBlogbyId();
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}`;
  };

  return (
    <div className={styles.blogpages}>
      <Navbar />
      {loading && blog._id === "" ? (
        <div className="loaderfullpage">
          <ClockLoader
            color="#36d7b7"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className={styles.blogpage}>
          <div className="c1">
            <p className="createdat">Created at {blogcreatedat}</p>
            <p className="title">{blog.title}</p>
            <p className="category">{blog.category}</p>
            {blog.imageUrl.length > 0 && (
              <img src={blog.imageUrl} alt={blog.title} className="blogimg" />
            )}
            <p className="description">{blog.content}</p>
          </div>
          {/* {blog.paragraphs.map((paragraph, index) => (
            <div className={index % 2 === 0 ? "c2left" : "c2right"} key={index}>
              {paragraph.imageUrl.length > 0 && (
                <img
                  src={paragraph.imageUrl}
                  alt={blog.title}
                  className="paraimg"
                />
              )}
              <div>
                <p className="title">{paragraph.title}</p>
                <p className="description">{paragraph.description}</p>
              </div>
            </div>
          ))} */}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default BlogPage;
