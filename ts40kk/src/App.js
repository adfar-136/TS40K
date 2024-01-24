import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Abput from './Routes/Abput'
import Contact from './Routes/Contact'
import Blog from './Routes/Blog'
import User from './Routes/User'
import UserDetails from './Routes/UserDetails'
import Adhaaaar from './Routes/Adhaaaar'
import List from './Routes/List'
import Search from './Routes/Search'
import MainHoome from './Routes/MainHoome'
export default function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<MainHoome/>}>
              <Route index element={<Home/>}/>
              <Route path='/about' element={<Abput/>}/>
              <Route path='/contact' element={<Contact/>}>
                 <Route path='list' element={<List/>}/>
                 <Route path='search' element={<Search/>}/>
              </Route>
              <Route path='/blog' element={<Blog/>}/>
              <Route path='/user' element={<User/>}/>
              <Route path='/user/:userID' element={<UserDetails/>}/>
              <Route path='/user/:userID/adhaar/:number' element={<Adhaaaar/>}/>
           </Route>
           
         </Routes>
      </BrowserRouter>
    </div>
  )
}
