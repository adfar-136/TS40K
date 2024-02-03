import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'

export default function Profile({user}) {
    const navigate = useNavigate()
    const handleSignout =()=>{
        signOut(auth).then(()=>{
            navigate("/")
        })
    }
  return (
    <div>
        {user ? (
            <>
               <h1>Welcome back {user}</h1>
               <button onClick={handleSignout}>SignOut</button>
            </>
        ):(
            <div>
                <h1>User is not logged in, Login first</h1>
                <button onClick={()=>navigate("/signin")}>Login</button>
            </div>
        )}
    </div>
  )
}
