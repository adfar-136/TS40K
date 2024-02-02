import React, { useState } from 'react'
import Inbox from './Inbox'
import Today from './Today'
import Next7Days from './Next7Days'
const list = [
  {number:1,title:"Let's Complete React",date:new Date("02/02/2024")},
  {number:2,title:"sleep at 9PM",date:new Date("04/20/2024")},
  {number:3,title:"stop watching reels",date:new Date("03/07/2024")},
]
export default function MainSection({active}) {
  const [filteredList,setFilteredList] = useState(list);
  const addToList = (obj)=>{
    list.push(obj)
    setFilteredList(list)
  }
  return (
    <div>
      {active === "INBOX" && (
        <Inbox list={filteredList} append={addToList}/>
      )}
      {active === "TODAY" && (
        <Today list={filteredList}/>
      )}
      {active === "NEXT7DAYS" && (
        <Next7Days list={filteredList}/>
      )}
    </div>
  )
}
