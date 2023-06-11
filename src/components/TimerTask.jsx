import React, { useEffect, useState } from "react";

const TimerTask = () => {
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [timerStoppedAt, setTimerStoppedAt] = useState([]);
  const [isTimer, setIsTimer] = useState(false);

  const onStopTimer = () => {
    setIsTimer(false);
    let data = `${hrs <= 9 ? `0 ${hrs}` : hrs} : ${
      mins <= 9 ? `0 ${mins}` : mins
    }  : ${secs <= 9 ? `0 ${secs}` : secs}`;
    setTimerStoppedAt([...timerStoppedAt, data]);
    setSecs(0);
    setMins(0);
    setHrs(0)
  };

  const onPauseTimer = () => {
    setIsTimer(false);
  };

  const onTimerRestart = () => {
    setIsTimer(true);
  };

  useEffect(() => {
    let interval = null;
    if (isTimer) {
      interval = setInterval(() => {
        setSecs((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTimer]);

  useEffect(() => {
    if (secs > 60) {
      setMins((prev) => prev + 1);
      setSecs(0);
    }
  }, [secs]);

  useEffect(() => {
    if (mins > 60) {
      setHrs((prev) => prev + 1);
      setMins(0);
    }
  }, [mins]);

  return (
    <div className="App">
      <h1>
        {hrs < 9 ? `0${hrs}` : hrs} :{mins <= 9 ? ` 0${mins}` : mins} :
        {secs <= 9 ? ` 0${secs}` : secs}
      </h1>
      <button onClick={() => onPauseTimer()}>Pause</button>{" "}
      <button onClick={() => onTimerRestart()}>Restart</button>{" "}
      <button onClick={() => onStopTimer()}>Stop</button>{" "}
      <button onClick={() => setIsTimer(true)}>Start</button>
      <div>
        {timerStoppedAt.map((time, index) => {
          return (
            <ul key={index}>
              <li>{time}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default TimerTask;
