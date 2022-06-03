import React, { useState, useEffect } from 'react';
import './Modal.css'
import TwoBreath from './images/2x-breath.gif'
import ThreeSix from './images/3-6-breathing.gif'
import FourSeven from './images/4-7-8-breathing.gif'
import FiveFive from './images/5-5x5-5-breathing.gif'
import BoxBreath from './images/box-breath.gif'
import PerfectMobile from './images/Perfect-mobile.gif'


const Modal = props => {

  return (
    <div className={`modal ${props.show ? 'show' : ''}`}>
      <div className='modal-content'>
        <div className='modal-header'>
        </div>
        <div className='modal-body'>
          <img src='./images/2x-breath.gif' className='Adjust-exercise-gif' alt="two breath" />
        </div>
        <div className='modal-footer'>
          <button onClick={props.onClose} className='close'><i className="fa-solid fa-xmark" ></i></button>
        </div>
      </div>
    </div>
  );
}

export default Modal
