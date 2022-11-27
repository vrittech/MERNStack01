import { useContext, useReducer, useRef } from "react";
import { TodoContext } from "../../context/TodoContext";
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
  const todoRef = useRef()
  const {addTodo} = useContext(TodoContext)

  const handleAddTodo = () => {
    addTodo(todoRef.current.value); 
    todoRef.current.value=''
  }
 
  return (
    <>
      <input placeholder="Create todo...."  ref={todoRef} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList/>
    </>
  );
}

export default Todo;
