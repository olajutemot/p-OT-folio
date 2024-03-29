import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../../components/BlogEditor/Editor";
import styles from "../addBlogs/addBlogs.module.css";
import { toast } from "react-toastify";

const EditBlog = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const blogid = queryParams.get("blogid");
  // console.log(blogid);
  //   const [title, setTitle] = useState("");
  //   const [summary, setSummary] = useState("");
  //   const [content, setContent] = useState("");
  //   const [files, setFiles] = useState("");
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: null,
    imageUrl: "",
    content: "",
    category: "",
  });
  const [redirect, setRedirect] = useState(false);
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    fetch("http://localhost:8000/blogcategories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  //   useEffect(() => {
  //     fetch(`http://localhost:8000/blogs/${id}`).then((response) => {
  //       response.json().then((postInfo) => {
  //         setTitle(postInfo.title);
  //         setContent(postInfo.content);
  //         setSummary(postInfo.summary);
  //       });
  //     });
  //   }, []);
  useEffect(() => {
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
            // console.log(blog.title);
            // const formattedDate = formatDate(response.data.blog.createdAt);
            // setBlogcreatedat(formattedDate);
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
  }, []);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    // data.set("title", title);
    // data.set("summary", summary);
    // data.set("content", content);
    // data.set("id", id);
    // if (files?.[0]) {
    //   data.set("file", files?.[0]);
    // }
    data.set(...blog);
    const response = await fetch(`http://localhost:8000/blog/${blogid}`, {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    console.log(response);
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={`/blogpage/${blogid}`} />;
  }

  return (
    <div className={styles.addblog_in}>
      <h1 className={styles.head1}>Edit Blog</h1>
      <form
        style={{
          width: "70%",
          minWidth: "250px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className={styles.forminput_cont}>
          <label>Blog Name</label>
          <input
            type="text"
            placeholder="Enter Blog Title"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
        </div>

        <div className={styles.forminput_cont}>
          <label>Blog Category</label>
          <select
            value={blog.category}
            onChange={(e) => setBlog({ ...blog, category: e.target.value })}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.forminput_cont}>
          <label>Blog Description</label>
          <textarea
            placeholder="Enter Blog Description"
            value={blog.description}
            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
          />
        </div>

        <div className={styles.forminput_cont}>
          <label>Blog Image</label>
          <input
            type="file"
            onChange={(e) => {
              const selectedImage = e.target.files?.[0];
              if (selectedImage) {
                setBlog({ ...blog, image: selectedImage });
              }
            }}
          />
        </div>
        {/* <ReactQuill
        value={blog.content}
        onChange={(newValue) => setBlog({ ...blog, content: newValue })}
        modules={modules}
        formats={formats}
        className={styles.reactQill}
      /> */}
        <Editor onChange={setBlog} value={blog} />
        <button
          type="submit"
          className={styles.main_button}
          onClick={(e) => {
            e.preventDefault(); // Prevent the default form submission
            updatePost();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
