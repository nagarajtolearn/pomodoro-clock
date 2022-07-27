import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [play, setPlay] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [timingType, setTimingType] = useState("SESSION");

  const timeout = setTimeout(function () {
    if (timeLeft && play) setTimeLeft(timeLeft - 1);
  }, 1000);

  const clock = () => {
    if (play) {
      timeout;
      resetTimer();
    } else {
      clearTimeout(timeout);
    }
  };
  useEffect(() => {
    clock();
  }, [play, timeLeft, timeout]);

  const handlePlay = () => {
    clearTimeout(timeout);
    setPlay(!play);
  };

  const resetTimer = () => {
    const audio = document.getElementById("beep");
    if (!timeLeft && timingType === "SESSION") {
      setTimeLeft(breakLength * 60);
      setTimingType("BREAK");
      audio.play();
    }
    if (!timeLeft && timingType === "BREAK") {
      setTimeLeft(sessionLength * 60);
      setTimingType("SESSION");
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const handleReset = () => {
    clearTimeout(timeout);
    setPlay(false);
    setTimeLeft(1500);
    setBreakLength(5);
    setSessionLength(25);
    setTimingType("SESSION");
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  const timeFormater = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const title = timingType === "SESSION" ? "Session" : "Break";

  const handleBreakIncrease = () => {
    if (breakLength < 60) setBreakLength(breakLength + 1);
  };

  const handleBreakDecrease = () => {
    if (breakLength > 1) setBreakLength(breakLength - 1);
  };

  const handleSessionIncrease = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft(timeLeft + 60);
    }
  };

  const handleSessionDecrease = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft(timeLeft - 60);
    }
  };

  return (
    <div className="App">
      <div id="wrapper">
        <h2>Pomodoro Clock</h2>
        <div className="session-break-label">
          <div className="break-section">
            <h3 id="break-label">Break Length</h3>
            <div className="break">
              <button
                disabled={play}
                id="break-increment"
                onClick={handleBreakIncrease}
              >
                +
              </button>
              <strong id="break-length">{breakLength}</strong>
              <button
                disabled={play}
                id="break-decrement"
                onClick={handleBreakDecrease}
              >
                -
              </button>
            </div>
          </div>

          <div className="session-section">
            <h3 id="session-label">Session Length</h3>
            <div className="session">
              <button
                disabled={play}
                id="session-increment"
                onClick={handleSessionIncrease}
              >
                +
              </button>
              <strong id="session-length">{sessionLength}</strong>
              <button
                disabled={play}
                id="session-decrement"
                onClick={handleSessionDecrease}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="timer-wrapper">
          <div className="timer">
            <div id="timer-label" className="session">
              {title}
            </div>
            <div id="time-left" className="time">
              {timeFormater()}
            </div>
          </div>
          <button id="start_stop" onClick={handlePlay}>
            Start/Stop
          </button>
          <button id="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />

      <div className="author">
        Designed and Coded by <br />
        <a
          href="https://github.com/nagarajtolearn/pomodoro-clock"
          target="_blank"
        >
          Nagaraj Biradar
        </a>
      </div>
    </div>
  );
}

export default App;
