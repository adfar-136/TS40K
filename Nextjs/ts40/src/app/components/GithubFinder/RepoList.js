import React from 'react'

export default function RepoList({repos}) {
  return (
    <div>
        <ul>
           {repos.map((item,index)=><li key={index}>
            <a href={item.html_url}>{item.name}</a>
           </li>)}
        </ul>
    </div>
  )
}
