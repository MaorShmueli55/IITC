import { useState } from 'react'
import './App.css'
import { BrowserRouter , Router , Route , Routes } from 'react-router-dom'

import QueryPrint from './pages/QueryPrint'
import Home from './pages/Home'
import SignIn from './pages/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/SingIn" element={<SignIn />} />
       <Route path="/QueryPrint" element={<QueryPrint />} />
     </Routes>
    </BrowserRouter>


    </>
    
  )
}

export default App
