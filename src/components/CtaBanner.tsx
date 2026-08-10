import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  onOpenRsvp: () => void;
}

export const CtaBanner: React.FC<Props> = ({ onOpenRsvp }) => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#05070f] via-[#0d131f] to-[#05070f] border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0D6886]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-[11px] font-bold text-[#0D6886] tracking-[0.3em] uppercase block mb-4 font-mono">
          18 de Setembro de 2026 · Sede da ONU Nova York
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          Inscreva sua Liderança no Maior Evento ESG do Brasil na ONU
        </h2>

        <p className="text-sm sm:text-lg text-white/80 max-w-xl mx-auto font-light leading-relaxed mb-10">
          Garanta sua pré-inscrição e conecte sua corporação às maiores oportunidades globais de impacto e governança sustentável.
        </p>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenRsvp}
            className="min-h-[52px] px-10 py-4 bg-white text-[#05070f] font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-2xl hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            TENHO INTERESSE EM PARTICIPAR →
          </motion.button>
        </div>
      </div>
    </section>
  );
};
