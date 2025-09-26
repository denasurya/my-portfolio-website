// app/components/Projects.tsx
'use client';

import React from 'react';
import { projects } from '@/data/projectsData';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    // --- PERUBAHAN DI SINI: 'py-20' menjadi 'py-24' ---
    <section id="projects" className="py-24 px-4">
      <h2 className="text-4xl font-bold text-center text-brand-light mb-16 font-heading">
        Featured Projects
      </h2>
      
      <div className="max-w-4xl mx-auto flex flex-col gap-24">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;