// app/components/ProjectCard.tsx
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Button from './Button';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

// Interface Project tetap sama
interface Project {
  image: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  liveDemoUrl: string;
  repoUrl: { main?: string; frontend?: string; };
  collectionUrl?: string;
  caseStudy?: {
    story: string;
    videoDemoUrl?: string;
    videoTestimoniUrl?: string;
    graphImageUrl?: string;
    ihtPhotoUrls?: string[];
    journalUrl?: string;
    announcementImageUrl?: string;
    eventPhotoUrls?: string[];
    officialDocUrl?: string;
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onCaseStudyClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onCaseStudyClick }) => {
  const ref = useRef<HTMLDivElement>(null);

  // LOGIKA SCROLL-LINKED ANIMATION 
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const xPositionProgress = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? [-100, 0] : [100, 0]
  );

  // Logika untuk hover tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);
  const imageParallaxX = useTransform(x, [-0.5, 0.5], [-20, 20]);
  const imageParallaxY = useTransform(y, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        x: xPositionProgress,
      }}
      // onMouseMove dan onMouseLeave telah dipindahkan dari sini
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      {/* --- PERUBAHAN UTAMA: Event handler sekarang ada di sini --- */}
      <div 
        style={{ perspective: '1000px' }} 
        className={`relative group ${index % 2 !== 0 ? 'md:order-last' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <motion.div 
            style={{
                // Efek paralaks gambar dikembalikan
                x: imageParallaxX,
                y: imageParallaxY,
                // Efek rotasi 3D
                rotateX,
                rotateY,
            }}
            className="relative bg-brand-dark rounded-lg p-2"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1280}
            height={720}
            className="rounded-md w-full h-auto"
            priority={index === 0}
          />
        </motion.div>
      </div>
      {/* ----------------------------------------------------------- */}

      <div>

        <h3 className="text-2xl font-bold text-brand-light mb-4">{project.title}</h3>
        <p className="text-brand-cyan mb-2 text-sm">{project.category}</p>
        <p className="text-brand-muted mb-6 text-justify">{project.description}</p>
        
        <h4 className="font-semibold text-brand-light mt-6 mb-2">Poin Utama:</h4>
        <ul className="list-disc list-outside pl-5 space-y-2 text-brand-muted">
          {project.features.map((feature, i) => (
            <li key={i} className="text-justify">{feature}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 my-6">
          {project.techStack.map(tech => (
            <span key={tech} className="bg-slate-800 text-brand-light text-xs font-semibold px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
{/* INI KODE BARU ANDA */}
        <div className="flex flex-wrap gap-4 items-center">
          <Button href={project.liveDemoUrl} isExternal={true}>Live Demo</Button>

          {/* --- INI PERUBAHAN UTAMA KITA --- */}
          {/* 1. Cek dulu apakah 'caseStudy' ada di data proyek ini */}
          {project.caseStudy && (
            /* 2. Jika ada, buat tombol baru "Baca Studi Kasus" */
            <Button 
              href="#" // Tetap pakai href agar style tidak rusak
              isExternal={false}
              onClick={(e) => { // Tambahkan onClick
                e.preventDefault(); // Mencegah link # berpindah halaman
                onCaseStudyClick(project); // Memanggil fungsi yang kita siapkan
              }}
            >
              Baca Studi Kasus
            </Button>
          )}
          
          {/* Tombol "View Code" dan "Rarible" sudah kita HAPUS */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;