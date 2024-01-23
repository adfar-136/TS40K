import React, { useContext } from 'react'
import Comp3 from './Comp3'
import {name,lastName} from "../../App"
export default function Comp2() {
    const fName = useContext(name)
    const lName = useContext(lastName)
    console.log(fName)
  return (
    <div>
       <name.Consumer>
        {({state,setState})=>{
            return (
                <div>
                    <h1>{state}</h1>
                    <button onClick={()=>setState("Welcome")}>Change</button>
                </div>
            )
        }}
       </name.Consumer>
    </div>
  )
}
