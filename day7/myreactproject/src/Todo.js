



import { useContext } from 'react';
import { MyContext } from './MyContext';
import './todo.css'



function Todos({ todos }) {
    const display = useContext(MyContext)
  
  return (
    <>
    <div>{display}</div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id}/>
      ))}
    </>
  );
}

function Todo({todo}){
    const display = useContext(MyContext)
    console.log("Todo Display", display)
return (
  <div className="todo"  style={todo.completed ? {textDecoration : "red line-through"} : {}}>{todo.title}</div>
)
}



export default Todos;



 

