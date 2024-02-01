import React, { useState } from 'react'
import "./App.css"
import SideNav from './SideNav'
import MainSection from './MainSection'
export default function App() {
  const [active,setActive] = useState("INBOX")
  return (
    <div className='container'>
      <h1>Adfar's Todo Application</h1>
      <div className="row">
         <div className="item item1">
           <SideNav change={setActive}/>
         </div>
         <div className='item item2'>
            <MainSection active={active}/>
         </div>
      </div>
    </div>
  )
}
