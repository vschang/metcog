import React, { useState, useEffect } from 'react';
import './Adjust.css'
import Modal from './Modal.jsx'
import TwoBreath from './images/2x-breath.gif'
import ThreeSix from './images/3-6-breathing.gif'
import FourSeven from './images/4-7-8-breathing.gif'
import FiveFive from './images/5-5x5-5-breathing.gif'
import BoxBreath from './images/box-breath.gif'

import PerfectMobile from './images/Perfect-mobile.gif'
import TwoBreathMobile from './images/2-breath-mobile.gif'
import ThreeSixMobile from './images/3-6-mobile.gif'
import FourSevenMobile from './images/4-7-8-mobile.gif'
import BoxBreathMobile from './images/Box-mobile.gif'


const exerciseArray = [
  {id: 1, imgUrl: TwoBreath, alt:'2x breathing exercise' },
  {id: 2, imgUrl: ThreeSix, alt:'3 6 breathing exercise' },
  {id: 3, imgUrl: FourSeven, alt:'4 7 8 breathing exercise' },
  {id: 4, imgUrl: FiveFive, alt:'5-5 x 5-5 breathing exercise' },
  {id: 5, imgUrl: BoxBreath, alt:'Box breath breathing exercise' },

  {id: 6, imgUrl: PerfectMobile, alt:'Perfect breath breathing exercise' },
  {id: 7, imgUrl: TwoBreathMobile, alt:'2x breathing exercise' },
  {id: 8, imgUrl: ThreeSixMobile, alt:'3 6 breathing exercise' },
  {id: 9, imgUrl: FourSevenMobile, alt:'4 7 8 breathing exercise' },
  {id: 10, imgUrl: BoxBreathMobile, alt:'5-5 x 5-5 breathing exercise' },

]

const Adjust = () => {

  const [index, setIndex] = useState(null)
  function chooseBoxBreath(){setIndex(4)}
  function chooseRelaxBreath(){setIndex(3)}
  function choosePerfectBreath(){setIndex(1)}
  function choose2xBreath(){setIndex(0)}
  function choose478Breath(){setIndex(2)}

  function choosePerfectMobileBreath(){setIndex(5)}
  function chooseTwoBreathMobile(){setIndex(6)}
  function chooseThreeSixMobile(){setIndex(7)}
  function chooseFourSevenMobile(){setIndex(8)}
  function chooseBoxBreathMobile(){setIndex(9)}

  function changeExercise(){
    let newIndex = Math.floor(Math.random()*5)
    setIndex(newIndex)
  }

  const [showGif, setShowGif] = useState(false)
  const displayExercise = () => setShowGif(true)
  //desktop needs to be updated
  useEffect(()=>{
    const getSeconds = () => {
      let seconds;
      if ( index === 0 ){
          seconds = 104900
        } else if (index === 1 ){
          seconds = 94700
        } else if (index === 2 ){
          seconds = 122900
        } else if (index === 3 ){
          seconds = 91800
        } else if (index === 4 ){
          seconds = 120000
        } else if (index === 5 ){
          seconds = 89000
        } else if (index === 6 ){
          seconds = 85000
        } else if (index === 7 ){
          seconds = 79000
        } else if (index === 8 ){
          seconds = 105000
        } else if (index === 9 ){
          seconds = 92000
        }
        return seconds
    }
    const timer = setTimeout(() => { setShowGif(false) }, getSeconds())
    return () => {clearTimeout(timer)};

  }, [index]);

  const [show, setShow] = useState(false)


return(
  <div className="Adjust-container">
    <div className="selection-div">
      <h3 className="margin-t-0">Choose your exercise</h3>
      <p>Take the planning out of mindfulness and use our breathing randomizer</p>
      <p className="mb-0"><em>Know what you like?</em></p>
      <p className="mtt-0">Choose a set exercise</p>
      <div className="Selection-buttons-desktop">
        <button className="Exercise-button" onClick={()=>{chooseBoxBreath(); displayExercise()}}>Box breath</button>
        <button className="Exercise-button" onClick={()=>{chooseRelaxBreath(); displayExercise()}}>Relax</button>
        <button className="Exercise-button" onClick={()=>{choosePerfectBreath(); displayExercise()}}>Perfect Breath</button>
        <button className="Exercise-button" onClick={()=>{choose2xBreath(); displayExercise()}}>2x breath</button>
        <button className="Exercise-button" onClick={()=>{choose478Breath(); displayExercise()}}>4-7-8</button>
        <button className="Exercise-button" onClick={()=>{changeExercise(); displayExercise()}}><i className="fa-solid fa-shuffle fa-lg Shuffle"></i></button>
      </div>
      <div className="Selection-buttons-mobile">
        <button className="Exercise-button" onClick={()=>{choosePerfectMobileBreath(); displayExercise(); setShow(true)}}>Perfect Breath</button>
        <button className="Exercise-button" onClick={()=>{chooseTwoBreathMobile(); displayExercise(); setShow(true)}}>2x Breath</button>
        <button className="Exercise-button" onClick={()=>{chooseThreeSixMobile(); displayExercise(); setShow(true)}}>Relax</button>
        <button className="Exercise-button" onClick={()=>{chooseFourSevenMobile(); displayExercise(); setShow(true)}}>4-7-8</button>
        <button className="Exercise-button" onClick={()=>{chooseBoxBreathMobile(); displayExercise(); setShow(true)}}>Box Breath</button>
      </div>
      </div>
    <div className="Exercise-container">
    {showGif?
      <div className="Exercise-gif-container">
        <img src={exerciseArray[index].imgUrl} className="Exercise-gif" alt={exerciseArray[index].alt} />
        <Modal />
      </div> :
      <div className='Color-circle' id="rainbow-circle"></div>
      }
    </div>
  </div>
)
}

export default Adjust;
