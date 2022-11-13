import { useState } from "react";
function App() {
  const [message, setMessage] = useState('Hello World')
  return (
    <>
    <h1> 
      {message}
    </h1>
    <button onClick={() => setMessage('Button Clicked')}>Click Me!</button>
    </>
  )
}

export default App;
