// app/components/AnimatedDivider.tsx
'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const AnimatedDivider: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <div ref={ref} className="my-20">
      <motion.div
        className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-brand-purple to-brand-cyan"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          transformOrigin: 'left',
        }}
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1 },
        }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        // --- NILAI Easing YANG SALAH SUDAH DIPERBAIKI DI SINI ---
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
      />
    </div>
  );
};