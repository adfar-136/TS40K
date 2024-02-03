import React, { useEffect, useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import Signup from './component/SignUP/Signup'
import Signin from './component/signin/Signin'
import Profile from './Profile'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Todo from "./Todo"

export default function App() {
  const [user,setUser] = useState()
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
     if(user){
      setUser(user.displayName)
     }
     else{
      setUser("")
     }
    })
  })
  console.log(user)
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/signin' element={<Signin/>}/>
         <Route path='/profile' element={<Profile user={user}/>}/>
         <Route path="/todo" element={<Todo user={user}/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}
