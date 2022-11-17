import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Todo() {

return <Todos/>;

}

function Todos(){

    const[todolist, setTodoList] = useState([]);
    const onAddTodo = (todo) => {
        console.log('Parent todo', todo)
        setTodoList((prev)=>[...prev, todo])

    }

   
return(

        <div className='todo-card'>

        <TodoTitle/>
        
        <AddTodo onAddTodo = {onAddTodo}/>
        
        <TodoList todos = {todolist}/>
    

        <TodoFooter/>

        </div>    
);

}


function TodoTitle(){
    return(
        <div className='title'>
        <h1>To-Do-List</h1>
        </div>
    )
}

function AddTodo({onAddTodo}){

    const[todo, setTodo] = useState('');
    const handleTodo =(event)=>{
        const todoValue = event.target.value;

    setTodo((_) => todoValue)
    }

    const handleTodoAdd = () =>{
        onAddTodo(todo)
        setTodo((prev)=>'')
    }
    
    
    return(
        <div className='input'>
            <input type='text' placeholder='What will you do next?' onChange={handleTodo} value={todo}></input>
            <button onClick = {handleTodoAdd}>+</button>
        </div>
    )
}

function TodoList({todos}){
    return(
        <div className='todo-list' id='one'>
            {
            todos.map((todo, index) => (
                <div key={index}>{todo}</div>
             )) 
            }
        </div>
    );
}

function TodoFooter(){



    return(
        <div className='footer'>
            <div className='pending-task' id='one'>
                You have 3 pending task.
            </div>
            <div>
                <button className='btn'>Clear all</button>
            </div>

        </div>
    )
}



export default Todo;