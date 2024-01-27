import React from 'react'
import { useState } from 'react'

export default function App() {
  const [inputs,setInputs] = useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange=(e)=>{
     const {name,value} = e.target;
     setInputs({...inputs,[name]:value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    // localStorage.setItem("userInfo",JSON.stringify(inputs))
    localStorage.setItem("name",inputs.name)
    localStorage.setItem("email",inputs.email)
    localStorage.setItem("pass",inputs.password)
    setInputs({name:"",email:"",password:""})
  }
  const handleRemove=()=>{
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("pass")
  }
  return (
    <div>
    
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputs.name} name='name'
          onChange={handleChange}/> <br /><br />
          <input type="email" value={inputs.email} name='email'
          onChange={handleChange}/><br/> <br />
          <input type="password" value={inputs.password} name='password'
          onChange={handleChange}/> <br /> <br />
          <input type="submit" value="SignUp" />
        </form>
        <button onClick={handleRemove}>Remove</button>
        {localStorage.getItem("name") && (
          <h1>Name :{localStorage.getItem("name")}</h1>
        )}
   
     
      
    </div>
  )
}
