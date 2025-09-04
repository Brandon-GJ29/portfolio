import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectItemRight({ id, name, image,category }) {
  // Para manejar varios images, mostramos la primera por defecto
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Aseguramos que image siempre sea un array
  const images = Array.isArray(image) ? image : [image];

  return (
    <div className="flex flex-row items-center gap-4">
      {/* Imagen en un cuadro pequeño */}
      <div className="w-20 h-20 overflow-hidden rounded-md flex-shrink-0">
        <img
          className="w-full h-full object-cover hover:scale-101 transition ease-in-out duration-300"
          src={images[currentImageIndex]}
          alt={name}
        />
      </div>

      {/* Texto a la derecha */}
      <Link className="text-gray-700 cursor-pointer flex flex-col justify-center" >
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-500">{category[0]}</p>
      </Link>
    </div>
  );
}

export default ProjectItemRight;
