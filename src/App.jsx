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
          <p>REACT DRUM MACHINE 2000</p>
        </div>
        <div className="body-container">
          <div className="drum-pad-container">
            <DrumPad/>
            <DrumPad/>
            <DrumPad/>
            <DrumPad/>
            <DrumPad/>
            <DrumPad/>
            <DrumPad/>
            <DrumPad/>
            <DrumPad/>
          </div>
          <div id="display" className="display-container">Display</div>
        </div>
      </div>
    </>
  )
}

export default App
