import React, { useState } from 'react'
import "./App.css"
import Themechanger from './components/Themechanger';
import Conditionalrendering from './components/Conditionalrendering';
export default function App() {
  const [condition,setCondition] = useState(true);
  
  function handleColor(){
    setCondition(!condition)
  }
  return (
    <>
    <div className={condition?"active":"not-active"} style={{backgroundColor:condition?"white":"black",color:condition?"black":"white"}}>
      <h1>Hello World!</h1>
      <button onClick={()=>(handleColor())}>{condition?"Dark":"Light"}</button>
      <Themechanger/>
      {-10 && (
        <h1>Hello Adfar</h1>
      )}
    </div>
    <Conditionalrendering/>
    </>
    
  )
}
