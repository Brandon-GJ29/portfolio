import React, { useState } from 'react';
import ProjectItem from './ProjectItem.jsx';
import ProjectItemRight from './ProjectItemRight.jsx';
import { projects } from '../assets/assets.js';
import "../i18n.js";

const ProjectsProfesional = ({t}) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const otherProjects = projects.filter(p => p._id !== selectedProject._id);

  const handleSelectProject = (project) => {
    setIsAnimating(true); // activa animación de salida

    setTimeout(() => {
      setSelectedProject(project); // cambia proyecto
      setIsAnimating(false); // activa animación de entrada
    }, 300); // duración de la animación en ms
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 md:p-10 gap-6">

      {/* Contenedor de columnas */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-10 w-full">
        
        {/* Columna izquierda */}
        <div className="bg-white p-4 max-w-md rounded-lg flex-shrink-0 w-full md:w-auto">
          <div
            className={`transition-all duration-300 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {selectedProject && (
              <ProjectItem
                t={t}
                index={projects.findIndex(p => p._id === selectedProject._id)}
                key={selectedProject._id}
                id={selectedProject._id}
                name={selectedProject.name}
                image={selectedProject.image}
                description={selectedProject.description}
                tools={selectedProject.category}
              />
            )}
          </div>
        </div>

        {/* Columna derecha */}
        <div className="bg-white p-4 rounded-lg flex flex-col gap-4 overflow-y-auto max-h-[80vh] w-full md:w-auto">
          {otherProjects.map(project => (
            <div 
              key={project._id}
              onClick={() => handleSelectProject(project)}
              className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 transition"
            >
              <ProjectItemRight
                id={project._id}
                name={project.name}
                image={project.image}
                category={project.category}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Botón fijo abajo centrado */}
      <button className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 cursor-pointer bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-500 shadow-lg">
         {t("download")+" CV"}
      </button>

    </div>
  );
};

export default ProjectsProfesional;
