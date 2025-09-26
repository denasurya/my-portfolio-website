// app/components/Contact.tsx
'use client'; 

import React, { useState } from 'react';
// 1. Impor 'motion' dari framer-motion
import { motion } from 'framer-motion';

// 2. Definisikan variants untuk animasi
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda antar setiap elemen
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Mengirim....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "ff1e8546-e201-4d24-a3ab-aa257198152c"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("Pesan berhasil terkirim!");
        (event.target as HTMLFormElement).reset(); 
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Terjadi kesalahan saat mengirim pesan.");
    }
    
    setTimeout(() => {
      setResult('');
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 px-4">
      {/* 3. Terapkan 'motion' ke kontainer utama */}
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        {/* 4. Bungkus setiap elemen dengan motion.div dan terapkan itemVariant */}
        <motion.h2 variants={itemVariant} className="text-4xl font-bold text-brand-light mb-4 font-heading">
          Let's Connect
        </motion.h2>
        
        <motion.p variants={itemVariant} className="text-brand-muted mb-8 max-w-lg mx-auto">
          I am currently seeking remote opportunities where I can contribute to innovative projects in the AI and Web3 space. Please feel free to reach out.
        </motion.p>

        <motion.form variants={itemVariant} onSubmit={onSubmit} className="space-y-6 text-left mb-12">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-muted mb-2">Full Name</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              required autoComplete="name"
              className="w-full px-4 py-2 bg-brand-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all duration-300"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-muted mb-2">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              required autoComplete="email"
              className="w-full px-4 py-2 bg-brand-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all duration-300"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brand-muted mb-2">Message</label>
            <textarea 
              name="message" 
              id="message"
              rows={4} 
              required
              className="w-full px-4 py-2 bg-brand-dark border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all duration-300"
            ></textarea>
          </div>
          
          <div className="text-center">
             <button 
                type="submit" 
                className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-semibold py-2 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
              >
              Send Message
            </button>
          </div>
        </motion.form>

        {result && <p className="text-center mb-8 text-brand-light">{result}</p>}
        
        <motion.div variants={itemVariant} className="flex justify-center items-center gap-6 md:gap-8">
          <a href="mailto:Denakerja@gmail.com" className="text-brand-muted hover:text-brand-light transition-colors duration-300 group" aria-label="Email">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:scale-110 transition-transform duration-300"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
          <a href="https://www.linkedin.com/in/dena-surya-gumilah-b24030386" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-light transition-colors duration-300 group" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:scale-110 transition-transform duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/denasurya" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-light transition-colors duration-300 group" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:scale-110 transition-transform duration-300"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;