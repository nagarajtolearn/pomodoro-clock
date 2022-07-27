import React, { useState } from "react";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const handleBreakIncrease = () => {
    if (breakLength < 60)
      return breakLength > 0 ? setBreakLength(breakLength + 1) : null;
  };

  const handleBreakDecrease = () => {
    if (breakLength < 60)
      return breakLength > 0 ? setBreakLength(breakLength - 1) : null;
  };

  const handleSessionIncrease = () => {
    if (breakLength < 60)
      return breakLength > 0 ? setSessionLength(sessionLength + 1) : null;
  };

  const handleSessionDecrease = () => {
    if (breakLength < 60)
      return breakLength > 0 ? setSessionLength(sessionLength - 1) : null;
  };

  return (
    <div className="App">
      <div id="wrapper">
        <h2>25 + 5 Clock</h2>
        <div className="session-break-label">
          <div>
            <h3 id="break-label">Break Length</h3>
            <div className="break">
              <button id="break-increment" onClick={handleBreakIncrease}>
                +
              </button>
              <strong id="break-length">{breakLength}</strong>
              <button id="break-decrement" onClick={handleBreakDecrease}>
                -
              </button>
            </div>
          </div>

          <div>
            <h3 id="session-label">Session Length</h3>
            <div className="session">
              <button id="session-increment" onClick={handleSessionIncrease}>
                +
              </button>
              <strong id="session-length">{sessionLength}</strong>
              <button id="session-decrement" onClick={handleSessionDecrease}>
                -
              </button>
            </div>
          </div>
        </div>
        <div className="timer-wrapper">
          <div className="timer">
            <div id="timer-label" className="session">
              Session
            </div>
            <div id="time-left" className="time">
              {sessionLength}
            </div>
          </div>
          <button id="start_stop">Start/Stop</button>
          <button id="reset">Reset</button>
        </div>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />

      <div className="author">
        Designed and Coded by <br />
        <a href="#" target="_blank">
          Nagaraj Biradar
        </a>
      </div>
    </div>
  );
}

export default App;
