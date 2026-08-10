import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070f] border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Logo and brief */}
        <div className="flex flex-col items-center gap-4">
          <img 
            src="./assets/logo.png" 
            alt="SDGs in Brazil Logo" 
            className="h-10 sm:h-12 w-auto object-contain opacity-80"
          />
          <p className="text-xs text-white/60 max-w-sm leading-relaxed font-light px-2">
            O principal fórum de lideranças empresariais do Brasil na sede das Nações Unidas, Nova York.
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs font-bold text-white/70 tracking-wider uppercase font-mono">
          <motion.a whileHover={{ color: '#ffffff' }} href="#sobre" className="min-h-[44px] flex items-center px-2">Sobre</motion.a>
          <motion.a whileHover={{ color: '#ffffff' }} href="#programacao" className="min-h-[44px] flex items-center px-2">Programação</motion.a>
          <motion.a whileHover={{ color: '#ffffff' }} href="#palestrantes" className="min-h-[44px] flex items-center px-2">Palestrantes</motion.a>
          <motion.a whileHover={{ color: '#ffffff' }} href="#local" className="min-h-[44px] flex items-center px-2">Localização</motion.a>
        </div>

        {/* Sponsor/Realizers Lockup (marcas.png) */}
        <div className="w-full max-w-[440px] border-t border-white/10 pt-8 opacity-80 hover:opacity-100 transition-opacity duration-200">
          <img 
            src="./assets/marcas.png" 
            alt="Marcas: Pacto Global, AYA, Aegea, Missão ONU" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Rights */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/50 font-light">
          <p>© 2026 SDGs in Brazil. Pacto Global da ONU - Rede Brasil. Todos os direitos reservados.</p>
          <div className="flex gap-4 font-mono uppercase tracking-widest text-[9px] text-white/60">
            <span>18 ODS</span>
            <span>Agenda 2030</span>
            <span>AGNU-81</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
