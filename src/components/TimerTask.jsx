import React, { useState } from 'react'

const TimerTask = () => {
    const [hrs,setHrs] = useState(0);
    const [mins,setMins] = useState(0);
    const [secs,setSecs] = useState(0);
    const [timerStoppedAt,setTimerStoppedAt] = useState([]);

  return (
    <div className='App'>
        <h1>
            {hrs<9 ? `0${hrs}` : hrs} : 
            {mins<9 ? ` 0${mins}` : mins} : 
            {secs<9 ? ` 0${secs}` : secs}
        </h1>
        <button>Pause</button> <button>Restart</button> <button>Stop</button> <button>Start</button>
    </div>
  )
}

export default TimerTask