import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/service", title: "Services" },
    { path: "/blog", title: "Blog" },
    { path: "/aboutus", title: "AboutUs" },
    { path: "/contactus", title: "ContactUs" },
    { path: "/login", title: "Login" }
  ];

    return (
      <div className="navbar">
        <span>Logo</span>
        <span className="nav-items">
          {links.map((item, index) => (
            <NavLink to={item.path} key={index} className="nav-link">
              <div className="link-text">{item.title}</div>
            </NavLink>
          ))}
        </span>
      </div>
    );
};

export default Navbar;
