import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { OFFICIAL_GALLERY_2025, GalleryPhoto } from '../data/gallery2025Data';

export const Gallery2025: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('Todos');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const categories = ['Todos', 'Plenária', 'Painéis', 'Lideranças', 'Discursos', 'Multilateral'];

  const filtered = selectedCat === 'Todos'
    ? OFFICIAL_GALLERY_2025
    : OFFICIAL_GALLERY_2025.filter(p => p.category === selectedCat);

  const visiblePhotos = filtered.slice(0, visibleCount);

  useGSAP(() => {
    gsap.fromTo('.gallery-header', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.gallery-header',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.seamless-gallery-card', 
      { y: 25, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.seamless-gallery-grid',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.04,
        ease: 'power3.out',
      }
    );
  }, [selectedCat, visibleCount]);

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#00A3E0]/10 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Editorial Header */}
        <div className="gallery-header text-center max-w-4xl mx-auto mb-14">
          <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
            ACERVO OFICIAL 2025 · SEDE DA ONU NY
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Galeria do Evento.<br />
            <span className="text-slate-300 font-light font-sans">Registros em Alta Definição.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
            Seleção exclusiva de 71 imagens oficiais capturadas durante os debates, discursos e painéis do SDGs in Brazil na sede das Nações Unidas.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 justify-center flex-wrap mb-12">
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setSelectedCat(cat); setVisibleCount(12); }}
              className={`min-h-[40px] px-6 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 border flex items-center justify-center ${
                selectedCat === cat
                  ? 'bg-white text-black border-white shadow-xl'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Seamless Gallery Grid (Borderless 0px Gap) */}
        <div className="seamless-gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/10 rounded-3xl overflow-hidden shadow-2xl bg-black">
          {visiblePhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActivePhoto(photo)}
              className="seamless-gallery-card aspect-square relative bg-black border-r border-b border-white/10 group cursor-pointer overflow-hidden flex flex-col justify-between p-6"
            >
              {/* Photo Image with smooth scale */}
              <img
                src={photo.src}
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 bg-black/70 backdrop-blur-xl text-[#00A3E0] rounded-full border border-white/10">
                    {photo.tag}
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 font-bold bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug group-hover:text-[#00A3E0] transition-colors drop-shadow-md">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-300 mt-1 uppercase tracking-wider">
                    Clique para Ampliar 🔍
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filtered.length && (
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="min-h-[48px] px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs tracking-widest uppercase rounded-full border border-white/20 transition-colors shadow-lg"
            >
              Carregar Mais Fotos ({filtered.length - visibleCount} restantes) ↓
            </motion.button>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activePhoto && (
            <div
              onClick={() => setActivePhoto(null)}
              className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                onClick={e => e.stopPropagation()}
                className="max-w-5xl w-full bg-black border border-white/20 rounded-3xl overflow-hidden shadow-2xl relative text-white"
              >
                <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={activePhoto.src}
                    alt={activePhoto.title}
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={() => setActivePhoto(null)}
                    className="absolute top-4 right-4 min-w-[44px] min-h-[44px] bg-black/70 hover:bg-black text-white text-lg rounded-full flex items-center justify-center border border-white/20 transition-colors font-mono"
                    aria-label="Fechar"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-black border-t border-white/10 font-mono">
                  <div>
                    <span className="text-[10px] font-bold text-[#00A3E0] tracking-widest uppercase block mb-1">
                      {activePhoto.tag}
                    </span>
                    <h3 className="text-lg font-extrabold text-white">{activePhoto.title}</h3>
                  </div>

                  <a
                    href={activePhoto.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[40px] px-6 py-2 bg-white text-black font-extrabold text-xs tracking-wider uppercase rounded-xl hover:bg-slate-200 transition-colors text-center"
                  >
                    Abrir em Alta Resolução ↗
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
