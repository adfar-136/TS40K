import React, { useState } from 'react'
import useList from './useList';

export default function Todoo() {
    const [input,setInput] = useState("");
    const {list,push,pull} = useList();
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(input.length > 0){
            push(input)
        } else {
            alert('please type to add')
        }
        setInput("")
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} 
            onChange={(e)=>setInput(e.target.value)}/>
            <input type="submit" value="ADD" />
        </form>
        <ul>
            {list.map((item,index)=>
            <>
              <li key={index}>{item}</li>
              <button onClick={()=>pull(index)}>Remove</button>
            </>)}
        </ul>

    </div>
  )
}
