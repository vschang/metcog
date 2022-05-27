import React from "react";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Nav-Bar">
      <div>
        <NavLink className="Logo" to="/">MetCog</NavLink>
      </div>
      <div className="Nav-items">
        <a href="#Benefits-text" className="Why-breathe">Why breathe?</a>
        <button className="Shuffle-button">
          <i className="fa-solid fa-shuffle fa-lg Shuffle"></i>
        </button>
        {/* <NavLink className="" to="/adjust">
          <i className="fa-solid fa-sliders fa-lg Adjust"></i>
        </NavLink> */}
      </div>

    </div>
  )
}

export default Navbar;
