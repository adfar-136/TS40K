import React from 'react'
import { useDispatch } from 'react-redux'
import { setBackgroundColor } from './colorstore/action'

export default function Button() {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(setBackgroundColor("red"))}>Red</button>
        <button onClick={()=>dispatch(setBackgroundColor("yellow"))}>yellow</button>
        <button onClick={()=>dispatch(setBackgroundColor("green"))}>green</button>
        <button onClick={()=>dispatch(setBackgroundColor("khaki"))}>khaki</button>
        <button onClick={()=>dispatch(setBackgroundColor("orange"))}>orange</button>
        <button onClick={()=>dispatch(setBackgroundColor("aqua"))}>aqua</button>
        <button onClick={()=>dispatch(setBackgroundColor("pink"))}>pink</button>
        <button onClick={()=>dispatch(setBackgroundColor("black"))}>black</button>
        
    </div>
  )
}
