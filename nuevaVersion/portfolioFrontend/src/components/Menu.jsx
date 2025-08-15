import React from 'react';

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-[40px] right-0 z-20 h-[calc(100vh-10px)] w-72 md:w-64 sm:w-52 bg-black flex flex-col items-center justify-center transition-transform duration-500
      ${menuOpen ? "translate-x-0" : "translate-x-full"}`} // Aquí usamos translateX para transición suave
    >
      <ul className="list-none p-0 m-0 w-3/5 md:w-7/10 sm:w-4/5 text-white text-2xl md:text-xl sm:text-lg font-light">
        <li className="mb-6 hover:font-medium">
          <a href="/" className="text-inherit no-underline">Home</a>
        </li>
        <li className="mb-6 hover:font-medium">
          <a href="/about" className="text-inherit no-underline">About</a>
        </li>
       
      </ul>
    </div>
  );
};

export default Menu;
