import React, { useState, useEffect } from 'react';
import './Home.css'
import TwoBreath from './images/2x-breath.gif'
import ThreeSix from './images/3-6-breathing.gif'
import FourSeven from './images/4-7-8-breathing.gif'
import FiveFive from './images/5-5x5-5-breathing.gif'
import BoxBreath from './images/box-breath.gif'
import { Link } from 'react-router-dom';


export const Home = () => {

  const exerciseArray = [
    {id: 1, imgUrl: TwoBreath, alt:'2x breathing exercise' },
    {id: 2, imgUrl: ThreeSix, alt:'3 6 breathing exercise' },
    {id: 3, imgUrl: FourSeven, alt:'4 7 8 breathing exercise' },
    {id: 4, imgUrl: FiveFive, alt:'5-5 x 5-5 breathing exercise' },
    {id: 5, imgUrl: BoxBreath, alt:'Box breath breathing exercise' },
  ]
  const [index, setIndex] = useState(0) //first exercise as default
  function changeExercise(){
    let newIndex = Math.floor(Math.random()*5)
    setIndex(newIndex)
  }

  const [showGif, setShowGif] = useState(false)
  const displayExercise = () => setShowGif(true)

  const [showHero, setShowHero] = useState(true)
  const displayHero = () => setShowHero(false)

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
    const timer = setTimeout(() => { setShowGif(false); setShowHero(true) }, getSeconds())
    return () => {clearTimeout(timer)};

  }, [index]);


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
          <div className="Button-container">
            <button onClick={() => {changeExercise(); displayExercise(); displayHero()}} className="Random-button" >Randomize</button>
            <Link to="/adjust">
            <button className="Adjust-button">Adjust</button>
            </Link>
          </div>
        </div>
      : <div className="Exercise-gif">
          <img src={exerciseArray[index].imgUrl} className='Exercise-gif' alt={exerciseArray[index].alt} />
        </div>}
      </div>
  )
}

export default Home;
