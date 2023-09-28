// import React, { useState, useEffect } from "react";
// import '../App.css'
// const Stopwatch = () => {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let intervalId;
//     if (isRunning) {
//       intervalId = setInterval(() => setTime(time + 1), 1000); 
//     }
//     return () => clearInterval(intervalId);
//   }, [isRunning, time]);

//   const startAndStop = () => {
//     setIsRunning(!isRunning);
//   };
  
//   const reset = () => {
//     setTime(0);
//   };

//   return (
//     <div className="stopwatch-container">
//         <h2>Game Timer</h2>
//       <p className="stopwatch-time">{time}</p>
//       <div >
//         <button onClick={startAndStop}>
//           {isRunning ? "Stop" : "Start"}
//         </button>
//         <button onClick={reset}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Stopwatch;
import React, {useState, useEffect, useRef} from 'react'
import './Stopwatch.css'

const Stopwatch = () => {
  const [lapse, setLapse] = useState(0)
  const [running, setRunning] = useState(false)
  let intervalRef = useRef(null)

  useEffect(() => {
    //runs when the component mounts (aka on initialization)

    // the return below will run when the compoenent unmounts
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  //dependency array -- when the values in here chnage, the code inside of the useEffect hook will run again -- this is the component did update portion of the life cycle

  const handleResetClick = () => {
    //I want this to make our clock stop
    clearInterval(intervalRef.current)

    //reset state to initial value
    setLapse(0)
    setRunning(false)
  }

  const handleStartClick = () => {
    //Need to check if the clock is running
    if(running){
      //stop the clock by allowing the user to pause
      // clock: state = true
      clearInterval(intervalRef.current)
    }
    else{
      //start the clock: state = false
      let startTime = Date.now() - lapse;
      console.log('this is the start time: ', startTime)

      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime)
      },0)

  
    }
    setRunning(!running)
  }
  
  const convertToTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`;
  };

  
  
  
  
  return (
    <div>
      <div>
      <h3 className='game-timer'>Game Timer</h3>
      <label className='time'>{convertToTime(lapse)}</label>

      </div>
      <div>

      <button onClick={handleStartClick}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={handleResetClick}>Clear</button>
      </div>
    </div>
  )
}

export default Stopwatch
