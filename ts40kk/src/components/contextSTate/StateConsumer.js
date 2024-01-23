import React, { useContext } from 'react'
import { MyContext } from './StateProvider'
export default function StateConsumer() {
    const x = useContext(MyContext)
    console.log(x)
  return (
    <div>
      <MyContext.Consumer>
        {({count,setCount,number,setNumber})=>{
            console.log(x)
            return (
                <div>
                    <h1>{count}</h1>
                    <button onClick={()=>setCount(count+1)}>Increment</button>
                </div>
            )
        }}
      </MyContext.Consumer>
    </div>
  )
}

