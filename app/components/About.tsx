// app/components/About.tsx
'use client'; 

import React from 'react';
import Image from 'next/image';
import { motion, Transition } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Jeda sedikit diperpanjang
    },
  },
};

// --- PERUBAHAN DI SINI ---
const springTransition: Transition = {
  type: 'spring',
  stiffness: 80, // Dulu 120, diturunkan agar tidak terlalu kaku
  damping: 15,   // Dulu 10, dinaikkan agar lebih teredam
};
// -------------------------

const photoVariant = {
  hidden: { opacity: 0, scale: 0.8, x: -100 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: springTransition,
  },
};

// --- PERUBAHAN DI SINI ---
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0, // Dulu 0.6, sekarang menjadi 1 detik
    },
  },
};
// -------------------------


const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 md:p-12"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
        >
          <div className="grid grid-cols-1 items-center">
            
            <motion.div 
              className="relative w-48 h-48 md:w-60 md:h-60 mx-auto"
              variants={photoVariant}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full blur opacity-75"></div>
              <Image
                src="/profile.jpg"
                alt="Foto Dena Surya Gumilah"
                width={240}
                height={240}
                className="relative rounded-full object-cover object-top w-full h-full border-4 border-slate-800"
              />
            </motion.div>

            <motion.div 
              className="w-full text-center mt-12"
              variants={textVariant}
            >
              <h2 className="text-4xl font-bold text-brand-light mb-4 font-heading">
                Tentang Saya
              </h2>
              <p className="text-brand-muted leading-relaxed mb-4 text-justify">
                 Saya berawal dari seorang Guru Informatika di SMPN 3 Lakbok. Di sanalah saya merasakan langsung masalah nyata di lapangan, ketika kurikulum berubah, saya dan rekan guru kewalahan menghabiskan waktu berjam-jam untuk administrasi.
            </p>
            <p className="text-brand-muted leading-relaxed mb-4 text-justify">
            Saya &quot;mencari solusi&quot; dan sadar saya harus membangun sesuatu.
          </p>
            <p className="text-brand-muted leading-relaxed mb-4 text-justify">
           Di situlah peran saya berubah. Saya &quot;sama sekali tidak tau koding&quot;, jadi saya harus <em>resourceful</em>. Saya bertindak sebagai Visioner Produk. Saya merancang solusi (Cipta Ajar AI) dan me-manage eksekusi teknisnya (berkolaborasi intensif dengan Google Gemini).
          </p>
            <p className="text-brand-muted leading-relaxed mb-4 text-justify">
           Saya baru sadar, yang saya lakukan itu adalah mengidentifikasi masalah user, merancang solusi, dan memvalidasi dampaknya adalah inti dari Product Management.
          </p>
            <p className="text-brand-muted leading-relaxed mb-4 text-justify">
          Kini, saya &quot;bertaruh segalanya&quot; untuk fokus di jalur ini. Mencari peran di tim Produk Edutech di mana saya bisa menggunakan domain expertise saya (sebagai Pendidik) untuk menjadi jembatan antara kebutuhan nyata di sekolah dan solusi teknologi yang berdampak.
          </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;