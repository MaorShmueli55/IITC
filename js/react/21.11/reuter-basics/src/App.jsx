import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Navbar from './components/NavBar'

function App() {
  return (
    <>
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
         <Route path='news' element={<h1>this is news</h1>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
