import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-30">
      {/* Barra superior */}
      <div className="flex items-center justify-between py-3 px-4 sm:px-6 bg-white  transition-colors duration-500 ease-in-out relative z-30">
        
        {/* Logo + Info de contacto */}
        <div className="flex items-center gap-6">
          <Link to='/' className="flex items-center gap-2">
            <h1 className="font-bold text-lg">.gjbrandon</h1>
          </Link>

          {/* Info de contacto desktop */}
          <div className="hidden sm:flex items-center gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <img src={assets.correo} alt="Email" className="w-4 h-4"/>
              <p>contacto@brandongj.com</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={assets.person} alt="Tel" className="w-4 h-4"/>
              <p>+52 5579182407</p>
            </div>
          </div>
        </div>
      </div>

      {/* Icono de hamburguesa siempre encima */}
      <div className="fixed top-3 right-6 z-50 flex flex-col justify-between w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`block h-0.5 w-full bg-black transform transition duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
        <span className={`block h-0.5 w-full bg-black transition duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block h-0.5 w-full bg-black transform transition duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
      </div>

      {/* Menu lateral */}
      <div className={`
        fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 z-40
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        w-full sm:w-64
      `}>
        <div className="flex flex-col p-6 gap-4 h-full">
          {/* <button onClick={() => setMenuOpen(false)} className="self-end font-bold text-lg sm:hidden">X</button>*/}
          <Link onClick={() => setMenuOpen(false)} to="/" className="py-2 text-lg sm:text-base">HOME</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about" className="py-2 text-lg sm:text-base">ABOUT</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact" className="py-2 text-lg sm:text-base">CONTACT</Link>

          {/* Info de contacto en móvil dentro del menú */}
          <div className="flex flex-col mt-6 gap-2 sm:hidden text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <img src={assets.correo} alt="Email" className="w-4 h-4"/>
              <p>contacto@brandongj.com</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={assets.person} alt="Tel" className="w-4 h-4"/>
              <p>+52 5579182407</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
