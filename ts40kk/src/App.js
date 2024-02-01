import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
const ForwardComponent = React.forwardRef((props,ref)=>{
  return (
    <div ref={ref}>
      <h1>Hello Forward Refs</h1>
    </div>
  )
})
export default function App() {
  const customRef = useRef()
  useEffect(()=>{
    if(customRef.current){
      customRef.current.style.backgroundColor = "red"
    }
  })
  return (
    <div>
      <ForwardComponent ref={customRef}/>
    </div>
  )
}
