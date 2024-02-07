import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADDTODO, REMOVETODO } from './Reduxstore/action';

export default function Todo() {
    const todo = useSelector((state)=>state.todo)
    const [todoText,setTodoText] = useState("");
    const dispatch = useDispatch()
    const handleTodo =()=>{
           dispatch(ADDTODO(todoText));
           setTodoText("")
    }
    const handleRemove=(id)=>{
        console.log(id)
        dispatch(REMOVETODO(id))
    }
  return (
    <div>
        <h1>Todo Application</h1>
        <input type="text" 
        value={todoText} onChange={(e)=>{setTodoText(e.target.value)}}/>
        <button onClick={handleTodo}>Add Task</button>
        <ul>
            {todo.map((item,index)=>(
                <li>
                  {item}
                  <button onClick={()=>handleRemove(index)}>Remove Item</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
