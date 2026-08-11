import React from 'react';
import { motion } from 'framer-motion';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00A3E0]/10 blur-[200px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-4 font-mono">
          18 DE SETEMBRO DE 2026 · SEDE DA ONU NY
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          Faça Parte da Delegação Empresarial Brasileira na ONU.
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-light leading-relaxed mb-10">
          Garanta seu interesse e conecte sua corporação às maiores oportunidades globais de impacto, integridade e governança sustentável.
        </p>

        <div className="flex justify-center font-mono">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://sdgs2026.cadastro9.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[54px] px-10 py-4 bg-white text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-2xl hover:bg-gray-100 flex items-center justify-center transition-colors text-center"
          >
            TENHO INTERESSE EM PARTICIPAR →
          </motion.a>
        </div>
      </div>
    </section>
  );
};
