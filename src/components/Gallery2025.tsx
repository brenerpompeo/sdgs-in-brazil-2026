import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// Dynamic Auto-Discovery of all images inside /public/assets/sdgs_2025/
// Whenever the user adds a new photo to public/assets/sdgs_2025/, Vite will automatically discover and load it!
const globImages = (import.meta as any).glob('/public/assets/sdgs_2025/*.{jpg,jpeg,png,webp,JPG,JPEG}', {
  eager: true,
  query: '?url',
  import: 'default',
});

interface PhotoItem {
  id: number;
  src: string;
  filename: string;
}

export const Gallery2025: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    // Parse dynamically discovered images from the folder
    const loadedPhotos: PhotoItem[] = Object.keys(globImages)
      .sort((a, b) => {
        const numA = parseInt(a.replace(/[^0-9]/g, '')) || 0;
        const numB = parseInt(b.replace(/[^0-9]/g, '')) || 0;
        return numA - numB;
      })
      .map((path, idx) => {
        const url = (globImages[path] as string) || path.replace('/public', '.');
        const cleanUrl = url.startsWith('/') ? `.${url}` : url;
        const filename = path.split('/').pop() || `foto_${idx + 1}`;
        return {
          id: idx + 1,
          src: cleanUrl,
          filename,
        };
      });

    // Fallback if glob fails or is empty
    if (loadedPhotos.length === 0) {
      for (let i = 1; i <= 71; i++) {
        loadedPhotos.push({
          id: i,
          src: `./assets/sdgs_2025/sdgs_2025_${i}.jpg`,
          filename: `sdgs_2025_${i}.jpg`,
        });
      }
    }

    setPhotos(loadedPhotos);
  }, []);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
    }
    return () => el?.removeEventListener('scroll', checkScroll);
  }, [photos]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
  }, []);

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#00A3E0]/10 blur-[200px] pointer-events-none" />

      {/* Editorial Header */}
      <div className="gallery-header text-center max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
          ACERVO HISTÓRICO · SEDE DA ONU NY
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Registros da Nossa Última Edição.<br />
          <span className="text-slate-300 font-light font-sans text-xl sm:text-3xl block mt-2">
            Explore os momentos marcantes do SDGs in Brazil na Sede das Nações Unidas.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
          Seleção oficial em alta definição dos debates, discursos e reuniões multilaterais ({photos.length} registros).
        </p>
      </div>

      {/* Seamless Carousel Container (0px Gap Square Aesthetic) */}
      <div className="seamless-gallery-container relative w-full border-t border-b border-white/10 bg-black">
        
        {/* Scroll Controls Floating Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 border-b border-white/10 font-mono text-[11px] text-slate-400">
          <span className="uppercase tracking-widest">
            {photos.length} FOTOS OFICIAIS · DESLIZE HORIZONTALMENTE
          </span>
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-xl border border-white/10 cursor-pointer shadow-lg'
                  : 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed'
              }`}
              aria-label="Anterior"
            >
              ←
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'bg-white text-black hover:bg-slate-200 shadow-xl cursor-pointer'
                  : 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed'
              }`}
              aria-label="Próximo"
            >
              →
            </motion.button>
          </div>
        </div>

        {/* 0px Gap Seamless Horizontal Strip (Square Card Grid) */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none w-full cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="seamless-photo-card snap-start flex-shrink-0 w-full sm:w-[50%] md:w-[33.333%] lg:w-[25%] h-[440px] sm:h-[500px] relative overflow-hidden group cursor-pointer border-r border-white/10 last:border-r-0 bg-black rounded-none transition-colors duration-300"
            >
              {/* Full-Bleed Image with Smooth Scale */}
              <img
                src={photo.src}
                alt={`Registro Oficial #${photo.id}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              {/* Seamless Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 z-[1]" />

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#00A3E0] uppercase">
                    SEDE DA ONU NY
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-300">
                    #{String(photo.id).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight group-hover:text-[#00A3E0] transition-colors duration-300">
                  SDGs in Brazil 2025
                </h3>

                <p className="text-xs font-mono text-slate-300 mt-1 uppercase tracking-wider">
                  Registro Oficial de Painel
                </p>

                {/* Expand on hover hint */}
                <div className="max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden mt-3 pt-2 border-t border-white/20">
                  <span className="text-[11px] font-mono text-white flex items-center justify-between font-bold">
                    <span>Clique para Ampliar em HD</span>
                    <span>↗</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="max-w-5xl w-full bg-black border border-white/20 rounded-3xl overflow-hidden shadow-2xl relative text-white"
            >
              <div className="relative aspect-video sm:aspect-[16/10] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activePhoto.src}
                  alt={`Registro Oficial #${activePhoto.id}`}
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
                    SEDE DAS NAÇÕES UNIDAS · NOVA YORK
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-white">
                    Registro Oficial SDGs in Brazil #{activePhoto.id}
                  </h3>
                </div>

                <a
                  href={activePhoto.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-6 py-2.5 bg-white text-black font-extrabold text-xs tracking-wider uppercase rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center"
                >
                  Abrir Imagem Completa ↗
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
