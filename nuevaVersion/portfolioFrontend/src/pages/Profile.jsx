import React from 'react';
import { assets,projects } from '../assets/assets';
import ProjectsProfesional from '../components/ProjectsProfesional';

function Profile({t}) {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory  bg-white">
      <section className="h-screen snap-start">
        <ProjectsProfesional t={t} />
      </section>
    </div>

  );
}

export default Profile;
