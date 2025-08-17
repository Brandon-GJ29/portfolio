import React, { useState } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div
        onClick={() => setIsDark(!isDark)}
        className={`w-8 h-4 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          isDark ? "bg-gray-800" : "bg-gray-300"
        }`}
      >
        {/* Botón que se mueve */}
        <div
          className={`bg-white w-2.5 h-2.5 rounded-full shadow-md transform duration-300 ${
            isDark ? "translate-x-4" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
