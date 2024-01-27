import React from 'react'

export default function id({params}) {
    console.log(params)
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  )
}
