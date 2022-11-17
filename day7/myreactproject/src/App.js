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


// Hook 
// useEffect -> Effect
// 
import "./App.css";
import { useEffect, useRef, useState } from "react";
function App() {
  return <Todos />;
}

function Todos() {
  const AppTitle = "TodoApp";
  const [todoList, setTodoList] = useState([
    {
      title: "Read a book",
      striked: true,
    },
    {
      title: "Drink water",
      striked: false,
    },
  ]);

  const [counter, setCounter] = useState(0)
 
 
 useEffect(() => {
  console.log("A")
  const interval = setInterval(() => {
    setCounter((prev) => prev + 1)
  }, 1000)

  return () => {
  
    clearInterval(interval)
  }
  
 },[todoList])

  const onAddTodo = (todo) => {
    setTodoList((prev) => {
     
      const newState = [...prev, todo];
     
      return newState;
    });
  };

  const changeTodoStrike = (index) => {
    const newTodoList = todoList.map((todo, idx) => {
      if (index === idx) {
        return { ...todo, striked: !todo.striked };
      }
      return todo;
    });
    setTodoList((prev) => [...newTodoList]);
  };

  const removeAllTodo = () => {
    setTodoList((_) => []);
  };

  return (
    <div
      className="todo-card"
      style={{
        backgroundColor: "red",
        color: "blue",
      }}
    >
      <TodoTitle title={AppTitle} />
      <AddTodo addTodo={onAddTodo} />
      <TodoList todos={todoList} onClickTodo={changeTodoStrike} />
      <br />
      <TodoFooter clearTodo={removeAllTodo} />
      <p style={{textAlign : 'center', fontSize : '40px'}}>{counter}</p>
    </div>
  );
}

function TodoTitle({ title }) {
  return <div className="todo-card title">{title}</div>;
}

function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");

  const inputRef = useRef();

  const handleTodo = (event) => {
    const todoValue = event.target.value;

    setTodo((_) => todoValue);
  };

  const handleTodoAdd = () => {
    // console.log(inputRef.current.value)
    addTodo({
      title: todo,
      striked: false,
    });
    // inputRef.current.value = ""
    setTodo((_) => "");
  };

  return (
    <div className="todo-card add-todo">
      <input
        placeholder="Add your new Todo"
        onChange={handleTodo}
        value={todo}
      />
      

      {/* <input placeholder="Add your new Todo" ref={inputRef} /> */}
      <button onClick={handleTodoAdd}>+</button>
    </div>
  );
}

function TodoList({ todos, onClickTodo }) {
  const crossTodo = (index) => {
    onClickTodo(index);
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Todo List</h2>
      <div className="todo-card todo-list">
        {todos.map((todo, index) => (
          <div
            key={index}
            style={
              todo.striked
                ? { cursor: "pointer", textDecoration: "red line-through" }
                : { cursor: "pointer" }
            }
            onClick={() => crossTodo(index)}
          >
            {todo.title}
          </div>
        ))}
      </div>
    </>
  );
}

function TodoFooter({ clearTodo }) {
  return (
    <div className="todo-card todo-footer">
      <div className="todo-card pending-tasks">You have 4 pending tasks</div>
      <div>
        <button onClick={clearTodo}>Clear All</button>
      </div>
    </div>
  );
}
export default App;

/*
1) Ecommerce : Product Management, Cart, Checkout, Search, Auth, Dashboard
2) HR System : Attendance, Payroll, Auth, Dashbaord, Search
3) Library Management System : Book Record Keeping, Checkin/Checkout, Login Logout, Dashboard, Search
4) Chat App : Websocket
*/
