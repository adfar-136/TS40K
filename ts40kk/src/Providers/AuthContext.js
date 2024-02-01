import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
const AuthhContext = createContext()
export default function AuthContext({children}) {
    const [isLoggedIn,setIsloggedIn] = useState(false);
    useEffect(()=>{
        const token=localStorage.getItem("token");
        setIsloggedIn(token)
    })
    const login=(token)=>{
        localStorage.setItem("token",token);
        setIsloggedIn(true)
    }
    const logout=()=>{
        localStorage.removeItem("token");
        setIsloggedIn(false)
    }
  return (
    <div>
       <AuthhContext.Provider value={{isLoggedIn,login,logout}}>
         {children}
       </AuthhContext.Provider>
    </div>
  )
}

export const useAuth =()=>{
    return useContext(AuthhContext)
}