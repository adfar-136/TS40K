import React from 'react'

export default function Today({list}) {
    const date = new Date() 
    const filteredList = list.filter((item)=>{
     if(date.getFullYear() !== item.date.getFullYear()){
        return false;
     }
     if(date.getMonth() !== item.date.getMonth()){
         return false
     }
     if(date.getDate() !== item.date.getDate()){
        return false
     }
     return true;
    })
  return (
    <div className='inbox'>
        <h1>Today's Todo Task</h1>
       {filteredList.map((item)=>{
        return <div key={item.number} className='inner-items'>
        <li>{item.title} {item.date.toLocaleDateString()}</li>
    </div>
       })}
    </div>
  )
}
