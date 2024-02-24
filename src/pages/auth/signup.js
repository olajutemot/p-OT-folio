import React from "react";
import styles from "./Auth.module.css";

// const width = window.innerWidth;
// const height = window.innerHeight;

const SignUp = () => {
  return (
    <div className={styles.formContainer}>
      <h1>Register Admin</h1>
      <form>
        <div>
          <label for="name">Name: </label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
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
        <div>
          <label>Confirm Password: </label>
          <input type="password" placeholder="Enter password again" />
        </div>
        <button>Register</button>
      </form>
      <p>
        Already have an account? click <a href="/log-in">here to login</a>
      </p>
    </div>
  );
};

export default SignUp;
