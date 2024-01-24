import React from 'react'
import { useParams } from 'react-router-dom'

export default function Adhaaaar() {
    const params = useParams()
    console.log(params)
  return (
    <div>
        <h1>UserName is {params.userID} and Adharr number is {params.number}</h1>
    </div>
  )
}
