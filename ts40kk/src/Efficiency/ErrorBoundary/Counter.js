import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        if(count === 15){
            throw new Error("App Damaged")
        }
    })
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button> 
        <button onClick={()=>setCount(count-1)}>Decrement</button> 
    </div>
  )
}
