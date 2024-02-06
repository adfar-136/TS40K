import React, { useState } from 'react'

import Tvlist from './Tvlist'

export default function FavTv() {
  const [fav,setFav]= useState([])
  const favoriteSeriesIDs = JSON.parse(localStorage.getItem('favoriteSeries')) || []
  const fetchSeries = async() =>{
    try {
      const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=1`)
      const result = await response.json() ;
      return result.results
    } catch (error) {
      console.log(error)
      return []
    }
  }
  const renderFavoriteSeries = async ()=>{
     const mainTvList = await fetchSeries();
     const favoriteSeries = mainTvList.filter((series)=>
         favoriteSeriesIDs.some(([_,tvId])=>tvId === series.id)
     )
     return favoriteSeries
  }
   renderFavoriteSeries().then((response)=>{
    setFav(response)
   })
  return (
    <div>
      <h1>Favorite TV Series</h1>
      {favoriteSeriesIDs.length > 0?(
        <Tvlist series={fav}/>
      ):<>
         <h1>No Series selected</h1>
      </>}
    </div>
  )
}
