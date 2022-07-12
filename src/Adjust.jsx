import React, { useState, useEffect } from 'react';
import './Adjust.css'
import Modal from './Modal.jsx'

const exerciseArray = [
  {id: 1, imgUrl: "https://i.imgur.com/QGhB4u8.mp4", alt:'2x breathing exercise' },
  {id: 2, imgUrl: "https://i.imgur.com/E7hVigg.mp4 ", alt:'3 6 breathing exercise' },
  {id: 3, imgUrl: "https://i.imgur.com/TN0hUTN.mp4", alt:'4 7 8 breathing exercise' },
  {id: 4, imgUrl: "https://i.imgur.com/PucOIN2.mp4", alt:'perfect breathing exercise' },
  {id: 5, imgUrl: "https://i.imgur.com/EDdZ7pv.mp4", alt:'Box breath breathing exercise' },

  {id: 6, imgUrl: "https://i.imgur.com/er86GgK.mp4", alt:'Perfect breath breathing exercise' },
  {id: 7, imgUrl: "https://i.imgur.com/nWA7Kqx.mp4", alt:'2x breathing exercise' },
  {id: 8, imgUrl: "https://i.imgur.com/hpQuXkz.mp4", alt:'3 6 breathing exercise' },
  {id: 9, imgUrl: "https://i.imgur.com/ro7VVeP.mp4 ", alt:'4 7 8 breathing exercise' },
  {id: 10, imgUrl: "https://i.imgur.com/PK7JlVn.mp4", alt:'5-5 x 5-5 breathing exercise' },
]

const Adjust = () => {
  const [index, setIndex] = useState(0)
  function chooseExercise(index) {
    setIndex(index);
    document.getElementById("Exercise-vid").setAttribute("src", exerciseArray[index].imgUrl);
    document.getElementById("Exercise-vid").setAttribute("alt", exerciseArray[index].alt);
  }

  const [showGif, setShowGif] = useState(true) // eslint-disable-line

  const [showModal, setShowModal] = useState(false)
  const displayExercise = () => [setShowGif(true), setShowModal(true)]
  // const hideExercise = () => [setShowGif(false), setShowModal(false)]

  useEffect(()=>{
    const getSeconds = () => {
      let seconds;
      if ( index === 0 ){
          seconds = 107000
        } else if (index === 1 ){
          seconds = 86000
        } else if (index === 2 ){
          seconds = 117000
        } else if (index === 3 ){
          seconds = 91000
        } else if (index === 4 ){
          seconds = 112000
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
      <button className="Exercise-button" onClick={()=>{chooseExercise(4); displayExercise()} }>Box breath</button>
        <button className="Exercise-button" onClick={()=>{chooseExercise(1); displayExercise()}}>Relax</button>
        <button className="Exercise-button" onClick={()=>{chooseExercise(3); displayExercise()}}>Perfect Breath</button>
        <button className="Exercise-button" onClick={()=>{chooseExercise(0); displayExercise()}}>2x breath</button>
        <button className="Exercise-button" onClick={()=>{chooseExercise(2); displayExercise()}}>4-7-8</button>
        {/* <button className="Exercise-button" onClick={()=>{changeExercise(); displayExercise(); setShow(true)}}><i className="fa-solid fa-shuffle fa-lg Shuffle"></i></button> */}
      </div>

      <Modal onClose={() => {setShowGif(false); setShowModal(false)}} show={showModal} alt={exerciseArray[index].alt} src={exerciseArray[index].imgUrl}/>

      <div className="Selection-buttons-mobile">
        <button className="Exercise-button" onClick={()=>{chooseExercise(5); displayExercise()}}>          Perfect Breath
          <div className="Bottom-border-flex">
            <p>5.5 sec inhale x 5.5 sec inhale</p>
            <p><i className="fa-solid fa-arrow-right-long white-arrow"></i></p>
          </div>
        </button>
        <button className="Exercise-button" onClick={()=>{chooseExercise(6); displayExercise()}}>          2x Breath
          <div className="Bottom-border-flex">
            <p>Doubling your exhale</p>
            <p><i className="fa-solid fa-arrow-right-long white-arrow"></i></p>
          </div>
        </button>
        <button className="Exercise-button" onClick={()=>{chooseExercise(7); displayExercise()}}>
          Relax
          <div className="Bottom-border-flex">
            <p>3 sec inhale 6 sec inhale</p>
            <p><i className="fa-solid fa-arrow-right-long white-arrow"></i></p>
          </div>
        </button>
        <button className="Exercise-button" onClick={()=>{chooseExercise(8); displayExercise()}}>
          4-7-8
          <div className="Bottom-border-flex">
            <div>
              <p className="margin-b-0">4 sec inhale x 7 sec hold</p>
              <p className="margin-t-0">x 8 sec hold</p>
            </div>
            <p><i className="fa-solid fa-arrow-right-long white-arrow"></i></p>
          </div>
        </button>
        <button className="Exercise-button" onClick={()=>{chooseExercise(9); displayExercise()}}>
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
