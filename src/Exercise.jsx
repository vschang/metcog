import React from 'react';
import TwoBreath from './images/2x-breath.gif'
import ThreeSix from './images/3-6-breathing.gif'
import FourSeven from './images/4-7-8-breathing.gif'
import FiveFive from './images/5-5x5-5-breathing.gif'
import BoxBreath from './images/box-breath.gif'
import Button from './Button.js'

const Exercise = (props) => {
  let gif;
  gif = (<img src={props.imgUrl} className="Exercise-gif" alt={props.alt} />)
  return (
    <div className="Breathing-gif">
      {gif}
      <Button />
    </div>

  );

};

export default Exercise;
