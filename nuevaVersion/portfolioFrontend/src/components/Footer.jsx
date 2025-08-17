import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <div className={`h-screen w-full flex flex-col transition-colors duration-500 ${
      darkMode ? 'bg-gray-600 text-white' : 'bg-white text-black'
    }`}>

      {/* Sección Superior */}
      <div className="flex-[1] flex items-center justify-center">
        Sección Superior
      </div>

      {/* Sección Media */}
      <div className="flex-[2] flex items-center justify-center flex-col">

        <h2 
          className="font-lora font-extralight text-[10px] sm:text-xs md:text-sm lg:text-base text-justify leading-5 p-2 rounded self-start translate-x-9 translate-y-8"
        >
          ¿Tienes ganas de conversar?
        </h2>

        <h1 className={`bebas-neue-regular text-6xl sm:text-8xl md:text-[20rem] w-full text-center transition-colors duration-500 ${
          darkMode ? 'text-gray-200' : 'text-gray-200'
        }`}>
          Let's Talk
        </h1>
      </div>

      {/* Sección Inferior */}
      <div className="flex-[1] flex items-center justify-center">
        Sección Inferior
      </div>

    </div>
  );
}

export default Footer;
