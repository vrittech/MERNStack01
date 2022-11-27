import { useContext, useReducer, useRef, useState } from "react";
import { Modal } from "../../container/Modal";
import { TodoContext } from "../../context/TodoContext";
import { TodoController } from "./reducer/todoReducer";

function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
}

function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const { completeTodos, deleteTodo, editTodo } = useContext(TodoContext);
  const [value, setValue] = useState({});

  const showModal = (todo) => {
    setValue(todo);
    setIsEditing(true);
  };

  const submitEdit = (event) => {
    if (event.key === "Enter") {
      editTodo({ todo: value.title, id: value.id });
      setIsEditing(false)
      setValue({})
    }
  };
  
  return (
    <>
      <div
        onClick={() => completeTodos(todo.id)}
        style={
          todo.completed
            ? { textDecoration: "line-through", cursor: "pointer" }
            : { cursor: "pointer" }
        }
      >
        {todo.title}
      </div>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => showModal(todo)}>Edit</button>
      {isEditing && (
        <div>
          <input
            placeholder="Edit Me!"
            value={value.title}
            onChange={(event) =>
              setValue((current) => {
                return { ...current, title: event.target.value };
              })
            }
            onKeyDown={(event) => submitEdit(event)}
          />
        </div>
      )}
    </>
  );
}

export default TodoList;
