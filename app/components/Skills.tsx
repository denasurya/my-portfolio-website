// app/components/Skills.tsx
'use client'; 

import React from 'react';
import { motion } from 'framer-motion';

// --- (Animasi Anda tetap sama) ---
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Dibuat sedikit lebih cepat
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  },
};
// ---------------------------------

// ==========================================================
// --- KUMPULAN SKILL BARU (SINKRON DENGAN CV ANDA) ---
// ==========================================================

// 1. SKILL PRODUCT MANAGEMENT (Teks Saja)
const pmSkills = [
  "R&D Collaboration",
  "User Research (Need Analysis)",
  "Product Validation (User Testing)",
  "Product Design (UI/UX)",
  "Agile/Scrum Basics",
  "User Empathy",
  "Stakeholder Communication"
];

// 2. SKILL TEKNOLOGI INTI (Teks Saja)
const coreTechSkills = [
  "AI Product Development",
  "Generative AI (Google Gemini API)",
  "API Integration",
  "Prompt Engineering"
];

// 3. TOOLS & STACK (Dengan Ikon)
const toolsSkills = [
  { name: "Git", icon: "devicon-git-plain" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Figma", icon: "devicon-figma-plain" }, // <-- SKILL BARU
  { name: "Google Forms", icon: "devicon-google-plain" }, // <-- SKILL BARU
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
  { name: "VS Code", icon: "devicon-vscode-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Next.js", icon: "devicon-nextjs-original" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Vercel", icon: "devicon-vercel-original" }

];

// ==========================================================
// --- AKHIR KUMPULAN SKILL BARU ---
// ==========================================================


const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-brand-light mb-16 font-heading">
          KEMAMPUAN UTAMA
        </h2>
        
        {/* =========================================== */}
        {/* --- LAYOUT BARU 3 KATEGORI --- */}
        {/* =========================================== */}

        {/* --- KATEGORI 1: PRODUCT MANAGEMENT --- */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-brand-cyan mb-8">
            Product Management
          </h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            {pmSkills.map(skill => (
              <motion.div 
                key={skill} 
                className="bg-slate-800/80 border border-slate-700 rounded-full py-2 px-5 text-brand-light font-medium"
                variants={itemVariant}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- KATEGORI 2: TEKNOLOGI INTI (AI) --- */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-brand-cyan mb-8">
            Teknologi Inti (AI)
          </h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            {coreTechSkills.map(skill => (
              <motion.div 
                key={skill} 
                className="bg-slate-800/80 border border-slate-700 rounded-full py-2 px-5 text-brand-light font-medium"
                variants={itemVariant}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- KATEGORI 3: TOOLS & STACK TEKNIS --- */}
        <div>
          <h3 className="text-2xl font-semibold text-brand-cyan mb-8">
            Implementasi Stack Teknologi
          </h3>
          <motion.div 
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6" // Dibuat lebih banyak kolom
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            {toolsSkills.map(skill => (
              <motion.div 
                key={skill.name} 
                className="bg-slate-800/80 border border-slate-700 rounded-lg p-4 flex flex-col items-center justify-center gap-3 transition-colors duration-300 hover:border-brand-cyan hover:bg-slate-700"
                variants={itemVariant}
                whileHover={{ scale: 1.1, y: -8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }} 
              >
                <i className={`${skill.icon} text-5xl text-slate-300`}></i>
                <span className="font-semibold text-sm text-brand-light">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =========================================== */}
        {/* --- AKHIR LAYOUT BARU --- */}
        {/* =========================================== */}

      </div>
    </section>
  );
};

export default Skills;