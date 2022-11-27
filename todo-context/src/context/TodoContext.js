import { createContext, useEffect, useReducer, useState } from "react";
import { TODO_ACTIONS } from "../components/Todo/actions/todoAction";
import { TodoController } from "../components/Todo/reducer/todoReducer";
import { initialState } from "../components/Todo/store";

export const TodoContext = createContext([]);

function TodoProvider(props) {
  const [todos, dispatch] = useReducer(TodoController, initialState);

  const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    dispatch({ type: TODO_ACTIONS.ADD_TODOS, payload: data });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const completeTodos = async (id) => {
    dispatch({ type: TODO_ACTIONS.COMPLETE_TODO, payload: id });
  };

  const addTodo = (todo) => {
    dispatch({ type: TODO_ACTIONS.ADD_TODO, payload: todo });
  };

  const deleteTodo = (id) => {
    dispatch({ type: TODO_ACTIONS.DELETE_TODO, payload: id });
  };

  const editTodo = ({ todo, id }) => {
    dispatch({ type: TODO_ACTIONS.EDIT_TODO, payload: { title: todo, id } });
  };
  
  return (
    <TodoContext.Provider
      value={{ todos, completeTodos, addTodo, deleteTodo, editTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
