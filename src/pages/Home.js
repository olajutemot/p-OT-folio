import React from "react";
// import Portfolio from "../components/Portfolio";
import "../components/styles.css";
// import BlogSite from "./Blogs/BlogSite";

const Home = () => {
  // const [portfolio, setPortfolio] = useState(false);
  // const [blog, setBlog] = useState(false);
  const handlePortfolio = () => {
    // setPortfolio(<Portfolio />);
    window.location.href = "/portfolio";
  };
  const handleBlog = () => {
    // setBlog(<BlogSite />);
    window.location.href = "/blogs";
  };
  return (
    <div>
      {/* {portfolio || blog || ( */}
      <div className="container">
        <img src="../p-OT-folio/menu/Timmy Headshot.png" alt="Timilehin" />
        <header className="Homeheader">
          <h1>Hey I am olajutemo Timilehin</h1>
          <p>I am a Front-end Web Developer & software Engineer</p>
        </header>
        <div className="buttons">
          <button
            className="button"
            id="openPortfolio"
            onClick={handlePortfolio}
          >
            View my Portfolio
          </button>
          <button className="button" id="openPortfolio" onClick={handleBlog}>
            Visit my Blog
          </button>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Home;
