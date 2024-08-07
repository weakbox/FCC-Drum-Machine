import './DrumPad.css';

const playAudio = (id) => {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
};

const setDisplayText = (text) => {
  const display = document.getElementById("display");
  display.innerText = text;
};

// Use props to set unique properties of each button:
function DrumPad({ id, keyTrigger, url}) {

  const handleClick = () => {
    playAudio(keyTrigger);
    setDisplayText(id);
  };

  return (
    <>
      <button id={id} className="drum-pad" onClick={handleClick}>
        <audio id={keyTrigger} className="clip" src={url}></audio>
        {keyTrigger}
      </button>
    </>
  );
}

export default DrumPad;