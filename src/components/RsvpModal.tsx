import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props { isOpen: boolean; onClose: () => void; }

export const RsvpModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inp = (field: keyof typeof form, label: string, placeholder: string, type = 'text') => (
    <div key={field} className="flex flex-col gap-1.5">
      <label className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/60">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[field]}
        onChange={e => setForm(p => ({ ...p, [field]: e.target.value }))}
        required
        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-white text-sm focus:border-white/40 focus:outline-none transition-colors font-sans"
      />
    </div>
  );

  return (
    <AnimatePresence>
      <div 
        onClick={onClose} 
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          onClick={e => e.stopPropagation()} 
          className="bg-[#0d131f] border border-white/15 rounded-2xl p-6 sm:p-10 w-full max-w-lg shadow-2xl relative"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#0D6886]/20 border border-[#0D6886] flex items-center justify-center text-[#38bdf8] mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Pré-inscrição Enviada!</h2>
              <p className="text-sm text-white/70 leading-relaxed mb-8 font-light">
                Recebemos sua solicitação. Nossa equipe entrará em contato com as próximas etapas do credenciamento em breve.
              </p>
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose} 
                className="min-h-[44px] px-8 py-3 bg-white text-[#05070f] font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-md font-mono"
              >
                Fechar
              </motion.button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    Tenho Interesse
                  </h2>
                  <p className="text-xs text-white/60 mt-1 font-mono">
                    SDGs in Brazil 2026 · 18 Set · Sede ONU · NY
                  </p>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose} 
                  className="min-w-[44px] min-h-[44px] bg-white/10 hover:bg-white/20 rounded-full text-white text-lg flex items-center justify-center transition-colors"
                  aria-label="Fechar"
                >
                  ✕
                </motion.button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {inp('name', 'Nome Completo', 'Seu nome')}
                {inp('email', 'E-mail Corporativo', 'email@empresa.com', 'email')}
                {inp('company', 'Empresa / Organização', 'Nome da organização')}
                {inp('role', 'Cargo / Função', 'Diretor(a), CEO, etc.')}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit" 
                  className="mt-2 min-h-[48px] py-3.5 bg-[#0D6886] hover:bg-[#0A546D] text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-[#0D6886]/30 transition-colors flex items-center justify-center font-mono"
                >
                  Enviar Solicitação →
                </motion.button>
                <p className="text-[10px] text-white/40 text-center leading-relaxed font-mono">
                  Vagas sujeitas à análise. Evento exclusivo para lideranças C-Suite e alta gestão.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
