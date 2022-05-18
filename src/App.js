import './App.css';
import purpleSquare from './images/purple-square.png';

function App() {
  return (
    <div className="App">
      <div className="Wrapper">

        <h2 className="Logo">MetCog</h2>
        <p className="Why-breathe">Why breathe?</p>
        <p className="Shuffle">🔀</p>
        <div className="Call-action">
          <h1>
            Find <em>balance</em> at work
          </h1>
          <p className="big-p">Give your brain a rest. Sneak a randomized 1-3 minute breathing exercise between tasks. <em>More time?</em> <br></br> Adjust your preferences as well.</p>
        </div>
        <div className='Color-circle'></div>
        <button className="Random-button">Randomize</button>
        <button className="Adjust-button">Adjust</button>
        <img src={purpleSquare} className="Purple-square" alt="purple square" />

        <div className="Health-benefits">
          <h3>Health Benefits of Breathing</h3>
          <ul>
            <li>Reduce Anxiety
              <p className="list-p">Calm your mind and body with a few breaths.</p>
            </li>
            <li>Improve Overall Health
              <p className="list-p">Improve circulation, lung capacity and boost your immune system</p>
            </li>
            <li>Better Stress Perception
              <p className="list-p">Breathing lowers your resting heart rate and is correlated with less anxiety and stress.</p>
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
}

export default App;
