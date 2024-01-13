import React from 'react'
import Blog from './Blog'

export default function Contact({namee,agee,salaryy}) {
  return (
    <div>
        <h1>Contact Page</h1>
        <Blog name={namee} age={agee} salary={salaryy}/>
    </div>
  )
}
