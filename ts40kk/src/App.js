import React, { useState,useEffect } from 'react'

export default function App() { 
  const [ timer,setTimer] = useState(0);
  useEffect(()=>{
     setTimeout(()=>{
      setTimer(new Date().toLocaleString())
     },1000)
  },[timer])
  return (
    <div>
      {timer}
    </div>
  )
}
