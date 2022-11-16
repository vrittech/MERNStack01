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
import "./App.css";
import { useState } from "react";
function App() {
  return <Todos />;
}

function Todos() {
  const AppTitle = "TodoApp";
  const [todoList, setTodoList] = useState(["Buy a pen", "Read a  Book"]);

  const onAddTodo = (todo) => {
    setTodoList((prev) => [...prev, todo])
  }

  return (
    <div className="todo-card" style={{
      backgroundColor: 'red',color : 'blue'
    }}>
      <TodoTitle title={AppTitle} />
      <AddTodo addTodo={onAddTodo} />
      <TodoList todos={todoList} />
      <br />
      <TodoFooter />
    </div>
  );
}

function TodoTitle({ title }) {
  return <div className="todo-card title">{title}</div>;
}

function AddTodo({addTodo}) {
  console.log("Add Rerender")

  const [todo, setTodo] = useState('');

  const handleTodo = (event) => {
    const todoValue = event.target.value;
  
    setTodo((_) => todoValue)
  }

  const handleTodoAdd = () => {
    addTodo([...todo])
    
    setTodo((_) => "")
  }

  return (
    <div className="todo-card add-todo">
      <input placeholder="Add your new Todo" onChange={handleTodo} value={todo} />
      <button onClick={handleTodoAdd}>+</button>
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <div className="todo-card todo-list">
      {todos.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
    </div>
  );
}

function TodoFooter() {
  return (
    <div className="todo-card todo-footer">
      <div className="todo-card pending-tasks">You have 4 pending tasks</div>
      <div>
        <button>Clear All</button>
      </div>
    </div>
  );
}
export default App;
