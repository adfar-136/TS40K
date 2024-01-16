import React from 'react'
import style from "./Component1.module.css"
function Component1() {
  return (
    <div className={style["main-section"]}>
        <h1 className={style.heading1}>I am Component1</h1>
        <p className={style.para1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore velit, harum perspiciatis sit eos commodi eaque ad! Explicabo, mollitia quis veniam dignissimos veritatis repudiandae minima.</p>
    </div>
  )
}

export default Component1