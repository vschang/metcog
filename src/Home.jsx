import React, { useState, useEffect } from 'react';
import './Home.css'
import Modal from './Modal.jsx'
import { Link } from 'react-router-dom';


export const Home = () => {

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

  const [showModal, setShowModal] = useState(false)
  const displayExercise = () => [setShowGif(true), setShowModal(true)]

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
    const timer = setTimeout(() => { setShowGif(false)}, getSeconds())
    return () => {clearTimeout(timer)};
  }, [index]);


  return (
    <div className="Full-height Full-height-home">
      {/* {showHero ? */}
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
            <button onClick={() => {changeExercise(); displayExercise()}} className="Random-button" >Randomize</button>
            <Link to="/adjust">
            <button className="Adjust-button">Choose</button>
            </Link>
          </div>

          <Modal onClose={() => {setShowModal(false); setShowGif(false)}} show={showModal} alt={exerciseArray[index].alt} src={exerciseArray[index].imgUrl}/>

          <div className="Button-container-mobile">
            <button onClick={() => {changeExerciseMobile(); displayExercise()}} className="Random-button" >Randomize</button>
            <Link to="/adjust">
            <button className="Adjust-button">Choose</button>
            </Link>
          </div>

        </div>
      {/* : <div className="Exercise-gif">
          <img src={exerciseArray[index].imgUrl} className='Exercise-gif' alt={exerciseArray[index].alt} />
          <button onClick={() => {hideExercise(); displayHero()}} className="stop-button"><i className="fa-solid fa-arrow-left-long"></i></button>
        </div>} */}
      </div>
  )
}

export default Home;
