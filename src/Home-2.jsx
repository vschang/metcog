import React, { useState, useEffect } from 'react';
import './Home.css'
import './Home-2.css'
import TwoBreath from './images/2x-breath.gif'
import ThreeSix from './images/3-6-breathing.gif'
import FourSeven from './images/4-7-8-breathing.gif'
import FiveFive from './images/5-5x5-5-breathing.gif'
import BoxBreath from './images/box-breath.gif'
import PerfectMobile from './images/Perfect-random-mobile.gif'
import TwoBreathMobile from './images/2-breath-random-mobile.gif'
import ThreeSixMobile from './images/3-6-random-mobile.gif'
import FourSevenMobile from './images/4-7-8-random-mobil.gif'
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
  const displayExercise = () => setShowGif(true)

  const [showSecondHero, setShowSecondHero] = useState(true)
  const displaySecondHero = () => setShowSecondHero(!showSecondHero)


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
        }
        return seconds
    }
    const timer = setTimeout(() => { setShowGif(false); setShowSecondHero(true) }, getSeconds())
    return () => {clearTimeout(timer)};

  }, [index]);

  return (
    <div className="Full-height-2">
        {showSecondHero ?

          <div className="Secondary-hero Wrapper">
            <div className='Secondary-color-circle' id="rainbow-circle"></div>
            <button onClick={() => {changeExercise(); displayExercise(); displaySecondHero()}} className="Secondary-random-button" >Randomize</button>
            <button onClick={() => {changeExerciseMobile(); displayExercise(); displaySecondHero()}} className="Secondary-random-button-mobile" >Randomize</button>
          </div>

        : <div className="Exercise-gif">
            <img src={exerciseArray[index].imgUrl} className='Exercise-gif' alt={exerciseArray[index].alt} />
          </div> }

      </div>
  )
}

export default SecondHome;
