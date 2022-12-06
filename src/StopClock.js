import React, { useEffect, useState } from 'react'

const StopClock = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    console.log(("0" + ((30 / 10) % 100)).slice(-2))

    useEffect(() => {
        let interval;
        if (running) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10);
        } else if (!running) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [running]);
  return (
    <div className='app'>
        <div className="timer">
      
        <span>{("0" + Math.floor((time / 3600000 ) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="btt">
        {!running && time === 0 && (
          <button onClick={() => setRunning(true)}>Start</button>
        )}
        {running && time !==0 &&(
          <button onClick={() => setRunning(false)}>Stop</button>
        )}
        {!running && time >0 && (
          <button onClick={() => setRunning(true)}>Resume</button>
        )}
        {!running && time > 0 && (
           <button onClick={() => setTime(0)}>Reset</button>  
        )}
            
      </div>
    </div>
  )
}

export default StopClock