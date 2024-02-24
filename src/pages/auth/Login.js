import React from "react";
import styles from "./Auth.module.css";

const Login = () => {
  return (
    <div className={styles.formContainer}>
      <h1>Admin Login</h1>
      <form>
        <div>
          <label for="email">Email: </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label for="password">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
          />
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
