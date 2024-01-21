import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import "./News.css"
export default function News() {
    const [data,setData] = useState([]);
    const [search,setSearch] = useState("")
    const [page,setPage] = useState(1)
    const [totalPage,setTotalPages] = useState(1);
    const [condition,setCondition]= useState(true)
    const pageSize = 9;
    const fetchData = async()=>{
        const data =await fetch(`https://newsapi.org/v2/everything?q=${search}&page=${page}&pageSize=${pageSize}&from=2023-12-20&sortBy=publishedAt&apiKey=af2eaad40b1940c7a82732643cef799a`)
        const response = await data.json();
        console.log(response)
        console.log(response)
        setData(response.articles);
        setTotalPages(Math.ceil(100/pageSize))
        
       } 
       console.log(totalPage) 
    useEffect(()=>{
        if(page>1){
            setCondition(false)
        }
        if(page === 1){
            setCondition(true)
        }
        fetchData();
    },[page])
    const handleSubmit =(e)=>{
        e.preventDefault()
      fetchData()
    }
    const handlePrev=()=>{
        if (page>1){
            setPage(page-1)
        }
    }
    const handleNext=()=>{
        if(page<totalPage){
            setPage(page+1)
        }
    }
    const handleChange=(pageNumber)=>{
        setPage(pageNumber)
    }
    const buttenRendering=()=>{
        const paginationButtons = [];
        for(let i=1;i<=totalPage;i++){
            paginationButtons.push(
                <button onClick={()=>handleChange(i)}>{i}</button>
            )
        }
        return paginationButtons;
    }
  return (
    <>
     <form className='form' onSubmit={handleSubmit}>
        <input className='search' type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <input className='btnn' type="submit" value="Search" />
       </form>
    <div className='main'>
      
        {data?(
            <>
            <ul className='container'>
            {data.map((item,index)=>(
                <Newsitem key={index} title={item.title} description={item.description}
                img ={item.urlToImage} url = {item.url}/>
            ))}
        </ul>
        <div className="pagination">
        <button onClick={handlePrev} disabled={condition}>Prev</button>
        {buttenRendering()}
        <button onClick={handleNext}>Next</button>
    </div>
            </>
            
        ):(
            <h1>Please enter a query to search news items</h1>
        )}
        
    </div>
    
    
    </>
    
  )
}
