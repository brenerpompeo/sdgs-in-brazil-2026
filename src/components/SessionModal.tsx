import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../i18n/LanguageProvider';
import { SessionItem } from '../data/scheduleData';

interface Props {
  session: SessionItem | null;
  onClose: () => void;
}

export const SessionModal: React.FC<Props> = ({ session, onClose }) => {
  const { t } = useI18n();
  if (!session) return null;

  return (
    <AnimatePresence>
      <div 
        onClick={onClose}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          onClick={e => e.stopPropagation()}
          className="bg-black border border-white/20 rounded-3xl p-6 sm:p-10 w-full max-w-xl shadow-2xl relative text-white"
        >
          {/* Header */}
          <div className="flex justify-between items-start gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono">
                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-white/10 text-white rounded-full">
                  {session.type}
                </span>
                <span className="text-xs font-bold text-white/60">
                  {session.timeStart} – {session.timeEnd}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight tracking-tight">
                {session.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] bg-white/10 hover:bg-white/20 rounded-full text-white text-lg flex items-center justify-center transition-colors flex-shrink-0 font-mono"
              aria-label={t.sessionModal.closeLabel}
            >
              ✕
            </button>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/50 mb-2">
              {t.sessionModal.aboutSession}
            </h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              {session.description}
            </p>
          </div>

          {/* Speakers */}
          {session.speakerNamesRaw && session.speakerNamesRaw.length > 0 && (
            <div className="mb-8 border-t border-white/10 pt-4">
              <h4 className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/50 mb-3">
                ORADORES PARTICIPANTES
              </h4>
              <div className="flex flex-col gap-2 font-mono text-xs">
                {session.speakerNamesRaw.map((sp, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-white/90">
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                    <span>{sp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer note */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/50">
            <span>{t.sessionModal.brand}</span>
            <span>{t.sessionModal.venue}</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
