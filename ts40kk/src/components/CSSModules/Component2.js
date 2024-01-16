import React from 'react'
import mystyle from "./Component2.module.css";
import stylee from "./Component1.module.css"
function Component2() {
  return (
    <div>
        <h1 className={stylee.heading1}>adfar</h1>
        <h1 className={mystyle.heading2}>I am component2</h1>
        <p className={mystyle.para2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, facilis magni. Cum, corrupti vitae ullam a nulla natus, blanditiis omnis consectetur repudiandae aperiam, accusantium debitis!</p>
    </div>
  )
}

export default Component2