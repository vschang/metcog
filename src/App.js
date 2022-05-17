import greenCircle from './images/green-circle.png';
import './App.css';
import Nav from './nav.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={greenCircle} className="App-logo" alt="logo" />
        <h1>
          Find balance at work
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
