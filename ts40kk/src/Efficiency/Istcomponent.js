import React, { useState } from 'react'

function Istcomponent({name,fun}) {
    console.log("FIrts child component");
    const [number,setNumber] = useState(1000);
   

  return (
    <div>
        {name}
  <h1>Number:{number}</h1>
  <button onClick={()=>setNumber(number-1)}>Increment number</button>
        <h1>First component</h1>
        <p>adfargdfjd</p>
        <p>adfargdfjd</p>
        <p>adfargdfjd</p>
        <p>adfargdfjd</p>
        <p>adfargdfjd</p>
    </div>
  )
}
export default React.memo(Istcomponent)
