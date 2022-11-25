import { useContext, useEffect, useReducer } from "react";
import { TodoContext } from "../../context/TodoContext";
import { TODO_ACTIONS } from "./actions/todoAction";
import { TodoController } from "./reducer/todoReducer";
import { initialState } from "./store";

function TodoList() {
 const [todos, dispatch] = useReducer(TodoController, initialState)

 const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  dispatch({type: TODO_ACTIONS.ADD_TODOS, payload : data})
};

useEffect(() => {
  fetchTodos();
}, []);

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}

function Todo({ todo, dispatch }) {
  
  return (
    <div
    onClick={() => dispatch({type : TODO_ACTIONS.COMPLETE_TODO, payload: todo.id})}
      style={
        todo.completed
          ? { textDecoration: "line-through", cursor: "pointer" }
          : { cursor: "pointer" }
      }
    >
      {todo.title}
    </div>
  );
}

export default TodoList;
