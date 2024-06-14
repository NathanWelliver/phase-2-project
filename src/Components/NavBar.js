import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink 
      to="/"
      className="nav-link"
      >
        Home
      </NavLink>
      <NavLink 
      to="/about"
      className="nav-link"
      >
        About
      </NavLink>
      <NavLink 
      to="/rest"
      className="nav-link"
      >
      Rest!
      </NavLink>
    </nav>
    );
};

export default NavBar;