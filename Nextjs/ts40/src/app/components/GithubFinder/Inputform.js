"use client"
import React, { useState } from 'react'

export default function Inputform({fetchData}) {
    const [username,setUsername] = useState("")
    const handleSubmit =(e)=>{
     e.preventDefault()
     fetchData(username)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} placeholder='Enter Github UserName'
            onChange={(e)=>setUsername(e.target.value)}/>
            <input type="submit" value="Find" />
        </form>
    </div>
  )
}
