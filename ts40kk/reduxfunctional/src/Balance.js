import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { depositMoney, withdrawMoney } from './thunkStore/action'

export default function Balance() {
    const amount = useSelector((state)=>state.amount)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Your balance is:{amount}</h1>
        <button onClick={()=>dispatch(depositMoney(1000))}>+</button>
        <button onClick={()=>dispatch(withdrawMoney(1000))}>-</button>
        <button onClick={()=>dispatch(depositMoney(10000))}>++</button>
        <button onClick={()=>dispatch(withdrawMoney(1000000))}>---</button>
    </div>
  )
}
