import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import FavMovie from './FavMovie'
import Navbar from './Navbar'

export default function App() {
  const [movies,setMovies]=useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [totalPages,setTotalPages] = useState(0)
  const fetchMovies =async (page)=>{
   try {
    const reponse =await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=${page}`);
    const result = await reponse.json()
    setMovies(result.results);
    setTotalPages(result.total_pages);

   } catch (error) {
    console.log("error",error)
   } 
  }
  useEffect(()=>{
    fetchMovies(currentPage)
  },[currentPage])
  const handleSearch = async (query)=>{
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=f531333d637d0c44abc85b3e74db2186&include_adult=false&language=en-US&page=1`);
      const result = await response.json();
      setMovies(result.results);
      setTotalPages(result.total_pages);
      // setCurrentPage(1);

    } catch (error) {
      console.log("error",error)
    }
  }
  return (
    <div>
      
      <BrowserRouter>
      <Navbar onSearch={handleSearch}/>
        <Routes>
          <Route path="/" element={<div>
            <MovieList movies={movies}/>
          </div>} />
          <Route path='/favmov' element={<FavMovie/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
