import React, { useState, useEffect } from 'react';
import './Home.css'
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
import { Link } from 'react-router-dom';


export const Home = () => {

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
  // min = 5 max = 9 diff = 4
  function changeExerciseMobile(){
    let newIndex = Math.floor(Math.random()*5) + 5
    setIndex(newIndex)
  }

  const [showGif, setShowGif] = useState(false)
  const displayExercise = () => setShowGif(true)

  const [showHero, setShowHero] = useState(true)
  const hideHero = () => setShowHero(false)

  const hideExercise = () => setShowGif(false)
  const displayHero = () => setShowHero(true)

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
    const timer = setTimeout(() => { setShowGif(false); setShowHero(true) }, getSeconds())
    return () => {clearTimeout(timer)};
  }, [index]);


  return (
    <div className="Full-height Full-height-home">
      {showHero ?
        <div className="Wrapper">
          <div className="Call-action">
            <h1>
              Find <em>balance</em> at work
            </h1>
            <p className="big-p">Give your brain a rest. Sneak a randomized 1-3 minute breathing exercise between tasks.
            {/* <em>More time?</em> <br></br> Adjust your preferences as well. */}
            </p>
          </div>

          <div className='Color-circle' id="rainbow-circle"></div>

          <div className="Button-container-desktop">
            <button onClick={() => {changeExercise(); displayExercise(); hideHero()}} className="Random-button" >Randomize</button>
            <Link to="/adjust">
            <button className="Adjust-button">Adjust</button>
            </Link>
          </div>

          <div className="Button-container-mobile">
            <button onClick={() => {changeExerciseMobile(); displayExercise(); hideHero()}} className="Random-button" >Randomize</button>
            <Link to="/adjust">
            <button className="Adjust-button">Adjust</button>
            </Link>
          </div>

        </div>
      : <div className="Exercise-gif">
          <img src={exerciseArray[index].imgUrl} className='Exercise-gif' alt={exerciseArray[index].alt} />
          <button onClick={() => {hideExercise(); displayHero()}} className="stop-button"><i className="fa-solid fa-arrow-left-long"></i></button>
        </div>}
      </div>
  )
}

export default Home;
