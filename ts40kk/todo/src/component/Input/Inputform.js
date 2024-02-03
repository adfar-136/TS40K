import React from 'react'
import mystyle from "./input.module.css"
export default function Inputform(props) {
  return (
    <div className={mystyle.inputform}>
        {props.label &&  <label>{props.label}</label>}
        <input {...props}/>
    </div>
  )
}
