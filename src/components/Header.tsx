import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const nav = ['Sobre', 'Programação', 'Palestrantes', 'Localização'];
  const anchors = ['#sobre', '#programacao', '#palestrantes', '#local'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo and Text */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group min-h-[44px]"
        >
          <img 
            src="./assets/logo.png" 
            alt="SDGs in Brazil Logo" 
            className="h-8 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
            loading="eager"
          />
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs font-extrabold text-white tracking-widest uppercase font-mono">
              SDGs in Brazil
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono font-bold text-white/60 tracking-wider uppercase">
              18 SET · SEDE DA ONU · NY
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item, i) => (
            <a 
              key={item} 
              href={anchors[i]} 
              onClick={(e) => handleNavClick(e, anchors[i])}
              className="text-xs font-mono font-bold text-white/80 hover:text-white tracking-widest uppercase transition-colors duration-150 py-2"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <motion.a 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://sdgs2026.cadastro9.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-6 py-2.5 bg-white text-black hover:bg-gray-100 font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-md transition-colors duration-200 flex items-center justify-center font-mono"
          >
            Tenho Interesse
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)} 
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-white/80 hover:text-white transition-colors duration-150 p-2"
          aria-label="Toggle Navigation Menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.button>
      </div>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {nav.map((item, i) => (
                <a 
                  key={item} 
                  href={anchors[i]} 
                  onClick={(e) => handleNavClick(e, anchors[i])}
                  className="min-h-[44px] flex items-center text-xs font-mono font-bold text-white/90 hover:text-white tracking-widest uppercase py-2 border-b border-white/10"
                >
                  {item}
                </a>
              ))}
              <motion.a 
                whileTap={{ scale: 0.97 }}
                href="https://sdgs2026.cadastro9.com.br"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)} 
                className="mt-4 w-full min-h-[48px] py-3.5 bg-white text-black hover:bg-gray-100 font-extrabold text-xs tracking-wider uppercase rounded-xl transition-colors duration-150 flex items-center justify-center font-mono text-center"
              >
                Tenho Interesse
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
