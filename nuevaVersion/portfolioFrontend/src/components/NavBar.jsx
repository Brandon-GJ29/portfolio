import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const NavBar = ({menuOpen,setMenuOpen}) => {
  return (
    <div >
     <div className={` flex fixed top-0 left-0 w-full flex items-center justify-between  py-3 font-mono transition-colors duration-500 ease-in-out  ${menuOpen ? "bg-black"  : "bg-white"}`}>
        
        {/* Sección izquierda */}
        <div className={`flex items-center justify-center px-6 font-medium space-x-2 ${menuOpen ? "text-white" : "text-black"}`}>
          <Link to='/'><h1 className='font-bold'>.gjbrandon</h1></Link>
          <img src={menuOpen ? assets.personBlanco : assets.person} alt="" className="w-5 h-5 object-contain mr-2 translate-x-5" />
          <h1 className='text-[10px] -translate-y-[10%] translate-x-5 '>+52 5579182407</h1>
          <img src={menuOpen ? assets.correoBlanco : assets.correo} alt="" className="w-4 h-4 object-contain mr-2 translate-x-5" /> 
          <h1 className='text-[10px] -translate-y-[10%] translate-x-5 '>contacto@brandongj.com</h1>
        </div>

        {/* Ícono de menú */}
        <div onClick={()=>setMenuOpen(!menuOpen)} className="flex flex-col space-y-1 space-x-10 cursor-pointer">
          <span
            className={`block w-6 h-0.5 rounded
              transition-all duration-300 ease-in-out
              ${menuOpen ? "rotate-45 translate-y-1.5 bg-white" : "rotate-0 translate-y-0 bg-black"}`}>
          </span>
          <span className="block w-6 h-0.5 bg-black rounded"></span>
          <span
            className={`block w-6 h-0.5 rounded
              transition-all duration-300 ease-in-out
              ${menuOpen ? "-rotate-45  bg-white -translate-y-1.5" : "rotate-0 translate-y-0 bg-black"}`}>
          </span>
        </div>

      </div>
    </div>
  )
}

export default NavBar
