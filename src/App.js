import './App.css';
import Home from './Home.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'



function App() {

  return (
    <div className="App">
      <div className="Header-footer-wrapper">
        <Navbar />
        <Home />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
