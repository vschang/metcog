import React, { Component } from 'react';
import SecondHome from '../Home-2.jsx'
import Footer from '../Footer.jsx'
import Navbar from '../Navbar.jsx'

class RandomizePage extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header-footer-wrapper">
          <Navbar />
          <SecondHome />
          <Footer />
        </div>
      </div>
    );
  }
}

export default RandomizePage;
