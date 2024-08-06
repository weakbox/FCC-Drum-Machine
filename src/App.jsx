import { useState } from 'react'
import './App.css'
import './DrumPad.jsx'
import DrumPad from './DrumPad.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="drum-machine" className='drum-machine-container'>
        <div className="header-container">
          <p>React Drum Machine RDX-2024</p>
        </div>
        <div className="body-container">
          <div className="drum-pad-container">
            <DrumPad 
              id="kick" 
              keyTrigger="Q" 
              url="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" 
            />
            <DrumPad 
              id="heater-1" 
              keyTrigger="W" 
              url="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" 
            />
            <DrumPad 
              id="heater-2" 
              keyTrigger="E" 
              url="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" 
            />
            <DrumPad 
              id="heater-3" 
              keyTrigger="A" 
              url="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" 
            />
            <DrumPad 
              id="heater-4" 
              keyTrigger="S" 
              url="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" 
            />
            <DrumPad 
              id="clap" 
              keyTrigger="D" 
              url="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" 
            />
            <DrumPad 
              id="open-hh" 
              keyTrigger="Z" 
              url="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" 
            />
            <DrumPad 
              id="kick-hat" 
              keyTrigger="X" 
              url="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" 
            />
            <DrumPad 
              id="closed-hh" 
              keyTrigger="C" 
              url="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" 
            />
          </div>
          <div id="display" className="display-container">Display</div>
        </div>
      </div>
    </>
  )
}

export default App
