// app/components/Hero.tsx
'use client';

import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
// 1. Impor komponen TypeAnimation yang baru diinstal
import { TypeAnimation } from 'react-type-animation';

// Varian untuk elemen yang muncul setelah judul selesai diketik
const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden"
    >
      <div className="relative z-10">
        
        {/* 2. Ganti motion.h1 dengan TypeAnimation */}
        <TypeAnimation
          // Urutan teks yang akan diketik
          sequence={[
            'Hi, I\'m Dena Surya Gumilah 👋',
            1000, // Tahan selama 1 detik setelah selesai
          ]}
          // Gunakan tag h1 agar style tetap sama
          wrapper="h1"
          // Kecepatan mengetik (ms)
          speed={50}
          // Gunakan className yang sama dengan h1 sebelumnya
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-heading shadow-black/50 text-shadow"
          // Ulangi animasi? 0 = tidak
          repeat={0}
        />
        
        {/* Konten lain akan muncul setelah jeda */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3, delayChildren: 2.5 }} // Delay dimulai setelah animasi ketik selesai
        >
          <motion.h2 
            variants={itemVariant}
            className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent mb-6 shadow-black/50 text-shadow"
          >
            Educator turned Full-Stack AI & Web3 Developer
          </motion.h2>

          <motion.p 
            variants={itemVariant}
            className="max-w-3xl text-lg text-brand-muted leading-relaxed shadow-black/50 text-shadow"
          >
            I&apos;m an educator from Indonesia with a background in Informatics who is passionate about building technology that empowers people. My journey has led me to explore the intersection of Artificial Intelligence and Web3.
          </motion.p>

          <motion.div 
            variants={itemVariant}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button href="#projects">
              View My Projects
            </Button>
            <Button href="#contact">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;