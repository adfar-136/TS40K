import React, { useState } from 'react'

import "./App.css"
import TvCard from './TvCard'
export default function Tvlist({series}) {
    const [sortOrder,setSortOrder] = useState('asc')
    const sortedMovies = [...series].sort((a,b)=>{
      if(sortOrder === "asc"){
        return a.vote_count - b.vote_count
      } else{
        return b.vote_count - a.vote_count
      }
    })
    const handleSort =()=>{
        setSortOrder((prev)=>(prev === "asc"?"desc":"asc"))
    }
  return (
    <div >
        <div>
            <button onClick={handleSort}>
                Sort by vote average ({sortOrder==="asc"?"Ascending":"Descending"})
            </button>
            
        </div>
        <ul className='movielist'>
            {sortedMovies.map((tv)=>
            <TvCard  key={tv.id} tv = {tv}/>)}
        </ul>
    
    </div>
  )
}
