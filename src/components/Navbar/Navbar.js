import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
// import { toast } from "react-toastify";
// import { useAuth } from "../AuthContext";

const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const [nav, setNav] = useState(false);
  const buttonRef = useRef();

  const showNavbar = () => {
    buttonRef.current.classList.toggle("nav-close-btn");

    setNav(true);
  };
  const closeNavbar = () => {
    buttonRef.current.classList.toggle("nav-close-btn");
    setNav(false);
  };
  // useEffect(() => {
  //   // Check if user is authenticated on component mount
  //   const isAuthenticated = localStorage.getItem("auth");
  //   if (isAuthenticated) {
  //     setAuth(true);
  //   }
  // }, []);

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
    //       setAuth(true);
    //     } else {
    //       setAuth(false);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // toast(error.message, {
    //     //   type: "error",
    //     //   position: "top-right",
    //     //   autoClose: 2000,
    //     //   // window.location.href = "/login";
    //     // });
    //     setAuth(false);
    //   });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const handleLogout = async () => {
    Cookies.remove("authToken");
    Cookies.remove("refreshToken");
    localStorage.removeItem("authToken"); // Clear authentication status on logout
    setAuth(false);
    checkLogin();
  };

  return (
    <div className={styles.container}>
      <nav className={styles.Navbar}>
        <h1 className={styles.logo}>Dev.OT</h1>
        <div className={styles.menu}>
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
          {/* <i class="fa-solid fa-plus"></i>
          <i class="fa-regular fa-user"></i> */}
          {auth ? (
            <button type="" className={styles.logout} onClick={handleLogout}>
              logout
            </button>
          ) : (
            <button
              type=""
              className={styles.logout}
              onClick={() => {
                window.location.href = "/portfolio";
              }}
            >
              portfolio
            </button>
          )}
          {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        </div>

        {/* responsiveness JSX */}
        <button
          ref={buttonRef}
          id="nav-toggler"
          className="nav-btn"
          onClick={showNavbar}
        >
          <FaBars />
        </button>
        <button
          ref={buttonRef}
          id="nav-toggler"
          className="nav-btn nav-close-btn"
          onClick={closeNavbar}
        >
          <FaTimes />
        </button>
        {nav ? (
          <div className={styles.resMenu}>
            <Link to={"/blogs"} className={styles.Anchors}>
              HOME
            </Link>
            <Link to={"/about"} className={styles.Anchors}>
              ABOUT
            </Link>
            <Link to={"/CNS"} className={styles.Anchors}>
              CODINGNIGHTSCHOOL
            </Link>
            <div className={styles.resIcons}>
              {auth ? (
                <button
                  type=""
                  className={styles.logout}
                  onClick={handleLogout}
                >
                  logout
                </button>
              ) : (
                <button
                  type=""
                  className={styles.logout}
                  onClick={() => {
                    window.location.href = "/portfolio";
                  }}
                >
                  portfolio
                </button>
              )}
              {/* <i class="fa-solid fa-magnifying-glass"></i> */}
            </div>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
