import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../i18n.js";

function ProjectItem({t,index, id, name, image, description, tools = [] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Array.isArray(image) ? image : [image];

  return (
    <div className="max-w-sm w-full bg-white rounded-lg  overflow-hidden">
      {/* Imagen arriba */}
      <div className="overflow-hidden">
        <img
          className="w-full max-h-64 object-cover hover:scale-105 transition-transform duration-300"
          src={images[currentImageIndex]}
          alt={name}
        />
      </div>

      {/* Contenedor abajo dividido en dos columnas */}
      <div className="flex flex-col sm:flex-row p-4 gap-4 flex-wrap">
        {/* Columna izquierda: nombre + botón */}
        <div className="flex flex-col flex-1 min-w-0 break-words">
          <h1 className="text-xs sm:text-xs md:text-2xl font-bold text-gray-700 mb-2 line-clamp-2">
            {t(`name${index}`)}
          </h1>
          <Link
            to={`/project/${id}`} // Aquí redirige al proyecto correspondiente
            className="bg-black text-white text-xs px-2 py-1 rounded-full hover:scale-105 transition-transform duration-300 inline-block self-start text-center"
          >
            {t("readmore")}
          </Link>
        </div>

        {/* Columna derecha: descripción + herramientas */}
        <div className="flex-1 min-w-0 text-gray-600 break-words">
          <p className="text-sm sm:text-base md:text-xs line-clamp-3">
             {t(`description${index}_1`)}
          </p>

          {tools.length > 0 && (
            <div className="mt-4">
              <h2 className="font-semibold text-gray-700 mb-2 text-sm">{t("category")}</h2>
              <ul className="flex flex-wrap gap-1 max-w-full overflow-hidden">
                {tools.map((tool, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 px-1 py-0.5 rounded text-xs text-gray-800 truncate  text-center"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
