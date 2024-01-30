import React, { useState } from 'react'
import Modal from './Modal'

export default function App() {
  const [condition,setCondition] = useState(false)
  return (
    <div>
      <h1>Home Page</h1>
      <div id="container">
        
      </div>
      <button onClick={()=>setCondition(true)}>Show Modal</button>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, consequatur est. Omnis unde autem sapiente sed cupiditate facere maxime sunt doloribus, deserunt quaerat, repudiandae id et numquam. Neque, repellendus voluptate.</p>
      <div>
       <Modal condition={condition}>
        <div>
          <h1>Modal component</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe tempora vitae provident delectus, animi adipisci, amet reiciendis earum quia illo aspernatur dolores quibusdam porro necessitatibus odit illum voluptatibus itaque dignissimos totam consequatur sapiente praesentium in et? Asperiores ullam sapiente earum.</p>
        </div>
       </Modal>
      </div>
    </div>
  )
}
