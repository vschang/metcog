import React, { useState, useEffect } from 'react';
import './Home.css'
import TwoBreath from './images/2x-breath.gif'
import ThreeSix from './images/3-6-breathing.gif'
import FourSeven from './images/4-7-8-breathing.gif'
import FiveFive from './images/5-5x5-5-breathing.gif'
import BoxBreath from './images/box-breath.gif'

function Home() {

  const exerciseArray = [
    {id: 1, imgUrl: TwoBreath, alt:'2x breathing exercise' },
    {id: 2, imgUrl: ThreeSix, alt:'3 6 breathing exercise' },
    {id: 3, imgUrl: FourSeven, alt:'4 7 8 breathing exercise' },
    {id: 4, imgUrl: FiveFive, alt:'5-5 x 5-5 breathing exercise' },
    {id: 5, imgUrl: BoxBreath, alt:'Box breath breathing exercise' },
  ]
  const [index, setIndex] = useState(0) //first exercise as default

  const [showGif, setShowGif] = useState(false)
  const displayExercise = () => setShowGif(true)

  const [showHero, setShowHero] = useState(true)
  const displayHero = () => setShowHero(false)

  const [showSecondHero, setShowSecondHero] = useState(false)
  const displaySecondHero = () => setShowSecondHero(!showSecondHero)


  function changeExercise(){
    let newIndex = Math.floor(Math.random()*5)
    setIndex(newIndex)
  }

  useEffect(()=>{
    const getSeconds = () => {
      let seconds;
      if ( index === 0 ){
          seconds = 103980
        } else if (index === 1 ){
          seconds = 92840
        } else if (index === 2 ){
          seconds = 121860
        } else if (index === 3 ){
          seconds = 92380
        } else if (index === 4 ){
          seconds = 116750
        }
        return seconds
    }
    const timer = setTimeout(() => { setShowGif(false); setShowSecondHero(true) }, getSeconds())
    return () => {clearTimeout(timer)};

  }, []);

  return (
    <div className="Full-height">
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
          <button onClick={() => {changeExercise(); displayExercise(); displayHero()}} className="Random-button" >Randomize</button>
          {/* <button className="Adjust-button">Adjust</button> */}
        </div>
      : null}

        {showSecondHero ?

          <div className="Secondary-hero Wrapper">
            <div className='Secondary-color-circle' id="rainbow-circle"></div>
            <button onClick={() => {changeExercise(); displayExercise(); displaySecondHero()}} className="Secondary-random-button" >Randomize</button>
            {/* <button className="Adjust-button">Adjust</button> */}
          </div>

        : null }


        {showGif ?
          <div className="Exercise-gif">
            <img src={exerciseArray[index].imgUrl} className='Exercise-gif' alt={exerciseArray[index].alt} />
          </div>
        : null }

      </div>
  )
}

export default Home;
