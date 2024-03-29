import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./blogPage.module.css";
import ClockLoader from "react-spinners/ClockLoader";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [loading, setLoading] = useState(false);
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

  // const params = useParams();
  // console.log(params);
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
          <h1 className="title">{blog.title}</h1>
          <p className="createdat">Created at {blogcreatedat}</p>

          <p className="category">{blog.category}</p>
          <Link className={styles.editbtn} to={`/editpost?blogid=${blog._id}`}>
            Edit post
          </Link>
          {blog.imageUrl.length > 0 && (
            <img src={blog.imageUrl} alt={blog.title} className="blogimg" />
          )}
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          {/* <p className="description">{blog.content}</p> */}

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
