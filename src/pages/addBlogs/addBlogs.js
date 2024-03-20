import React, { useState, useEffect } from "react";
import styles from "./addBlogs.module.css";

import Navbar from "../../components/Navbar/Navbar";
import "./addblog.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import ClockLoader from "react-spinners/ClockLoader";





const AddBlogs=()=> {
  let [loading, setLoading] = useState(false);

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: null,
    imageUrl: "",
    paragraphs: [],
    category: "",
  });

  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/blogcategories`)
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

  const [paragraphForm, setParagraphForm] = useState({
    title: "",
    description: "",
    image: null,
    imageUrl: "",
    position: "",
    createdAt: null,
  });

  const pushParagraphToBlog = () => {
    let tempPg = paragraphForm;
    tempPg.createdAt = new Date().getTime();
    setBlog({
      ...blog,
      paragraphs: [...blog.paragraphs, paragraphForm],
    });

    let nextPosition = String(parseInt(paragraphForm.position) + 1);
    setParagraphForm({
      ...paragraphForm,
      title: "",
      description: "",
      position: nextPosition,
      createdAt: null,
    });
  };

  const deleteParagraph = (paragraph) => {
    const updatedParagraphs = blog.paragraphs.filter(
      (p) => p.createdAt !== paragraph.createdAt
    );
    setBlog({
      ...blog,
      paragraphs: updatedParagraphs,
    });
  };

  const sortParagraphs = (a, b) => {
    if (a.position === b.position) {
      return b.createdAt - a.createdAt;
    }
    return a.position.localeCompare(b.position);
  };

  const uploadImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append("myimage", image);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/image/uploadimage`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Image uploaded successfully:", data);
        return data.imageUrl;
      } else {
        console.error("Failed to upload the image.");
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const uploadBLog = async () => {
    if (!blog.title || !blog.description || !blog.category) {
      toast("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    let tempblog = blog;
    if (blog.image) {
      let imgUrl = await uploadImage(blog.image);
      tempblog.imageUrl = imgUrl;
    }
    for (let i = 0; i < tempblog.paragraphs.length; i++) {
      let tempimg = tempblog.paragraphs[i].image;
      if (tempimg) {
        let imgURL = await uploadImage(tempimg);
        tempblog.paragraphs[i].imageUrl = imgURL;
      }
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/blog`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
        credentials: "include",
      }
    );

    if (response.ok) {
      const data = await response.json();
      toast("Blog post created successfully");
      setLoading(false);
    } else {
      toast("Failed to create the blog post");
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(blog);
  }, [blog]);

  return (
    <div>

      {loading && (
        <div className="loaderfullpage">
          <ClockLoader
            color="#36d7b7"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <Navbar />
      <div className="addblog_in">
        <h1 className="head1">Add Blog</h1>
        <form
          style={{
            width: "70%",
            minWidth: "250px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="forminput_cont">
            <label>Blog Name</label>
            <input
              type="text"
              placeholder="Enter Blog Title"
              value={blog.title}
              onChange={(e) =>
                setBlog({ ...blog, title: e.target.value })
              }
            />
          </div>

          <div className="forminput_cont">
            <label>Blog Category</label>
            <select
              value={blog.category}
              onChange={(e) =>
                setBlog({ ...blog, category: e.target.value })
              }
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="forminput_cont">
            <label>Blog Description</label>
            <textarea
              placeholder="Enter Blog Description"
              value={blog.description}
              onChange={(e) =>
                setBlog({ ...blog, description: e.target.value })
              }
            />
          </div>

          <div className="forminput_cont">
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

          <div className="blogtempparagraphs">
            {blog.paragraphs.sort(sortParagraphs).map((paragraph) => (
              <div key={String(paragraph.createdAt)}>
                <AiFillCloseCircle
                  className="closebtn"
                  onClick={() => {
                    deleteParagraph(paragraph);
                  }}
                />
                <div className="section1">
                  <h1>{paragraph.title}</h1>
                  <p>{paragraph.description}</p>
                </div>
                {paragraph.image && (
                  <img
                    src={URL.createObjectURL(paragraph.image)}
                    alt={`Image for ${paragraph.title}`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="paragraph">
            <div className="forminput_cont">
              <label>Paragraph Position</label>
              <input
                type="number"
                value={paragraphForm.position}
                placeholder="Enter paragraph Position"
                onChange={(e) =>
                  setParagraphForm({
                    ...paragraphForm,
                    position: e.target.value,
                  })
                }/>

               

                export default AddBlogs