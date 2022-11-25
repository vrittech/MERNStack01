import { useReducer } from "react";
import TodoList from "./TodoList";

//Action has two properties
// 1) Type = what action to perform
// 2) Payload = data

//What is reducer -> Reducer is just like a dispatcher
// Reducer 
// Reducer is responsible for chaning the store/state

// useReducer 
// Flux Pattern
function Todo() {


 
  return (
    <>
     
      <TodoList/>
    </>
  );
}

export default Todo;
