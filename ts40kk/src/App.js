import React, { useState } from 'react'

function App() {
  // const [input,setInput] = useState("");
  // const [password,setPassword] = useState("");
  // const [email,setEmail] = useState("");

  const [condition,setCondition]  =useState(false);
  const [list,setList] = useState({
    name:"",
    email:"",
    password:""
  })
  function handleSubmit(e){
    e.preventDefault();
    setCondition(true);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"  value={list.name} onChange={(e)=>setList({name:e.target.value})}/>
        <input type="password"  value={list.password} onChange={(e)=>{setList({password:e.target.value})}}/>
        <input type="email" value={list.email} onChange={(e)=>setList({email:e.target.value})} />
        <input type="submit" value="Submit" />
        {condition && (
          <>
            <h1>Your Name is:{list.name}</h1>
          <h1>Your Password is:{list.password}</h1>
          <h1>Your Email is:{list.email}</h1>
          </>
        
        )}
        
      </form>
    </div>
  )
}

export default App