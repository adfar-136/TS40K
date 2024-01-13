import React from 'react'

function Blog({name,age,salary}) {
  return (
    <div>
        <h1>Blog Component</h1>
        <h1>My Name is {name}</h1>
            <h1>My age is {age}</h1>
            <h1>My salary is {salary}</h1>
    </div>
  )
}

export default Blog