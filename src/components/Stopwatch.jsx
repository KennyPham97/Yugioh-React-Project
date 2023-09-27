import React, { useState, useEffect } from "react";
import '../App.css'
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 1000); 
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };
  
  const reset = () => {
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
        <h2>Game Timer</h2>
      <p className="stopwatch-time">{time}</p>
      <div >
        <button onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;

// import React, { useState, useEffect } from "react";
// import '../App.css'

// const Stopwatch = () => {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let intervalId;
//     if (isRunning) {
//       intervalId = setInterval(() => setTime(prevTime => prevTime + 1), 1000); 
//     }
//     return () => clearInterval(intervalId);
//   }, [isRunning]);

//   const startAndStop = () => {
//     setIsRunning(!isRunning);
//   };
  
//   const reset = () => {
//     setTime(0);
//   };
//   const minutes = Math.floor(time / 60).toString().padStart(2, "0");
//   const seconds = (time % 60).toString().padStart(2, "0");

//   return (
//     <div className="stopwatch-container">
//       <h2>Game Timer</h2>
//       <p className="stopwatch-time">{`${minutes}:${seconds}`}</p>
//       <div>
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
