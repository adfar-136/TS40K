import React from 'react'
import { useAuth } from './AuthContext'

export default function Authenticate() {
    const {isLoggedIn,login,logout} = useAuth()
  return (
    <div>
        {isLoggedIn ?(
             <>
              <p>You are LoggedIn</p>
              <button  onClick={()=>logout()}>LogOut</button>
             </>
        ):(
              <>
                <p>You are not loggedIn</p>
                <button onClick={()=>login("sampleToken")}>Login</button>
              </>
        )}
    </div>
  )
}
