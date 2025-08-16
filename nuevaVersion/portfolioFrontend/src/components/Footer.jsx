import React from 'react';

const Footer = () => {
  return (
    <div className='h-screen w-full flex flex-col bg-white'>
      
      {/* Sección Superior: más pequeña */}
      <div className='flex-[1]  flex items-center justify-center bg-amber-100'>
          Sección Superior
      </div>

      {/* Sección Media: más grande */}
      <div className='flex-[2]  flex items-center justify-center flex-col'>
        
        <h2 
  className="font-lora font-extralight text-[10px] sm:text-xs md:text-sm lg:text-base text-justify leading-5 p-2 rounded self-start translate-x-9 translate-y-8"
>
  ¿Tienes ganas de conversar? Let’s talk.
</h2>

        <h1 className="bebas-neue-regular text-gray-200 text-6xl sm:text-8xl md:text-[20rem] w-full text-center">
                Let's Talk
        </h1>
      </div>

      {/* Sección Inferior: tamaño medio */}
      <div className='flex-[1] flex items-center justify-center'>
          Sección Inferior
      </div>

    </div>
  );
}

export default Footer;
