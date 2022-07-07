import React, { useState, useEffect } from 'react';
import './Home.css'
import './Home-2.css'
import Modal from './Modal.jsx'
import TwoBreath from './images/2-breath-random-desktop.gif'
import ThreeSix from './images/3-6-random-desktop.gif'
import FourSeven from './images/4-7-8-random-desktop.gif'
import FiveFive from './images/perfect-random-desktop.gif'
import BoxBreath from './images/box-random-desktop.gif'

import PerfectMobile from './images/Perfect-random-mobile.gif'
import TwoBreathMobile from './images/2-breath-random-mobile.gif'
import ThreeSixMobile from './images/3-6-random-mobile.gif'
import FourSevenMobile from './images/4-7-8-random-mobile.gif'
import BoxBreathMobile from './images/Box-random-mobile.gif'


export const SecondHome = () => {

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
    {id: 10, imgUrl: BoxBreathMobile, alt:'5-5 x 5-5 breathing exercise' }
  ]

  const [index, setIndex] = useState(0) //first exercise as default
  function changeExercise(){
    let newIndex = Math.floor(Math.random()*5)
    setIndex(newIndex)
  }

  function changeExerciseMobile(){
    let newIndex = Math.floor(Math.random()*5) + 5
    setIndex(newIndex)
  }
  const [showGif, setShowGif] = useState(false)
  // const [showSecondHero, setShowSecondHero] = useState(true)
  // const displaySecondHero = () => setShowSecondHero(!showSecondHero)
  // const displaySecondHero2 = () => setShowSecondHero(true)

  const [showModal, setShowModal] = useState(false)
  const displayExercise = () => [setShowGif(true), setShowModal(true)]
  const hideExercise = ()=> [setShowGif(false), setShowModal(false)]


  useEffect(()=>{
    const getSeconds = () => {
      let seconds;
      if ( index === 0 ){
          seconds = 104000
        } else if (index === 1 ){
          seconds = 93000
        } else if (index === 2 ){
          seconds = 123000
        } else if (index === 3 ){
          seconds = 96000
        } else if (index === 4 ){
          seconds = 120000
        } else if (index === 5 ){
          seconds = 94000
        } else if (index === 6 ){
          seconds = 90000
        } else if (index === 7 ){
          seconds = 84000
        } else if (index === 8 ){
          seconds = 109000
        } else if (index === 9 ){
          seconds = 97000
        }
        return seconds
    }
    const timer = setTimeout(() => { hideExercise() }, getSeconds())
    return () => {clearTimeout(timer)};

  }, [index]);

  return (
    <div className="Full-height-2 Full-height-2-random">
        {/* {showSecondHero ? */}

          <div className="Secondary-hero Wrapper">
            <div className='Secondary-color-circle' id="rainbow-circle"></div>
            <button onClick={() => {changeExercise(); displayExercise()}} className="Secondary-random-button" >Randomize</button>
            <button onClick={() => {changeExerciseMobile(); displayExercise()}} className="Secondary-random-button-mobile" >Randomize</button>
          </div>

          <Modal onClose={() => {setShowModal(false); setShowGif(false)}} show={showModal} alt={exerciseArray[index].alt} src={exerciseArray[index].imgUrl}/>

        {/* : <div className="Exercise-gif-random">
            <img src={exerciseArray[index].imgUrl} className='rand-exercise-gif' alt={exerciseArray[index].alt} />
            <button onClick={() => {hideExercise(); displaySecondHero2()}} className="stop-button"><i className="fa-solid fa-arrow-left-long"></i></button>
          </div> } */}

      </div>
  )
}

export default SecondHome;
