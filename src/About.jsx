import React from "react";
import purpleSquare from './images/purple-square.png';
import './About.css'

function About() {
  return (
    <div className="About">
      <div>
        <img src={purpleSquare} className="Purple-square" alt="purple square" />
      </div>
      <div className="Health-benefits">
        <h3>Health Benefits of Breathing</h3>
        <ul>
          <li>Reduce Anxiety
            <p className="list-p">Calm your mind and body with a few breaths.</p>
          </li>
          <li>Improve Overall Health
            <p className="list-p" id="Benefits-text">Improve circulation, lung capacity and boost your immune system</p>
          </li>
          <li>Better Stress Perception
            <p className="list-p">Breathing lowers your resting heart rate and is correlated with less anxiety and stress.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About;
