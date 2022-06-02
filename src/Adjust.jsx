import React, { useState, useEffect } from 'react';
// import './Home.css'
import './Adjust.css'
import TwoBreath from './images/2x-breath.gif'
import ThreeSix from './images/3-6-breathing.gif'
import FourSeven from './images/4-7-8-breathing.gif'
import FiveFive from './images/5-5x5-5-breathing.gif'
import BoxBreath from './images/box-breath.gif'

const Adjust = () => {
  const exerciseArray = [
    {id: 1, imgUrl: TwoBreath, alt:'2x breathing exercise' },
    {id: 2, imgUrl: ThreeSix, alt:'3 6 breathing exercise' },
    {id: 3, imgUrl: FourSeven, alt:'4 7 8 breathing exercise' },
    {id: 4, imgUrl: FiveFive, alt:'5-5 x 5-5 breathing exercise' },
    {id: 5, imgUrl: BoxBreath, alt:'Box breath breathing exercise' },
  ]

  const [index, setIndex] = useState(null)
  function chooseBoxBreath(){setIndex(4)}
  //idk if relax and perfect have correct index
  function chooseRelaxBreath(){setIndex(3)}
  function choosePerfectBreath(){setIndex(1)}
  /////////
  function choose2xBreath(){setIndex(0)}
  function choose478Breath(){setIndex(2)}

  function changeExercise(){
    let newIndex = Math.floor(Math.random()*5)
    setIndex(newIndex)
  }

  const [showGif, setShowGif] = useState(false)
  const displayExercise = () => setShowGif(true)

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
    const timer = setTimeout(() => { setShowGif(false) }, getSeconds())
    return () => {clearTimeout(timer)};

  }, [index]);


return(
  <div className="Adjust-container">
    <div className="selection-div">
      <h3>Choose your exercise</h3>
      <p>Take the planning out of mindfulness and use our breathing randomizer</p>
      <p className="mb-0"><em>Know what you like?</em></p>
      <p className="mtt-0">Choose a set exercise</p>
      <button className="Exercise-button" onClick={()=>{chooseBoxBreath(); displayExercise()}}>Box breath</button>
      <button className="Exercise-button" onClick={()=>{chooseRelaxBreath(); displayExercise()}}>Relax</button>
      <button className="Exercise-button" onClick={()=>{choosePerfectBreath(); displayExercise()}}>Perfect Breath</button>
      <button className="Exercise-button" onClick={()=>{choose2xBreath(); displayExercise()}}>2x breath</button>
      <button className="Exercise-button" onClick={()=>{choose478Breath(); displayExercise()}}>4-7-8</button>
      <button className="Exercise-button" onClick={()=>{changeExercise(); displayExercise()}}><i className="fa-solid fa-shuffle fa-lg Shuffle"></i></button>
    </div>
    <div className="Exercise-container">

    {showGif ?
      <div className="Exercise-gif">
        <img src={exerciseArray[index].imgUrl} className='Exercise-gif' alt={exerciseArray[index].alt} />
      </div>
    : <div className='Color-circle' id="rainbow-circle"></div> }
    </div>


  </div>
)
}

export default Adjust;
