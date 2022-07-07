import React, { useState, useEffect } from 'react';
import './Adjust.css'
import Modal from './Modal.jsx'
import TwoBreath from './images/2-breath-desktop.gif'
import ThreeSix from './images/3-6-desktop.gif'
import FourSeven from './images/4-7-8-desktop.gif'
import FiveFive from './images/perfect-desktop.gif'
import BoxBreath from './images/box-desktop.gif'
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
  const [index, setIndex] = useState(0)
  function chooseBoxBreath(){setIndex(4)}
  function chooseRelaxBreath(){setIndex(1)}
  function choosePerfectBreath(){setIndex(3)}
  function choose2xBreath(){setIndex(0)}
  function choose478Breath(){setIndex(2)}
  function choosePerfectMobileBreath(){setIndex(5)}
  function chooseTwoBreathMobile(){setIndex(6)}
  function chooseThreeSixMobile(){setIndex(7)}
  function chooseFourSevenMobile(){setIndex(8)}
  function chooseBoxBreathMobile(){setIndex(9)}

  // function changeExercise(){
  //   let newIndex = Math.floor(Math.random()*5)
  //   setIndex(newIndex)
  // }

  // function changeExerciseMobile(){
  //   let newIndex = Math.floor(Math.random()*5) + 5
  //   setIndex(newIndex)
  // }
  const [showGif, setShowGif] = useState(false)

  const [showModal, setShowModal] = useState(false)
  const displayExercise = () => [setShowGif(true), setShowModal(true)]
  // const hideExercise = () => [setShowGif(false), setShowModal(false)]

  useEffect(()=>{
    const getSeconds = () => {
      let seconds;
      if ( index === 0 ){
          seconds = 108000
        } else if (index === 1 ){
          seconds = 87000
        } else if (index === 2 ){
          seconds = 118000
        } else if (index === 3 ){
          seconds = 91000
        } else if (index === 4 ){
          seconds = 113000
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
    const timer = setTimeout(() => { setShowGif(false); setShowModal(false) }, getSeconds())
    return () => {clearTimeout(timer)};

  }, [index]);



return(
  <div className="Adjust-container">
    <div className="selection-div">
      <h3 className="margin-t-0">Choose your exercise</h3>
      <p className="mb-0 normal-p">Take the planning out of mindfulness.</p>
      <div className="flex-1">
        <p className="normal-p"><em>Know what you like?</em></p>
        <p className="ml-5 normal-p">Choose your exercise.</p>
      </div>

      <div className="Selection-buttons-desktop">
        <button className="Exercise-button" onClick={()=>{chooseBoxBreath(); displayExercise()}}>Box breath</button>
        <button className="Exercise-button" onClick={()=>{chooseRelaxBreath(); displayExercise(); setShowModal(true)}}>Relax</button>
        <button className="Exercise-button" onClick={()=>{choosePerfectBreath(); displayExercise(); setShowModal(true)}}>Perfect Breath</button>
        <button className="Exercise-button" onClick={()=>{choose2xBreath(); displayExercise(); setShowModal(true)}}>2x breath</button>
        <button className="Exercise-button" onClick={()=>{choose478Breath(); displayExercise(); setShowModal(true)}}>4-7-8</button>
        {/* <button className="Exercise-button" onClick={()=>{changeExercise(); displayExercise(); setShow(true)}}><i className="fa-solid fa-shuffle fa-lg Shuffle"></i></button> */}
      </div>

      <Modal onClose={() => {setShowGif(false); setShowModal(false)}} show={showModal} alt={exerciseArray[index].alt} src={exerciseArray[index].imgUrl}/>

      <div className="Selection-buttons-mobile">
        <button className="Exercise-button" onClick={()=>{choosePerfectMobileBreath(); displayExercise(); setShowModal(true)}}>
          Perfect Breath
          <div className="Bottom-border-flex">
            <p>5.5 sec inhale x 5.5 sec inhale</p>
            <p><i className="fa-solid fa-arrow-right-long white-arrow"></i></p>
          </div>
        </button>
        <button className="Exercise-button" onClick={()=>{chooseTwoBreathMobile(); displayExercise(); setShowModal(true)}}>
          2x Breath
          <div className="Bottom-border-flex">
            <p>Doubling your exhale</p>
            <p><i className="fa-solid fa-arrow-right-long white-arrow"></i></p>
          </div>
        </button>
        <button className="Exercise-button" onClick={()=>{chooseThreeSixMobile(); displayExercise(); setShowModal(true)}}>
          Relax
          <div className="Bottom-border-flex">
            <p>3 sec inhale 6 sec inhale</p>
            <p><i className="fa-solid fa-arrow-right-long white-arrow"></i></p>
          </div>
        </button>
        <button className="Exercise-button" onClick={()=>{chooseFourSevenMobile(); displayExercise(); setShowModal(true)}}>
          4-7-8
          <div className="Bottom-border-flex">
            <div>
              <p className="margin-b-0">4 sec inhale x 7 sec hold</p>
              <p className="margin-t-0">x 8 sec hold</p>
            </div>
            <p><i className="fa-solid fa-arrow-right-long white-arrow"></i></p>
          </div>
        </button>
        <button className="Exercise-button" onClick={()=>{chooseBoxBreathMobile(); displayExercise(); setShowModal(true)}}>
          Box Breath
          <div className="Bottom-border-flex">
            <div>
              <p className="margin-b-0">4 sec inhale x 4 sec hold</p>
              <p className="margin-t-0">x 4 sec exhale x 4 sec hold</p>
            </div>
            <p><i className="fa-solid fa-arrow-right-long white-arrow"></i></p>
          </div>
        </button>
        {/* <button className="Exercise-button" onClick={()=>{changeExerciseMobile(); displayExercise()}}><i className="fa-solid fa-shuffle fa-lg Shuffle"></i></button> */}
      </div>
    </div>

    <div className="Exercise-container">
    {/* {showGif?
      <div className="Exercise-gif-container">
        <img src={exerciseArray[index].imgUrl} className="Exercise-gif " alt={exerciseArray[index].alt} />
      </div> : */}
      <div className='Color-circle' id="rainbow-circle"></div>
      {/* } */}
    </div>
  </div>
)
}

export default Adjust;
