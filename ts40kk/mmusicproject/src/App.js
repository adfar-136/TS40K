import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import "./App.css"
export default function App() {
  return (
    <div className='App' style={{marginTop:"90px"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
