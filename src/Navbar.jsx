import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';




function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false)
  const handleToggle = () => {setNavBarOpen(prev => !prev)}
  // const closeMenu = () => {setNavBarOpen(false)}

    return (
      <div className="Nav-Bar">
        <div className="Logo-div">
          <NavLink className="Logo" to="/">MetCog</NavLink>
        </div>
        <div className="Hamburger-div">
          <button className="Hamburger-button" onClick={handleToggle}>{navBarOpen ? "" : <Icon className="Hamburger" icon="system-uicons:menu-hamburger" /> }</button>
        </div>
        <div className={`Nav-items ${navBarOpen ? "Show-menu" : ""}`} >
          <div className="width-80p">
            <div className="logo-close-div">
              <button className="X-button" onClick={handleToggle}>{navBarOpen ? <Icon icon="ph:x-light" />: ""}</button>
              {/* <NavLink className="Whybreathe-link" to="/"> */}
              <NavLink className="Logo Mobile-logo" to="/">
                <button className="Logo-button" onClick={handleToggle}>
                  MetCog
                </button>
              </NavLink>
            </div>
                {/* <a href="/#Benefits-text" className="Why-breathe" onClick={closeMenu}>Why breathe?</a> */}
              {/* </NavLink> */}
              <div className="nav-buttons">
                <NavLink to="/randomize">
                  <button className="nav-text" onClick={handleToggle} >
                    Randomizer
                  </button>
                </NavLink>
                <NavLink to="/adjust">
                  <button className="nav-text" onClick={handleToggle} >
                    Choose your exercise
                  </button>
                </NavLink>
              </div>
              <div className="nav-contact">
                <p className="nav-text mobile-hide"><em>What to help us improve? Contact us at:</em></p>
                <a className="black-p mobile-hide" href="mailto:richardgrinerdesigns@gmail.com?subject=Metcog Inquiry">richardgrinerdesigns@gmail.com</a>
              </div>
            </div>
          </div>
      </div>
    )


}

export default Navbar;
