import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

export const Preloader: React.FC<Props> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div 
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[500] bg-black text-white flex flex-col justify-between p-8 sm:p-12 font-mono selection:bg-white selection:text-black"
        >
          {/* Top Info */}
          <div className="flex justify-between items-start text-[10px] text-slate-400 uppercase tracking-widest">
            <div>
              <span className="text-white font-bold block mb-1">SDGs IN BRAZIL 2026</span>
              <span>SEDE DAS NAÇÕES UNIDAS · NY</span>
            </div>
            <div className="text-right">
              <span className="text-white font-bold block mb-1">AGNU-81</span>
              <span>18 DE SETEMBRO DE 2026</span>
            </div>
          </div>

          {/* Center Brand */}
          <div className="flex flex-col items-center justify-center my-auto">
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="./assets/logo.png" 
              alt="SDGs in Brazil" 
              className="h-16 sm:h-24 w-auto object-contain mb-8 filter drop-shadow-2xl"
            />
            
            {/* Progress counter */}
            <div className="text-5xl sm:text-7xl font-extrabold text-white tracking-tighter mb-4">
              {Math.min(progress, 100)}%
            </div>

            <div className="w-48 sm:w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div 
                className="h-full bg-[#00A3E0]" 
                style={{ width: `${Math.min(progress, 100)}%` }} 
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <p className="text-[10px] text-slate-400 tracking-[0.25em] uppercase">
              Pacto Global da ONU - Rede Brasil
            </p>
          </div>

          {/* Bottom Lockup */}
          <div className="flex justify-between items-end text-[9px] text-slate-500 uppercase tracking-widest border-t border-white/10 pt-4">
            <span>RUMO A 2030</span>
            <span>EVIDÊNCIAS & IMPACTO REAL</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
