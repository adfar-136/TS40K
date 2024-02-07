import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './Reduxstore/action'

export default function Like() {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
    const handleLike = ()=>{
       dispatch(increment())
    }
  return (
    <div>
        <button onClick={handleLike}>{count}:Like</button>
    </div>
  )
}
