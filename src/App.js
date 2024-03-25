import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/about";
import Blogs from "./pages/Blogs/BlogSite";
import SignUp from "./pages/auth/signup";
import Login from "./pages/auth/Login";
import AddBlogs from "./pages/addBlogs/addBlogs";
import BlogPage from "./pages/BlogPage/BlogPage";
// import Contact from "./pages/contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addblog" element={<AddBlogs />} />
        <Route path="/blogpage" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
