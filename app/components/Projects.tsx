// app/components/Projects.tsx
'use client';

import React, { useState } from 'react';
import { projects, type Project } from '@/data/projectsData';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Ini adalah fungsi yang akan "menangkap" klik dari ProjectCard
  const handleCaseStudyClick = (project: Project) => {
    console.log("Proyek yang diklik:", project); // <-- Kita tes di console dulu
    setSelectedProject(project);
  };
  const handleCloseModal = () => {
    setSelectedProject(null); // (Setel proyek ke 'null' untuk menutup)
  };
  return (
    // --- PERUBAHAN DI SINI: 'py-20' menjadi 'py-24' ---
    <section id="projects" className="py-24 px-4">
      <h2 className="text-4xl font-bold text-center text-brand-light mb-16 font-heading">
        PROYEK UNGGULAN
      </h2>
      
      <div className="max-w-4xl mx-auto flex flex-col gap-24">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} onCaseStudyClick={handleCaseStudyClick} />
        ))}
      </div>
          <CaseStudyModal 
        project={selectedProject} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default Projects;