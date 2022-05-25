import './App.css';
import RandomColor from './Random-color.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'


function App() {
  return (
    <div className="App">
        <div ClassName="Wrapper">
          <Navbar />
          <Home />
          <About />
          <Footer />
        </div>
    </div>
  );
}

export default App;
