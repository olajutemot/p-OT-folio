import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../../components/BlogEditor/Editor";
import styles from "../addBlogs/addBlogs.module.css";
import { toast } from "react-toastify";

const EditBlog = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const blogid = queryParams.get("blogid");
  // const [loading, setLoading] = useState(false);
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
  useEffect(() => {
    if (blogid) {
      // setLoading(true);
      fetch(`http://localhost:8000/blog/${blogid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          // setLoading(false);
          // console.log(response);
          if (response.ok) {
            // console.log(response.data.blog.content);
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
          // setLoading(false);
          toast(error.message, {
            type: "error",
          });
        });
    }
  }, []);

  async function updatePost(e) {
    e.preventDefault();

    try {
      const requestData = {
        title: blog.title,
        description: blog.description,
        category: blog.category,
        // Include other properties as needed
        content: blog.content,
      };

      if (blog.image) {
        requestData.image = blog.image;
      }

      const response = await fetch(`http://localhost:8000/blog/${blogid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
        credentials: "include",
      });

      if (response.ok) {
        toast("Blog post updated successfully");
        setRedirect(true);
      } else {
        const responseData = await response.json();
        throw new Error(responseData.message);
      }
    } catch (error) {
      console.error("Error updating post:", error);
      toast.error("Failed to update post: " + error.message);
    }
  }
  if (redirect) {
    return <Navigate to={`/blogpage?blogid=${blog._id}`} />;
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
        onSubmit={updatePost}
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

        <Editor
          value={blog.content}
          onChange={(value) => setBlog({ ...blog, content: value })}
        />

        <button type="submit" className={styles.main_button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
