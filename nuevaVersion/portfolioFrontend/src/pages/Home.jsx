import React, { useRef, useEffect } from "react";
import { assets } from '../assets/assets';
import { init } from "ityped";

const Home = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      strings: [".."],
    });
  }, []);

  return (
    <div className='flex flex-col items-center justify-start h-screen pt-35 font-medium '>
      
      {/* Bloque principal: Hi, I'm Brandon */}
      <div className="flex items-center justify-center space-x-5 mb-8">
        <h1 className="text-gray-400 text-4xl">Hi, I'm</h1>
        <img
          src={assets.man}
          alt=""
          className="w-20 h-12 rounded-lg object-cover"
        />
        <h2 className="text-black text-4xl">Brandon</h2>
      </div>

      {/* Descripción abajo */}
      <div className="w-full max-w-xl text-center">
        <h3 className="text-xs sm:text-sm md:text-base text-justify leading-6 font-light p-2 rounded">
          Estudiante de Ingeniería en Computación en la UNAM. Filmmaker,
          apasionado del fitness y aprendiz incansable del conocimiento. Mi
          propósito es dejar un legado que trascienda, demostrando que el
          esfuerzo, la creatividad y la perseverancia pueden transformar
          vidas y construir un futuro mejor.
          <span ref={textRef} className="text-black"></span>
        </h3>
      </div>

    </div>
  );
}

export default Home;
