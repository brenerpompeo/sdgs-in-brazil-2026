import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-white/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00A3E0]/10 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 text-center relative z-10">
        
        {/* 1. Realização & Chancelaria Oficial (Extra Large Logos Lockup) */}
        <div className="w-full max-w-5xl mx-auto pb-12 border-b border-white/10">
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.3em] text-[#00A3E0] uppercase block mb-6">
            REALIZAÇÃO & CHANCELARIA OFICIAL
          </span>
          <div className="p-8 sm:p-12 md:p-14 bg-white/[0.03] backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl overflow-hidden">
            <img 
              src="./assets/marcas.png" 
              alt="Marcas: Pacto Global da ONU - Rede Brasil, AYA, Aegea, Missão do Brasil na ONU" 
              className="w-full max-w-4xl h-auto object-contain mx-auto filter drop-shadow-2xl brightness-125 scale-100 sm:scale-105 md:scale-110 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* 2. Logo and Brief Description */}
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

        {/* 3. Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-xs font-mono font-bold text-white/75 tracking-widest uppercase">
          <motion.a whileHover={{ color: '#ffffff' }} href="#sobre" className="hover:text-white transition-colors">Sobre</motion.a>
          <motion.a whileHover={{ color: '#ffffff' }} href="#programacao" className="hover:text-white transition-colors">Programação</motion.a>
          <motion.a whileHover={{ color: '#ffffff' }} href="#palestrantes" className="hover:text-white transition-colors">Palestrantes</motion.a>
          <motion.a whileHover={{ color: '#ffffff' }} href="#patrocinio" className="hover:text-white transition-colors">Patrocínio</motion.a>
          <motion.a whileHover={{ color: '#ffffff' }} href="#local" className="hover:text-white transition-colors">Localização</motion.a>
        </div>

        {/* 4. Back to Top Button & Copyright (At the very bottom) */}
        <div className="w-full border-t border-white/10 pt-10 flex flex-col items-center gap-8">
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-full border border-white/10 text-xs font-mono font-bold tracking-widest uppercase transition-colors flex items-center gap-2 cursor-pointer"
          >
            Voltar ao topo ↑
          </motion.button>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/50 font-mono pt-6 border-t border-white/5">
            <p>© 2026 SDGs in Brazil · Pacto Global da ONU - Rede Brasil. Todos os direitos reservados.</p>
            <div className="flex flex-wrap justify-center items-center gap-4 uppercase tracking-widest text-[9px] text-white/40">
              <button 
                onClick={() => (window as any).sendAdoptCommand?.('open')} 
                className="hover:underline text-[#00A3E0] hover:text-white cursor-pointer font-bold uppercase tracking-widest text-[9px] transition-colors"
              >
                Preferências de Cookies
              </button>
              <span>·</span>
              <span>18 ODS</span>
              <span>·</span>
              <span>AGENDA 2030</span>
              <span>·</span>
              <span>AGNU-81</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
