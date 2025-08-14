import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar.jsx'

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <NavBar/>  
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      
    </div>
  )
}

export default App
