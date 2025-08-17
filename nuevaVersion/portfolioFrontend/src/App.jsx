import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar.jsx'
import { useTranslation } from "react-i18next";
import "./i18n";
import Profile from './pages/Profile.jsx';
import Project from './pages/Project.jsx';


const App = () => {
  const [darkMode,setDarkMode] =useState(false)
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-amber-400">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} t={t} i18n={i18n} toggleLanguage={toggleLanguage} />
      
      <div className="flex-1">
        <Routes>
          <Route path='/' element={<Home  t={t} i18n={i18n.language}  />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
           <Route path='/project/:projectId' element={<Project />} />
        </Routes>
      </div>
    </div>

  )
}

export default App
