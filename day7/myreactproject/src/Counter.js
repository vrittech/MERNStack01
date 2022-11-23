import "./counter.css";
import {useContext, useState} from 'react'
import useCountdown from "./hooks/useCountdown";
function Counter() {
  const [startTimer, setStartTimer] = useState("0");

  const [counter, finishCountdown ] = useCountdown({startTimer})
 
  return (
    <>
      <div className="counter">
        <input
          onChange={(event) => setStartTimer(parseInt(event.target.value))}
          placeholder="Enter start value"
        />
        <div>{counter}</div>
        {finishCountdown && counter === 0 ? <div>Countdown finish!</div> : <></>}
      </div>
    </>
  );
}

export default Counter;
