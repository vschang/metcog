import React from 'react';
import './Navigation.css'
import { NavLink } from 'react-router-dom';

function Navigation(){
  return(
    <div className="Navigation">
      <nav className="Nav">
        <div>
          <NavLink className="Nav-logo" to="/">MetCog</NavLink>
        </div>
        <div>
          <ul className="Navbar-items">
            <li className="Nav-item">
              <NavLink className="nav-why" to="/">Why breathe?</NavLink>
            </li>
            <li className="Nav-item">
              <NavLink className="nav-shuffle" to="/">
                <i className="fa-solid fa-shuffle fa-lg Shuffle"></i>
              </NavLink>
            </li>
            <li className="Nav-item">
              <NavLink className="nav-adjust" to="/adjust">
                <i className="fa-solid fa-sliders fa-lg Adjust"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;
