import { useState } from 'react'
import './DrumPad.css'

const getRandomButtonColor = () => {
  const colors = [
    "rgb(224, 82, 54)",
    "rgb(224, 179, 54)",
    "rgb(60, 189, 38)",
  ];
  return(colors[Math.floor(Math.random() * colors.length)]);
}

// Use props to set unique features:
function DrumPad({ id, keyTrigger, url}) {
  const [count, setCount] = useState(0)

  const audioElement = new Audio(url);

  const playSample = () => {
    console.log(`Trying to play sample from: ${url}`);
    audioElement.currentTime = 0;
    audioElement.play().catch(console.error);
  };

  return (
    <>
      <button 
        id={id} 
        className="drum-pad" 
        onClickCapture={playSample}
        style={{ backgroundColor: getRandomButtonColor() }}>
        {keyTrigger}
      </button>
    </>
  )
}
  
export default DrumPad