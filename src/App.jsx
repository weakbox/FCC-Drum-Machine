import './App.css'
import './DrumPad.jsx'
import DrumPad from './DrumPad.jsx';

const audioClips = [
  {
    id: "kick",
    keyTrigger: "Q",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    id: "heater-1",
    keyTrigger: "W",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    id: "heater-2",
    keyTrigger: "E",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    id: "heater-3",
    keyTrigger: "A",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    id: "heater-4",
    keyTrigger: "S",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  },
  {
    id: "clap",
    keyTrigger: "D",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    id: "open-hh",
    keyTrigger: "Z",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    id: "kick-hat",
    keyTrigger: "X",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    id: "closed-hh",
    keyTrigger: "C",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },
];

const drawDrumPads = (clips) => {
  return clips.map((clip) => {
    return (
      <DrumPad 
        id={clip.id}
        key={`${clip.id}-${clip.keyTrigger}`}
        keyTrigger={clip.keyTrigger}
        url={clip.url}
      />
    );
  });
}

const setDisplayText = (text) => {
  const display = document.getElementById("display");
  display.innerText = text;
};

const playAudio = (event) => {
  const clip = audioClips.find((clip) => event.key === clip.keyTrigger.toLowerCase() || event.key === clip.keyTrigger);

  if (!clip) { return; }

  document.getElementById(clip.id).focus();

  const audio = document.getElementById(clip.keyTrigger);
  audio.currentTime = 0;
  audio.play();

  setDisplayText(clip.id);
};

function App() {
  return (
    <div id="drum-machine" className='drum-machine-container' onKeyDown={playAudio}>
      <div className="header-container">
        <p>React Drum Machine</p>
      </div>
      <div className="body-container">
        <div className="drum-pad-container">{drawDrumPads(audioClips)}</div>
        <div id="display" className="display-container">Display</div>
      </div>
    </div>
  )
}

export default App
