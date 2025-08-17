import React, { useState } from 'react';
import ProjectItem from './ProjectItem.jsx';
import ProjectItemRight from './ProjectItemRight.jsx';
import { projects } from '../assets/assets.js';

const ProjectsProfesional = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const otherProjects = projects.filter(p => p._id !== selectedProject._id);

  return (
    <div className="flex flex-col items-center bg-white p-6 md:p-10 gap-6">

      {/* Contenedor de columnas */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-10 w-full">
        
        {/* Columna izquierda */}
        <div className="bg-white p-4 max-w-md rounded-lg flex-shrink-0 w-full md:w-auto">
          {selectedProject && (
            <ProjectItem
              key={selectedProject._id}
              id={selectedProject._id}
              name={selectedProject.name}
              image={selectedProject.image}
              description={selectedProject.description}
              tools={selectedProject.stack}
            />
          )}
        </div>

        {/* Columna derecha */}
        <div className="bg-white p-4 rounded-lg flex flex-col gap-4 overflow-y-auto max-h-[80vh] w-full md:w-auto">
          {otherProjects.map(project => (
            <div 
              key={project._id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 transition"
            >
              <ProjectItemRight
                id={project._id}
                name={project.name}
                image={project.image}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Botón debajo de las dos columnas */}
      <button className=" cursor-pointer mt-4 bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-500">
        Descargar CV
      </button>
    </div>
  );
};

export default ProjectsProfesional;
