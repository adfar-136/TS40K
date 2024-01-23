import React, { useContext } from 'react'
import { MyContext } from './StateProvider'
export default function Test() {
    const {count,setCount,number,setNumber} = useContext(MyContext)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Changgeee</button>
    </div>
  )
}
