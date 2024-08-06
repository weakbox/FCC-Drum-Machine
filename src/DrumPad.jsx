import { useState } from 'react'
import './DrumPad.css'

const audioElement = new Audio("https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3");

const playSample = () => {
  audioElement.currentTime = 0;
  audioElement.play().catch(console.error);
};

function DrumPad() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <button className="drum-pad" onClickCapture={playSample}>Kick</button>
      </>
    )
  }
  
  export default DrumPad