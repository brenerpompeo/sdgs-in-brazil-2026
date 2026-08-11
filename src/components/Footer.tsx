import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-white/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center">
        
        {/* Back to top button */}
        <motion.button
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-full border border-white/10 text-xs font-mono font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
        >
          Voltar ao topo ↑
        </motion.button>

        {/* Logo and brief */}
        <div className="flex flex-col items-center gap-4 max-w-md">
          <img 
            src="./assets/logo.png" 
            alt="SDGs in Brazil Logo" 
            className="h-12 sm:h-16 w-auto object-contain drop-shadow-md mx-auto"
            loading="lazy"
            decoding="async"
          />
          <p className="text-xs text-white/60 leading-relaxed font-light px-2">
            O principal fórum de lideranças empresariais do Brasil na Sede das Nações Unidas em Nova York durante a semana da AGNU-81.
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-xs font-mono font-bold text-white/75 tracking-widest uppercase">
          <motion.a whileHover={{ color: '#ffffff' }} href="#sobre" className="hover:text-white transition-colors">Sobre</motion.a>
          <motion.a whileHover={{ color: '#ffffff' }} href="#programacao" className="hover:text-white transition-colors">Programação</motion.a>
          <motion.a whileHover={{ color: '#ffffff' }} href="#palestrantes" className="hover:text-white transition-colors">Palestrantes</motion.a>
          <motion.a whileHover={{ color: '#ffffff' }} href="#patrocinio" className="hover:text-white transition-colors">Patrocínio</motion.a>
          <motion.a whileHover={{ color: '#ffffff' }} href="#local" className="hover:text-white transition-colors">Localização</motion.a>
        </div>

        {/* Sponsor/Realizers Lockup (marcas.png) */}
        <div className="w-full max-w-[480px] border-t border-white/10 pt-10 opacity-90 hover:opacity-100 transition-opacity">
          <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-white/40 uppercase block mb-4">
            REALIZAÇÃO & CHANCELARIA OFICIAL
          </span>
          <img 
            src="./assets/marcas.png" 
            alt="Marcas: Pacto Global da ONU - Rede Brasil, AYA, Aegea, Missão ONU" 
            className="w-full h-auto object-contain mx-auto"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Rights & Metadata */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/50 font-mono">
          <p>© 2026 SDGs in Brazil · Pacto Global da ONU - Rede Brasil. Todos os direitos reservados.</p>
          <div className="flex gap-4 uppercase tracking-widest text-[9px] text-white/40">
            <span>18 ODS</span>
            <span>·</span>
            <span>AGENDA 2030</span>
            <span>·</span>
            <span>AGNU-81</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
