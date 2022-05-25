import React from "react";
import './Home.css'

function Home() {
  return (
    <div className="Wrapper">
        {/* <h2 className="Logo">MetCog</h2>
        <a href="#Benefits-text" className="Why-breathe">Why breathe?</a>
        <i className="fa-solid fa-shuffle fa-lg Shuffle"></i>
        <i className="fa-solid fa-sliders fa-lg Adjust"></i> */}

        <div className="Call-action">
          <h1>
            Find <em>balance</em> at work
          </h1>
          <p className="big-p">Give your brain a rest. Sneak a randomized 1-3 minute breathing exercise between tasks. <em>More time?</em> <br></br> Adjust your preferences as well.</p>
        </div>
        <div className='Color-circle' id="rainbow-circle"></div>
        <button className="Random-button">Randomize</button>
        <button className="Adjust-button">Adjust</button>

        {/* <img src={purpleSquare} className="Purple-square" alt="purple square" />
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
        </div> */}

        {/* <div className="Logo-footer">
          <h2 className="mt-0">MetCog</h2>
          <p className="Small-p">Mindfulness at work</p>
        </div>
        <div className="Resources-footer">
          <p className="mt-0"><strong>Resources</strong></p>
          <p>Why breathe?</p>
          <p>Randomize</p>
        </div>
        <div className="Contact-footer">
          <p className="mt-0"><strong>Contact</strong></p>
          <p>What to help us improve?</p>
          <p className="mb-0">Email us at:</p>
          <a href="mailto:richardgrinerdesigns@gmail.com?subject=Metcog Inquiry">richardgrinerdesigns@gmail.com</a>
        </div> */}
      </div>
  )
}

export default Home;
