import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink 
      to="/"
      className="nav-link"
      >
        Todays Workout
      </NavLink>
      <NavLink 
      to="/workouts"
      className="nav-link"
      >
        Workouts
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