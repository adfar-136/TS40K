import React, { createContext, useState } from 'react'
const UserContext = createContext()
export default function UserProvider({children}) {
    const [user,setUser]= useState("Adfar");
    const signUp=(userInfo)=>{
        setUser(userInfo)
    }
  return (
   <UserContext.Provider value={{user,setUser,signUp}}>
     {children}
   </UserContext.Provider> 
  )
}
export {UserContext}