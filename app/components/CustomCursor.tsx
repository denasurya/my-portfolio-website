// app/components/CustomCursor.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  // State untuk melacak apakah kursor sedang hover di atas link/tombol
  const [isHovering, setIsHovering] = useState(false);

  // Gunakan useMotionValue untuk update posisi tanpa re-render
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Gunakan useSpring untuk membuat gerakan lebih halus (efek 'jelly')
  const springConfig = { damping: 35, stiffness: 700 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Fungsi untuk update posisi kursor
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    // Deteksi hover pada elemen yang bisa diklik
    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest('a, button')) {
        setIsHovering(true);
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest('a, button')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  // Varian untuk animasi kursor
  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(56, 189, 248, 0.5)', // Warna brand-cyan transparan
      border: '2px solid #38BDF8',
    },
    hovering: {
      scale: 1.0,
      backgroundColor: 'rgba(167, 139, 250, 0.5)', // Warna brand-purple transparan
      border: '2px solid #A78BFA',
    },
  };

  return (
    <motion.div
      className="custom-cursor"
      style={{
        translateX: springX,
        translateY: springY,
      }}
      variants={cursorVariants}
      animate={isHovering ? 'hovering' : 'default'}
      transition={{ duration: 0.15 }}
    />
  );
};

export default CustomCursor;