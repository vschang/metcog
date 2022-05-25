import { useState } from 'react';
import './App.css';

const RandomColor = () => {
  const [color, setColor] = useState('#000');
  const getHex = () => {
    const color = Math.floor(Math.random()*16777215).toString(16);
    setColor(color);
  }


  return (
    <div className='Color-circle-test' style={{backgroundColor: '#' + color}} >
      <button className="randomize-button" onClick={getHex}>Randomize</button>
    </div>
  );
};

export default RandomColor;
