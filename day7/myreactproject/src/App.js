// 1) Library
// 2) Component Based
// 3) React apps are driven by state(data)
// 4) React encourages us to JSX instead of HTML

// Component -> If that function returns JSX
// Component is a piece of UI

// Rerender react app
// State Change or props change

// What is state ?
// water -> liquid, solid, gas
// component -> state
// state -> hold data // integer, string, object, array
// state changes UI rerender render
// hook
// hook simple function that does or holds data for us
// useState()
// How to use

// Make a component that have initial state as 0
// A button when clicked increases the state by 1
// A button when clicked decreases the state by 1
// make a element that shows the state

import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  const handleClickInc = () => {
    setCounter((prevValue) => {
      return prevValue + 1;
    });
  };

  const handleClickDec = () => {
    setCounter((prevValue) => {
      return prevValue - 1;
    });
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleClickInc}>Increase</button>
      <button onClick={handleClickDec}>Decrease</button>
    </>
  );
}

export default App;
