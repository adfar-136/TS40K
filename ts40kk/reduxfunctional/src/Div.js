import React from 'react'
import { useSelector } from 'react-redux'

export default function Div() {
    const backgroundColor = useSelector((state)=>state.backgroundColor)
  return (
    <div style={{width:'400px',height:'400px',background:backgroundColor}}>
        <h1>Welcome to react last sessions</h1>
    </div>
  )
}
