"use client"
import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(1000)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}
