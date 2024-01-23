import React from 'react'
import { name,lastName } from '../../App'
export default function Comp3() {
  return (
    <div>
        <name.Consumer>
            {(fName)=>{
                return (
                    <lastName.Consumer>
                        {(lName)=>{
                            return (
                                <div>
                                    <h1>i am {fName}</h1>
                                    <h1>i love {lName}</h1>
                                </div>
                            )
                        }}
                    </lastName.Consumer>
                )
            }}
        </name.Consumer>
    </div>
  )
}
