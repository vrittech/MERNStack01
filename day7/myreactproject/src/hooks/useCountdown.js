import { useEffect, useRef, useState } from "react";

function useCountdown({ startTimer }) {
  const counter = useRef(10);
  const [stateCounter, setStateCounter] = useState(0)
  const [finishCountdown, setFinishCountDown] = useState(false);

  useEffect(() => {
    counter.current = startTimer
    setStateCounter(startTimer)
  }, [startTimer]);

  useEffect(() => {
    if (typeof counter.current !== "number") {
      return;
    }
    
    if (counter.current === 0) {
      setFinishCountDown(true);
      return;
    }

    const timer = setInterval(() => {
      counter.current = counter.current - 1
      setStateCounter((current) => current - 1)
    }, 1000);

   
    return () => {
        return clearInterval(timer)
    };
  }, [stateCounter]);

  return [ counter.current, finishCountdown];
}

export default useCountdown;
