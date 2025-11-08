// app/components/Navbar.tsx
'use client';

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar: React.FC = () => {
  const [navBackground, setNavBackground] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 10) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const navLinks = [
    { to: "hero", label: "Beranda" },
    { to: "projects", label: "Proyek" },
    { to: "about", label: "Tentang Saya" },
    { to: "skills", label: "Keahlian" },
    { to: "contact", label: "Kontak" },
  ];

  const handleMobileMenuClick = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 300);
  };

  const renderNavLink = (link: { to: string, label: string }, isMobile: boolean = false) => {
    const offsetValue = link.to === 'contact' ? -70 : -100;
    return (
      <ScrollLink
        key={link.to} to={link.to} spy={true} smooth={true}
        offset={offsetValue} duration={800}
        className={`relative group cursor-pointer transition-colors duration-300 ${isMobile ? 'block w-full' : ''} text-brand-muted hover:text-white p-2 rounded-md border-2 border-transparent hover:border-brand-cyan`}
        activeClass="!text-brand-cyan border-brand-cyan"
        onClick={isMobile ? handleMobileMenuClick : undefined}
      >
        {link.label}
      </ScrollLink>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-brand-dark/90 backdrop-blur-lg shadow-lg ${!navBackground && !isMenuOpen ? 'md:bg-transparent md:shadow-none' : ''}`}>
      {/* --- PERUBAHAN DI SINI: Ditambahkan w-full --- */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* --- PERUBAHAN DI SINI: Ditambahkan flex-shrink-0 --- */}
          <ScrollLink to="hero" smooth={true} duration={800} className="cursor-pointer text-xl font-bold text-brand-light font-heading flex-shrink-0">
            Portofolio
          </ScrollLink>
          
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => renderNavLink(link))}
          </div>
          
          {/* --- PERUBAHAN DI SINI: Ditambahkan flex-shrink-0 --- */}
          <div className="md:hidden flex-shrink-0">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
              <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 text-center">
          {navLinks.map((link) => renderNavLink(link, true))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;