import React from 'react'

export default function Pagination({total,perPage,paginate}) {
    let pageNumber = [];
    let totalPage = Math.ceil(total/perPage);
    for (let i=1;i<=totalPage;i++){
        pageNumber.push(i)
    }
  return (
    <div>
        {pageNumber.map((item,index)=>(
            <button key={index} onClick={()=> paginate(item)}>{item}</button>
        ))}
    </div>
  )
}
