import './App.css';
import HomePage from './pages/Home-page.jsx'
import AdjustPage from './pages/Adjust-page.jsx'
import RandomizePage from './pages/Randomize-page.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = (props) => {

  return (
    <Router>
      {/* <div className="App">
        <div className="Header-footer-wrapper">
          <Navbar />
          <Home />
          <About />
          <Footer />
        </div> */}
        <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route path='/randomize' element={<RandomizePage/>} />
            <Route path='/adjust' element={<AdjustPage/>} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
