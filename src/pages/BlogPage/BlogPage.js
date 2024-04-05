import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./blogPage.module.css";
import ClockLoader from "react-spinners/ClockLoader";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);
  const checkLogin = async () => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      // window.location.href = "/login";
      setAuth(true);
      return;
    }
    // fetch("http://localhost:8000/auth/checklogin", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include",
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((response) => {
    //     console.log(response);

    //     if (response.ok) {
    //       setauth(true);
    //     } else {
    //       console.log(response);
    //       // window.location.href = "/login";
    //       setauth(false);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast(error.message, {
    //       type: "error",
    //       position: "top-right",
    //       autoClose: 2000,
    //       // window.location.href = "/login";
    //     });
    //   });
  };

  useEffect(() => {
    checkLogin();
  }, []);
  const [blog, setBlog] = useState({
    _id: "",
    title: "",
    description: "",
    imageUrl: "",
    content: "",
    category: "",
    owner: "",
    createdAt: "",
    updatedAt: "",
  });
  const [blogcreatedat, setBlogcreatedat] = useState("");
  const queryParams = new URLSearchParams(window.location.search);
  const blogid = queryParams.get("blogid");

  console.log(blogid);

  const getBlogbyId = () => {
    if (blogid) {
      setLoading(true);
      fetch(`http://localhost:8000/blog/${blogid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          setLoading(false);
          // console.log(response);
          if (response.ok) {
            console.log(response.data.blog);
            setBlog(response.data.blog);
            console.log(blog.title);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <div className={styles.blogcontent}>
            <p className="category">{blog.category}</p>
            <h1 className="title">{blog.title}</h1>
            <div>
              <hr></hr>
              <p className={styles.blogdate}>Created at {blogcreatedat}</p>
            </div>
          </div>
          {auth ? (
            <Link className="main_button" to={`/editpost?blogid=${blog._id}`}>
              Edit post
            </Link>
          ) : null}
          {/* <Link className="main_button" to={`/editpost?blogid=${blog._id}`}>
            Edit post
          </Link> */}
          {blog.imageUrl.length > 0 && (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className={styles.blogcontent}
            />
          )}
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className={styles.blogcontent}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default BlogPage;
