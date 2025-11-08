// app/components/Button.tsx
'use client';

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface Props {
  href: string;
  // Perbaikan ada di baris di bawah ini
  children: React.ReactNode; 
  isExternal?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Button: React.FC<Props> = ({ href, children, isExternal = false, onClick }) => {
  const buttonClasses = "inline-block font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 bg-slate-800 border-slate-700 text-brand-muted hover:text-white hover:border-brand-cyan";

  if (isExternal || onClick) {
    return (
      <a 
        href={href} 
          // --- INI PERBAIKANNYA ---
        target={isExternal ? "_blank" : "_self"} 
        rel={isExternal ? "noopener noreferrer" : ""}
          // ------------------------
        onClick={onClick} 
        className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <ScrollLink 
      to={href.replace('#', '')} 
      smooth={true} 
      duration={500} 
      offset={-70} 
      className={`${buttonClasses} cursor-pointer`}
    >
      {children}
    </ScrollLink>
  );
};

export default Button;