import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SessionItem } from '../data/scheduleData';

interface Props { session: SessionItem | null; onClose: () => void; }

export const SessionModal: React.FC<Props> = ({ session, onClose }) => {
  if (!session) return null;

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
          className="bg-[#0d131f] border border-white/15 rounded-2xl p-6 sm:p-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl relative"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-3 flex-wrap items-center">
              <span className="text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#0D6886]/20 border border-[#0D6886]/40 text-[#38bdf8]">
                {session.type}
              </span>
              <span className="text-xs font-mono font-bold text-white/70">
                {session.timeStart} – {session.timeEnd}
              </span>
            </div>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={onClose} 
              className="min-w-[44px] min-h-[44px] bg-white/10 hover:bg-white/20 rounded-full text-white text-lg flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="Fechar"
            >
              ✕
            </motion.button>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4 leading-snug">
            {session.title}
          </h2>

          <p className="text-sm text-white/80 leading-relaxed font-light mb-8">
            {session.description}
          </p>

          {/* Speakers */}
          {session.speakerNamesRaw && session.speakerNamesRaw.length > 0 && (
            <div className="mb-6">
              <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/50 mb-3">
                Participantes
              </p>
              <div className="flex flex-col gap-2">
                {session.speakerNamesRaw.map((s, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/10 font-mono"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#0D6886]/30 border border-[#0D6886] flex items-center justify-center text-[10px] font-extrabold text-[#38bdf8] flex-shrink-0">
                      {s.charAt(0)}
                    </div>
                    <span className="text-xs text-white/90 font-medium leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
