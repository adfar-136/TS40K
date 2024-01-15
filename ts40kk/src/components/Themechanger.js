import React, { useState } from 'react'
function Themechanger() {
    const [text,setText] = React.useState("Dark");
    const [current,setCurrent] = useState("not-active");
    const handleClass=()=>{
        if(text === "Dark"){
            setText("Light")
            setCurrent("active")
        } else {
          setText("Dark");
          setCurrent("not-active")
        }
    }
  return (
    <div className={current}>
        <h1>Hello World</h1>
        <button onClick={()=>handleClass()}>{text}</button>
    </div>
  )
}

export default Themechanger