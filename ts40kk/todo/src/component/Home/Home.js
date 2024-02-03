import React from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"
export default function Home() {
  return (
    <div className={style.navbar}>
        <div>
            Todo Application
        </div>
        <ul>
            <li>
                <Link to="/">Home</Link>  
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
               <Link to="/signin">SignIn</Link>
            </li>
        </ul>
    </div>
  )
}
