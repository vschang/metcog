import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false)

  const toggleNavBar = () => navBarOpen(!navBarOpen)

  let width = window.innerWidth;
  if (width > 480 ) {
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
  } else {
    return (
      <div className="Nav-Bar">
        <div className="Logo-div">
          <NavLink className="Logo" to="/">MetCog</NavLink>
        </div>
        <div className="Hamburger-div">
          <button className="Hamburger-button"><i className="fa-solid fa-bars Hamburger"></i></button>
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
}

export default Navbar;
