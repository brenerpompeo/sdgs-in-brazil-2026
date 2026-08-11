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
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20);
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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -460 : 460;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00A3E0]/10 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header & Carousel Navigation Controls */}
        <div className="gallery-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
              ACERVO OFICIAL · SEDE DA ONU NY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Galeria do Evento.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mt-2 font-light leading-relaxed">
              Deslize horizontalmente para explorar os registros do SDGs in Brazil em Nova York ({photos.length} fotos).
            </p>
          </div>

          {/* Navigation Controls (< > Buttons) */}
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border border-white/20 bg-black flex items-center justify-center text-white text-lg font-mono transition-all duration-300 ${
                canScrollLeft 
                  ? 'hover:bg-white hover:text-black hover:border-white cursor-pointer shadow-lg' 
                  : 'opacity-30 cursor-not-allowed'
              }`}
              aria-label="Anterior"
            >
              ←
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border border-white/20 bg-black flex items-center justify-center text-white text-lg font-mono transition-all duration-300 ${
                canScrollRight 
                  ? 'hover:bg-white hover:text-black hover:border-white cursor-pointer shadow-lg' 
                  : 'opacity-30 cursor-not-allowed'
              }`}
              aria-label="Próximo"
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Endless Horizontal Scroll Carousel Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 -mx-1 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="w-[300px] sm:w-[420px] aspect-[4/3] relative bg-black border border-white/10 hover:border-white/30 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 snap-start group cursor-pointer transition-colors duration-300"
            >
              {/* Photo Image with smooth scale */}
              <img
                src={photo.src}
                alt={`Registro SDGs in Brazil #${photo.id}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              {/* Seamless Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="relative z-10 p-6 flex flex-col justify-between h-full pointer-events-none">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 bg-black/70 backdrop-blur-xl text-[#00A3E0] rounded-full border border-white/10">
                    SEDE DA ONU NY
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 font-bold bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                    #{String(photo.id).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-white font-bold group-hover:text-[#00A3E0] transition-colors">
                    SDGs in Brazil 2025
                  </span>
                  <span className="text-[11px] font-mono text-slate-300 group-hover:text-white transition-colors">
                    Ampliar ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer indicator bar */}
        <div className="mt-8 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/10 pt-4">
          <span>{photos.length} REGISTROS OFICIAIS CARREGADOS DINAMICAMENTE</span>
          <span className="hidden sm:inline">DESLIZE OU USE AS SETAS PARA NAVEGAR</span>
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

      </div>
    </section>
  );
};
