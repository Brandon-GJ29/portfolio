import React, { useRef, useEffect } from "react";
import { assets } from '../assets/assets';
import { init } from "ityped";
import { useTranslation } from "react-i18next";
import "../i18n.js";


const Hello = ({t}) => {
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
    <div className="flex flex-col items-center justify-center h-full bg-white text-black">

      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-5 mb-8">
        <h1 className="bebas-neue-regular text-2xl sm:text-3xl md:text-4xl text-gray-400">Hi, I'm</h1>

        <img
          src={assets.man}
          alt="Brandon"
          className="w-16 sm:w-20 h-10 sm:h-12 rounded-lg object-cover"
        />

        <span ref={textRef} className="bebas-neue-regular text-2xl sm:text-3xl md:text-4xl text-black"></span>
      </div>

      <div className="w-full max-w-2xl text-center">
        <h3 className="font-lora font-extralight text-[10px] sm:text-xs md:text-sm lg:text-base text-justify leading-5 p-2 rounded text-gray-800">
         {t("presentacion")}
        </h3>
      </div>

    </div>
  );
}

export default Hello;
