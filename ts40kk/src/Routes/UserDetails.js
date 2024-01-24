import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const dynamic = useParams()
    console.log(dynamic)
  return (
    <div>
        <h1>User Details of {dynamic.userID}</h1>
    </div>
  )
}
