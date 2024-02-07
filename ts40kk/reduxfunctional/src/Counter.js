import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './Reduxstore/action'
export default function Counter() {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
    const handleIncrement = ()=>{
        dispatch(increment())
    }
    const handleDecrement = ()=>{
        dispatch(decrement())
    }
  return (
    <div>
        <button onClick={handleIncrement}>Increment</button>
         <h1>{count}</h1>
        <button onClick={handleDecrement}>Decrement</button>

    </div>
  )
}
