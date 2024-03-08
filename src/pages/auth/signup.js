import React, { useState } from "react";
import styles from "./Auth.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const width = window.innerWidth;
// const height = window.innerHeight;

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setErrors({});

    const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.ok) {
          console.log(response);
          toast(response.message, {
            type: "success",
            position: "top-right",
            autoClose: 2000,
          });
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        } else {
          toast(response.message, {
            type: "error",
            position: "top-right",
            autoClose: 2000,
          });
        }
      })
      .catch((error) => {
        console.error("Registration error:", error.message);
        toast(error.message, {
          type: "error",
          position: "top-right",
          autoClose: 2000,
        });
      });
  };
  return (
    <div className={styles.formContainer}>
      <h1>Register Admin</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="formerror">{errors.name}</span>}
        </div>
        <div>
          <label for="email">Email: </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="formerror">{errors.email}</span>}
        </div>
        <div>
          <label for="password">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="formerror">{errors.password}</span>
          )}
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            placeholder="Enter password again"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="formerror">{errors.confirmPassword}</span>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? click <a href="/log-in">here to login</a>
      </p>
    </div>
  );
};

export default SignUp;
