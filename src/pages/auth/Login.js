import React, { useState } from "react";
import styles from "./Auth.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      // credentials: "include",
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
            email: "",
            password: "",
          });
          localStorage.setItem("authToken", response.data.authToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          // checkLogin();
          window.location.href = "/addblog";
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
  // const checkLogin = async () => {
  //   fetch("http://localhost:8000/auth/checklogin", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((response) => {
  //       console.log(response);

  //       if (response.ok) {
  //         window.location.href = "/addblog";
  //       } else {
  //         console.log(response);
  //         window.location.href = "/login";
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       window.location.href = "/login";
  //     });
  // };
  return (
    <div className={styles.formContainer}>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? click <a href="/sign-up">here to Register</a>
      </p>
    </div>
  );
};

export default Login;
