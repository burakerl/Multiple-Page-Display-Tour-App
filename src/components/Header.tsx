import { Link, Route, Routes } from "react-router-dom";
import App from "../App";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <ul className="navbar-items">
          <li className="navbar-item">
            <Link to="">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Header;
