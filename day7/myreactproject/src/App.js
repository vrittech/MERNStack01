// 1) Library
// 2) Component Based
// 3) React apps are driven by state(data)
// 4) React encourages us to JSX instead of HTML

import {
  createContext,
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import useFetch from "./hooks/useFetch";
import { MyContext } from "./MyContext";
import Todos from "./Todo";

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

// Hook
// useEffect -> Effect
//

// custom Hook

// global state management
// Context

// useReducer, dispatch

//Library installation

// React Router

// Flux and Redux Architecture
// Redux/Redux Toolkit -> Slice -> Reducer, Action dispatcher, store

// React best practices
// useCallback, useMemo

import "./todo.css";


function App() {
  const [loading, todos] = useFetch();
  const [display, setDisplay] = useState("abc");
  return (
    <MyContext.Provider value={display}>
      <button onClick={() => setDisplay("123")}>Change </button>
      <div
        style={{
          display: "flex",
          margin: "10px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {loading ? "Loading" : <Todos todos={todos} />}
      </div>
    </MyContext.Provider>
  );
}

// function Todos({ todos }) {
//   const myTodo = useContext(TodoContext)
//   console.log(myTodo)
//   return (
//     <>
//       {todos.map((todo) => (
//         <Todo todo={todo} key={todo.id}/>
//       ))}
//     </>
//   );
// }

// function Todo({todo}){
// return (
//   <div className="todo"  style={todo.completed ? {textDecoration : "red line-through"} : {}}>{todo.title}</div>
// )
// }

// const Input = forwardRef((props, ref) => {
//   return (
//     <input ref={ref} {...props} />
//   )
// })

export default App;
