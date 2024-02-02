import React, { useRef, useState } from 'react'

export default function Inbox({list,append}) {
    const titleRef = useRef()
    const dateRef = useRef()
    const [newTask,setNewTask] = useState(false)
    const handleTask=(e)=>{
       e.preventDefault();
       const newObj = {
        number:list.length+1,
        title:titleRef.current.value,
        date:new Date(dateRef.current.value)
       }
       append(newObj);
       setNewTask(false);

    }
  return (
    <div className='inbox'>
     <div className='top-conatiner'>
        <br />
        {!newTask && (
            <button className='btn' onClick={()=>setNewTask(true)}>Add</button>
        )}
        {newTask && (
            <form className='form'>
                <input type="text" ref={titleRef}/>
               <div>
                  <button onClick={(e)=>handleTask(e)} className='btn'>Add New Task</button>
                  <button className='btn' onClick={()=>setNewTask(false)}>Cancel</button>
                  <input type="date" ref={dateRef} defaultValue="2024-04-10"/>
               </div>
            </form>
        )}
    </div>
    <div className="items">
            {list.map((item,index)=>{
                return (
                    <div key={item.number} className='inner-items'>
                        <li>{item.title} {item.date.toLocaleDateString()}</li>
                    </div>
                )
            })}
        </div>
    </div>
    
  )
}
