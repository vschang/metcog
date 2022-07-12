import React, { useState, useEffect } from 'react';
import './Home.css'
import './Home-2.css'
import Modal from './Modal.jsx'

export const SecondHome = () => {

  const exerciseArray = [
    {id: 1, imgUrl: "https://i.imgur.com/qVIQLW6.mp4", alt:'2x breathing exercise' },
    {id: 2, imgUrl: "https://i.imgur.com/t4LmqLB.mp4", alt:'3 6 breathing exercise' },
    {id: 3, imgUrl: "https://i.imgur.com/suOAxS8.mp4", alt:'4 7 8 breathing exercise' },
    {id: 4, imgUrl: "https://i.imgur.com/A9KNORE.mp4", alt:'perfect breathing exercise' },
    {id: 5, imgUrl: "https://i.imgur.com/Sq8ofiv.mp4", alt:'Box breath breathing exercise' },

    {id: 6, imgUrl: "https://i.imgur.com/OW5c4DE.mp4", alt:'Perfect breath breathing exercise' },
    {id: 7, imgUrl: "https://i.imgur.com/z5y0npW.mp4", alt:'2x breathing exercise' },
    {id: 8, imgUrl: "https://i.imgur.com/NH118HJ.mp4", alt:'3 6 breathing exercise' },
    {id: 9, imgUrl: "https://i.imgur.com/HoPMaYD.mp4", alt:'4 7 8 breathing exercise' },
    {id: 10, imgUrl: "https://i.imgur.com/vEYU7Dl.mp4", alt:'5-5 x 5-5 breathing exercise' }
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
  const [showGif, setShowGif] = useState(false) // eslint-disable-line
  // const [showSecondHero, setShowSecondHero] = useState(true)
  // const displaySecondHero = () => setShowSecondHero(!showSecondHero)
  // const displaySecondHero2 = () => setShowSecondHero(true)

  const [showModal, setShowModal] = useState(false)
  const displayExercise = () => [setShowGif(true), setShowModal(true)]
  const hideExercise = ()=> [setShowGif(false), setShowModal(false)]


  useEffect(()=>{
    const getSeconds = () => {
      let seconds;
      if ( index === 0 ){ // 2x
          seconds = 104000
        } else if (index === 1 ){ // 3 6
          seconds = 94000
        } else if (index === 2 ){ // 4 7 8
          seconds = 122000
        } else if (index === 3 ){ // perfect
          seconds = 91000
        } else if (index === 4 ){// box
          seconds = 113000
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
            <div className='Secondary-color-circle-2' id="rainbow-circle"></div>
            <button onClick={() => {changeExercise(); displayExercise()}} className="Secondary-random-button-2" >Randomize</button>
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
