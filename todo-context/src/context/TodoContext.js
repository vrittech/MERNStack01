import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

function TodoProvider(props) {
  const [todos, setTodos] = useState([]); //Store
  
  const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  };

  const setCompleted = (id) => { //Action
   
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setCompleted }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
