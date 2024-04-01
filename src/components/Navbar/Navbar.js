import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Navbar = () => {
  const [auth, setauth] = useState(false);
  const checkLogin = async () => {
    fetch("http://localhost:8000/auth/checklogin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);

        if (response.ok) {
          setauth(true);
        } else {
          console.log(response);
          // window.location.href = "/login";
          setauth(false);
        }
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: "error",
          position: "top-right",
          autoClose: 2000,
          // window.location.href = "/login";
        });
      });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const handlelogout = async () => {
    Cookies.remove("authToken");
    Cookies.remove("refreshToken");
    window.location.href = "/login";
  };

  return (
    <div className={styles.container}>
      <nav className={styles.Navbar}>
        <div className={styles.menu}>
          <h1 className={styles.logo}>Dev.OT</h1>
          <Link to={"/blogs"} className={styles.Anchors}>
            HOME
          </Link>
          <Link to={"/about"} className={styles.Anchors}>
            ABOUT
          </Link>
          <Link to={"/CNS"} className={styles.Anchors}>
            CODINGNIGHTSCHOOL
          </Link>
        </div>
        <div className={styles.Icons}>
          <i class="fa-solid fa-magnifying-glass"></i>
          {/* <i class="fa-solid fa-plus"></i>
          <i class="fa-regular fa-user"></i> */}
          {auth ? (
            <button type="" className={styles.logout} onClick={handlelogout}>
              logout
            </button>
          ) : (
            <button type="" className={styles.logout}>
              subscribe
            </button>
          )}
          {/* <button type="" className={styles.logout}>
            logout
          </button> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
