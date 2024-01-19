import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import "./News.css"
export default function News() {
    const [data,setData] = useState([]);
       
    useEffect(()=>{
        const fetchData = async()=>{
            const data =await fetch("https://newsapi.org/v2/everything?q=cricket&from=2023-12-19&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
            const response = await data.json();
            setData(response.articles)
           }
        fetchData();
    },[])
  return (
    <>
    <div className='main'>
    
        <ul className='container'>
            {data.map((item,index)=>(
                <Newsitem key={index} title={item.title} description={item.description}
                img ={item.urlToImage} url = {item.url}/>
            ))}
        </ul>
    </div>
    
    </>
    
  )
}
