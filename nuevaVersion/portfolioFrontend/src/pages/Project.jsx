import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, projects } from '../assets/assets';
import "../i18n.js";
function Project({t}) {
  const { projectId } = useParams();
  const project = projects.find((p) => p._id === Number(projectId));

  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-700">
          Proyecto no encontrado
        </h1>
      </div>
    );
  }
const projectIndex = projects.findIndex((p) => p._id === Number(projectId));
  const images = Array.isArray(project.image) ? project.image : [project.image];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Función para cerrar lightbox solo si se da clic en el fondo
  const handleBackgroundClick = (e) => {
    if (e.target.dataset.bg === 'true') {
      setIsLightboxOpen(false);
    }
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center overflow-y-auto bg-white px-6 pt-16 pb-10">

      {/* Carrusel en la página */}
      <div className="flex items-center justify-center space-x-4 w-full max-w-xs">
        {images.length > 1 && (
          <button
            onClick={prevImage}
            className="cursor-pointer rounded-full p-1 text-xs font-bold hover:scale-105 transition-transform duration-500"
          >
            ◀
          </button>
        )}

        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.name}-${index}`}
                className="w-full flex-shrink-0 object-contain max-h-[calc(100vh-4rem)] cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              />
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <button
            onClick={nextImage}
            className="cursor-pointer rounded-full p-1 text-xs font-bold hover:scale-105 transition-transform duration-500"
          >
            ▶
          </button>
        )}
      </div>

      {/* Título del proyecto */}
      <h1 className="text-3xl font-bold text-center mt-6">{t(`name${projectIndex}`)}</h1>

        
      {/* Sección de Tools y Stack antes de la descripción */}
<div className="mt-8 max-w-xl w-full flex flex-wrap gap-4">
  {/* Tools */}
  {project.tools && project.tools.length > 0 && (
    <div className="flex-1 min-w-[120px]">
      <h2 className="text-sm font-semibold mb-1">Tools:</h2>
      <ul className="flex flex-wrap gap-1">
        {project.tools.map((tool, index) => (
          <li
            key={index}
            className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px] text-gray-700"
          >
            {tool}
          </li>
        ))}
      </ul>
    </div>
  )}

  {/* Stack */}
  {project.stack && project.stack.length > 0 && (
    <div className="flex-1 min-w-[120px]">
      <h2 className="text-sm font-semibold mb-1">Stack:</h2>
      <ul className="flex flex-wrap gap-1">
        {project.stack.map((item, index) => (
          <li
            key={index}
            className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px] text-gray-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

      {/* Contenido del proyecto */}
      <div className="mt-8 max-w-xl text-gray-700 leading-relaxed text-justify">
        <h2 className="text-xl font-semibold mb-3">Descripción</h2>
        <p className="mb-4">{t(`description${projectIndex}_1`)}</p>
        <p className="mb-4">{t(`description${projectIndex}_2`)}</p>
        <p className="mb-4">{t(`description${projectIndex}_3`)}</p>
      </div>

      <a href="https://github.com/Brandon-GJ29/DeteccionMastocitos" target="_blank" rel="noopener noreferrer">
      <div className="cursor-pointer flex items-center justify-center hover:scale-105 transition-transform duration-500">
        <img src={assets.github} alt="" className="w-5 h-5" />
      </div>
    </a>


      {/* Lightbox con carrusel completo */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
          data-bg="true"
          onClick={handleBackgroundClick} // clic solo en el fondo cierra
        >
          <div className="relative w-full max-w-3xl flex items-center justify-center">

            {/* Flecha izquierda */}
            {images.length > 1 && (
              <button
                onClick={prevImage}
                className="cursor-pointer absolute left-2 text-white text-2xl font-bold hover:scale-110 transition-transform duration-300 z-50"
              >
                ◀
              </button>
            )}

            {/* Imagen actual */}
            <img
              src={images[currentImage]}
              alt={`Imagen ${currentImage}`}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl  hover:scale-105 transition-transform duration-500"
            />

            {/* Flecha derecha */}
            {images.length > 1 && (
              <button
                onClick={nextImage}
                className="cursor-pointer absolute right-2  text-white text-2xl font-bold hover:scale-110 transition-transform duration-300 z-50"
              >
                ▶
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
