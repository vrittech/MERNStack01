import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodos, fetchAllTodos } from "./todoSlice";

export default function Todo() {
  const { loading, todos } = useSelector((state) => {
   
    return state.todos;
  });
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(completeTodos(id));
  };

  useEffect(() => {
    dispatch(fetchAllTodos({id : 1,name: "sushil"}));
  }, [dispatch]);

  return loading ? (
    <div>Loading</div>
  ) : (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
              onClick={() => handleClick(todo.id)}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}
