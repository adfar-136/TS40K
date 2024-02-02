import React from 'react'

export default function Next7Days({list}) {
    const date = new Date();
    const filteredList = list.filter((item)=>{
        const diffTime = item.date - date;
        const diffDay = Math.ceil(diffTime/(24*60*60*1000));
        if(diffDay >= 0 && diffDay < 8){
            return true
        }
    })
  return (
    <div className='inbox'>
        <h1>Next 7 Days Todo Tasks</h1>
     {filteredList.map((item)=>{
        return <div key={item.number} className='inner-items'>
        <li>{item.title} {item.date.toLocaleDateString()}</li>
    </div>
       })}
    </div>
  )
}
