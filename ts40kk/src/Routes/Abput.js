import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Abput() {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/contact')
  }
  
  return (
    <div>
        <h1>About</h1>
        <button onClick={handleClick}>Go to Contact</button>
    </div>
  )
}
