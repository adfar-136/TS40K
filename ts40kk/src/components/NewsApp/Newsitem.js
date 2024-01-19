import React from 'react'

export default function Newsitem({title,description,img,url}) {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={img} alt={title}/>
            <a href={url} target='_blank' rel="noreferrer">Read More</a>
        </div>
    </div>
  )
}
