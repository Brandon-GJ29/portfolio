import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../assets/assets';

function Project() {
  const { projectId } = useParams();
  const project = projects.find(p => p._id === Number(projectId));

  return (
    <div className='h-screen w-screen flex justify-center overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-white'>
        <div className="w-100 h-64 bg-blue-500 rounded-2xl translate-y-16">
            <img src={project.image} alt="" className='rounded-2xl w-full max-h-64 object-cover hover:scale-105 transition-transform duration-300' />
            <h1 className=''>{project.name}</h1>
        </div>
        <div className=''>
                <h1>holaa</h1>
        </div>
    
    </div>
    
  );
}

export default Project;
