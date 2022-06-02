import React, { Component } from 'react';
import Home from '../Home.jsx'
import About from '../About.jsx'
import Footer from '../Footer.jsx'
import Navbar from '../Navbar.jsx'

class HomePage extends Component {
  render() {
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
}

export default HomePage;
