import React, { useState } from 'react'
function Comp1(){
    return <h1>Hello Component1</h1>
}
function Comp2(){
    return <h1>Hello Component2</h1>
}
function Conditionalrendering() {
    const [condition,setCondition] = useState(true);
    const handleToggle = ()=>{
        setCondition(!condition)
    }
   return <>
      <h1>Hello Element</h1>
      <button onClick={handleToggle}>Toggle</button>
      {condition ? <Comp1/>:<Comp2/>}
      {condition && <Comp1/>}
   </>
    
  
}

export default Conditionalrendering