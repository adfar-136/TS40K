import React from 'react'
import "./News.css"
export default function Newsitem({title,description,img,url}) {
  return (
    <div>
        <div className='card'>
            <h1 className='heading'>{title?title.slice(0,20):"Yahan Title nhi hain"}</h1>
            <div className="inner">
            <p className='para'>{description?description.slice(0,80):"Yahan Description Nhi Hain"}</p>
            <img className="img" src={img?img:"https://img.etimg.com/thumb/msid-106949123,width-1200,height-630,imgsize-43518,overlay-economictimes/photo.jpg"} alt={title}/>
            </div>
            <a className='btn' href={url} target='_blank' rel="noreferrer">Read More</a>
        </div>
    </div>
  )
}
