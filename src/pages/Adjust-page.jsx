import React, { Component } from 'react';
import Footer from '../Footer.jsx'
import Navbar from '../Navbar.jsx'
import Adjust from '../Adjust.jsx'

class AdjustPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header-footer-wrapper">
          <Navbar />
          <Adjust />
          <Footer />
        </div>
      </div>
    );
  }
}

export default AdjustPage;
