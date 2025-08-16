import React, { useRef, useEffect } from "react";
import { assets } from '../assets/assets';
import { init } from "ityped";

const Hello = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: false, 
      strings: ["Brandon", "Engineer", "Filmmaker"],
    });
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-5 mb-8">
        <h1 className="bebas-neue-regular text-gray-400 text-2xl sm:text-3xl md:text-4xl">Hi, I'm</h1>
        <img
          src={assets.man}
          alt="Brandon"
          className="w-16 sm:w-20 h-10 sm:h-12 rounded-lg object-cover"
        />
        <span ref={textRef}  className="bebas-neue-regular text-black text-2xl sm:text-3xl md:text-4xl"></span>
      </div>

      <div className="w-full max-w-2xl text-center">
        <h3 className="font-lora font-extralight text-[10px] sm:text-xs md:text-sm lg:text-base text-justify leading-5 p-2 rounded">
            Estudiante de Ingeniería en Computación en la UNAM y filmmaker en constante aprendizaje. Apasionado por la innovación, la disciplina y la creación de proyectos que combinan tecnología, arte y esfuerzo para generar un impacto positivo.
        </h3>
      </div>
    </div>
  );
}

export default Hello;
