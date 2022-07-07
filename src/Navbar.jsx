import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';



function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false)
  const handleToggle = () => {setNavBarOpen(prev => !prev)}
  const closeMenu = () => {setNavBarOpen(false)}

    return (
      <div className="Nav-Bar">
        <div className="Logo-div">
          <NavLink className="Logo" to="/">MetCog</NavLink>
        </div>
        <div className="Hamburger-div">
          <button className="Hamburger-button" onClick={handleToggle}>{navBarOpen ? "" : <i className="fa-solid fa-bars Hamburger"></i> }</button>
        </div>
        <div className={`Nav-items ${navBarOpen ? "Show-menu" : ""}`} >
          <button className="X-button" onClick={handleToggle}>{navBarOpen ? <i className="fa-solid fa-xmark" ></i> : ""}</button>
          {/* <NavLink className="Whybreathe-link" to="/"> */}
          <NavLink className="Logo Mobile-logo" to="/">MetCog</NavLink>
            {/* <a href="/#Benefits-text" className="Why-breathe" onClick={closeMenu}>Why breathe?</a> */}
          {/* </NavLink> */}
          <NavLink className="Shuffle-link" to="/randomize">
            <button className="Shuffle-button Shuf-btn" onClick={handleToggle} >
              <i className="fa-solid fa-shuffle fa-lg Shuffle"></i>
            </button>
          </NavLink>
          <NavLink className="Adjust-link" to="/adjust">
            <button className="Shuffle-button" onClick={handleToggle} >
              <i className="fa-solid fa-sliders fa-lg Shuffle"></i>
            </button>
          </NavLink>
        </div>
      </div>
    )


}

export default Navbar;
