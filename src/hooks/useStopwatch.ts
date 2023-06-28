import { useState, useEffect } from "react";

interface Time {
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
}

export const formatTime = (milliseconds: number) => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  minutes %= 60;
  seconds %= 60;

  return {
    milliseconds,
    seconds,
    minutes,
    hours,
  };
};

export const convertTimeToString = (time: Time): string => {
  const { seconds, minutes, hours } = time;
  return [hours, minutes, seconds].map((t) => `0${t}`.slice(-2)).join(":");
};

export const useStopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const stop = () => {
    setIsRunning(false);
    setTime(0);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const play = () => {
    setIsRunning(true);
  };

  const reset = () => {
    setIsRunning(true);
    setTime(0);
  };

  const updateTime = (newTime: number) => {
    setTime(newTime);
  };

  useEffect(() => {
    let interval!: number;
    if (isRunning) {
      interval = window.setInterval(() => {
        setTime((time) => time + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return {
    time: formatTime(time),
    timeString: convertTimeToString(formatTime(time)),
    isRunning,
    updateTime,
    stop,
    pause,
    play,
    reset,
  };
};
