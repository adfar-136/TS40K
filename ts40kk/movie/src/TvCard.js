import React, { useEffect, useState } from 'react'
import {FaHeart,FaRegHeart} from "react-icons/fa"
export default function TvCard({tv}) {
    
    const {id,poster_path,name,first_air_date,vote_count,vote_average}= tv;
    const [isFavorite,setIsFavorite] = useState(
        JSON.parse(localStorage.getItem('favoriteSeries'))?.some(([_,movieId])=>movieId === id) || false
    )
  const toggleFavorite =()=>{
    setIsFavorite((prev)=>!prev)
  }
  useEffect(()=>{
    const favSeries =JSON.parse(localStorage.getItem("favoriteSeries")) || []
    if(isFavorite){
         localStorage.setItem('favoriteSeries', JSON.stringify([...favSeries, [name,id]]))
    } else {
        localStorage.setItem('favoriteSeries',
        JSON.stringify(favSeries.filter(([_,tvId])=>tvId !== id)))
    }
  },[isFavorite,name,id])
  return (
    <div>
        <li className='card'>
            <img className='poster' height="150" width="150" src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt='title'/>
            <h1 className='title'>{name}</h1>
            <section className='fav-heart'>
                <div className='heart-icon'>
                    <p>Rating: {vote_average}</p>
                    <p>Votes: {vote_count} </p>
                </div>
                <div>
                    <p>Release: {first_air_date}</p>
                    {isFavorite ? (
                        <FaHeart className='fav-icon' color='red' onClick={toggleFavorite}/>
                    ):(
                        <FaRegHeart className='fav-icon' onClick={toggleFavorite}/>
                    )}
                </div>
            </section>
        </li>
    </div>
  )
}
