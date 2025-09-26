// app/components/Skills.tsx
'use client'; 

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "React", icon: "devicon-react-original" },
  { name: "Next.js", icon: "devicon-nextjs-original" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "Solidity", icon: "devicon-solidity-plain" },
  { name: "Hardhat", icon: "devicon-hardhat-plain" },
  { name: "HTML5", icon: "devicon-html5-plain" },
  { name: "CSS3", icon: "devicon-css3-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "VS Code", icon: "devicon-vscode-plain" }, // <-- INI DIA BARIS BARUNYA
  { name: "Vercel", icon: "devicon-vercel-original" },
  { name: "IPFS", icon: "devicon-ipfs-original" }
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-brand-light mb-16 font-heading">
          My Tech Stack
        </h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {skills.map(skill => (
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
    </section>
  );
};

export default Skills;