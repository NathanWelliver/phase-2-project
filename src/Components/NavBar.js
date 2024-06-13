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
      to="/form"
      className="nav-link"
      >
      Add Workouts
      </NavLink>
    </nav>
    );
};

export default NavBar;