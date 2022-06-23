import React, { useState, useEffect } from 'react';
import './Modal.css'
import TwoBreath from './images/2-breath-mobile.gif'
// import ThreeSix from './images/3-6-breathing.gif'
// import FourSeven from './images/4-7-8-breathing.gif'
// import FiveFive from './images/5-5x5-5-breathing.gif'
// import BoxBreath from './images/box-breath.gif'
// import PerfectMobile from './images/Perfect-mobile.gif'


const Modal = props => {
  // const [showGif, setShowGif] = useState(false)

  // useEffect(()=>{
  //   const getSeconds = () => {
  //     let seconds;
  //     if ( props.id === 1){
  //         seconds = 108000
  //       } else if (props.id === 2 ){
  //         seconds = 87000
  //       } else if (props.id === 3 ){
  //         seconds = 118000
  //       } else if (props.id === 4 ){
  //         seconds = 91000
  //       } else if (props.id === 5 ){
  //         seconds = 113000
  //       } else if (props.id === 6 ){
  //         seconds = 89000
  //       } else if (props.id === 7 ){
  //         seconds = 85000
  //       } else if (props.id === 8 ){
  //         seconds = 79000
  //       } else if (props.id === 9 ){
  //         seconds = 105000
  //       } else if (props.id === 10 ){
  //         seconds = 92000
  //       }
  //       return seconds
  //   }
  //   const timer = setTimeout(() => { setShowGif(false) }, getSeconds())
  //   return () => {clearTimeout(timer)};

  // }, [props.id]);


  return (
    <div className={`modal ${props.show ? 'show' : ''}`}>
      <div className='modal-content'>
        <div className='modal-body'>
          <img src={props.src} className='Adjust-exercise-gif' alt={props.alt} />
        </div>
          <button onClick={props.onClose} className='close'><i className="fa-solid fa-xmark" ></i></button>
      </div>
    </div>
  );
}

export default Modal
