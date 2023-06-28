import { useEffect } from "react";
import "./Stopwatch.scss";

interface StopwatchProps {
  time: number;
  isActive: boolean;
  updateTime: () => void;
}

function Stopwatch({ time, isActive, updateTime }: StopwatchProps): JSX.Element {
  useEffect(() => {
    let interval!: number;
    if (isActive) {
      interval = window.setInterval(() => {
        updateTime();
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  return (
    <div className="stopwatch">
      <div className="stopwatch__numbers">
        <span>{`0${Math.floor(time / 3600000)}`.slice(-2)}:</span>
        <span>{`0${Math.floor((time / 60000) % 60)}`.slice(-2)}:</span>
        <span>{`0${Math.floor((time / 1000) % 60)}`.slice(-2)}</span>
      </div>
      <div className="buttons">
        {/*
         <button type="button" onClick={() => setIsActive(true)}>
          Start
        </button>
        <button type="button" onClick={() => setIsActive(false)}>
          Stop
        </button>
        

        <button type="button" onClick={() => setTime(0)}>
          Reset
        </button>
        */}
      </div>
    </div>
  );
}

export default Stopwatch;
