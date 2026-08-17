import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useI18n } from '../i18n/LanguageProvider';

// Dynamic Auto-Discovery — reads unique photos from /public/assets/sdgs_2025/
const globImages = (import.meta as any).glob('/public/assets/sdgs_2025/*.{jpg,jpeg,png,webp,JPG,JPEG}', {
  eager: true,
  query: '?url',
  import: 'default',
});

interface PhotoItem {
  id: number;
  src: string;
}

const CARD_WIDTH = 420;
const CARD_GAP = 0;

export const Gallery2025: React.FC = () => {
  const { t } = useI18n();
  const trackRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  // Framer Motion drag value with spring physics
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 50, mass: 0.8 });

  // Progress bar: maps x from [-(trackWidth - containerWidth), 0] → [0, 1]
  const dragMax = Math.max(0, trackWidth - containerWidth);
  const progress = useTransform(x, [-dragMax, 0], [1, 0]);
  const progressWidth = useTransform(progress, [0, 1], ['0%', '100%']);

  // Interleave photos across 5 buckets so adjacent cards vary between room shots, speaker close-ups, panels, and audience
  useEffect(() => {
    const sortedPaths = Object.keys(globImages).sort((a, b) => {
      const nA = parseInt(a.replace(/\D/g, '')) || 0;
      const nB = parseInt(b.replace(/\D/g, '')) || 0;
      return nA - nB;
    });

    const rawList: PhotoItem[] = sortedPaths.map((path, idx) => {
      const url = (globImages[path] as string) || path.replace('/public', '.');
      return { id: idx + 1, src: url.startsWith('/') ? `.${url}` : url };
    });

    if (rawList.length === 0) {
      for (let i = 1; i <= 25; i++) {
        rawList.push({ id: i, src: `./assets/sdgs_2025/sdgs_2025_${i}.jpg` });
      }
    }

    // Interleave algorithm
    const numBuckets = 5;
    const bucketSize = Math.ceil(rawList.length / numBuckets);
    const interleaved: PhotoItem[] = [];

    for (let i = 0; i < bucketSize; i++) {
      for (let b = 0; b < numBuckets; b++) {
        const index = b * bucketSize + i;
        if (index < rawList.length) {
          interleaved.push(rawList[index]);
        }
      }
    }

    setPhotos(interleaved);
  }, []);

  // Measure dimensions for constraint calculation
  const measure = useCallback(() => {
    if (trackRef.current && constraintsRef.current) {
      setTrackWidth(trackRef.current.scrollWidth);
      setContainerWidth(constraintsRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [photos, measure]);

  // Button navigation: smooth snap to chunk
  const navigate = (dir: 'left' | 'right') => {
    const step = containerWidth * 0.75;
    const current = x.get();
    const max = -(trackWidth - containerWidth);
    const next = dir === 'right'
      ? Math.max(current - step, max)
      : Math.min(current + step, 0);
    x.set(next);
  };

  const xVal = x.get();
  const dragMaxComputed = Math.max(1, trackWidth - containerWidth);
  const canLeft = xVal < -5;
  const canRight = xVal > -(dragMaxComputed - 5);

  useGSAP(() => {
    gsap.fromTo('.gallery-header',
      { y: 30, opacity: 0 },
      {
        scrollTrigger: { trigger: '.gallery-header', start: 'top 85%' },
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section id="galeria" className="py-14 sm:py-20 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#00A3E0]/10 blur-[200px] pointer-events-none" />

      {/* ── Editorial Header ── */}
      <div className="gallery-header text-center max-w-4xl mx-auto px-4 sm:px-6 mb-10">
        <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
          {t.gallery.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-3">
          {t.gallery.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
          {t.gallery.subtitle(photos.length)}
        </p>
      </div>

      {/* ── Control Bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6 mb-5">
        {/* Progress bar */}
        <div className="flex-1 h-px bg-white/10 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#00A3E0] rounded-full origin-left"
            style={{ width: progressWidth }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          />
        </div>

        {/* Counter */}
        <span className="text-[11px] font-mono text-slate-400 tracking-widest uppercase shrink-0">
          {t.labels.photosCount(photos.length)}
        </span>

        {/* Arrow buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => navigate('left')}
            disabled={!canLeft}
            aria-label={t.gallery.prev}
            className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-200 font-mono text-sm
              ${canLeft
                ? 'border-white/20 text-white hover:bg-white hover:text-black hover:border-white'
                : 'border-white/5 text-white/20 cursor-not-allowed'}`}
          >
            ←
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => navigate('right')}
            disabled={!canRight}
            aria-label={t.gallery.next}
            className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-200 font-mono text-sm
              ${canRight
                ? 'bg-white border-white text-black hover:bg-slate-200'
                : 'border-white/5 text-white/20 cursor-not-allowed bg-transparent'}`}
          >
            →
          </motion.button>
        </div>
      </div>

      {/* ── Drag Track ── */}
      <div
        ref={constraintsRef}
        className="w-full overflow-hidden border-t border-b border-white/10 relative select-none"
      >
        <motion.div
          ref={trackRef}
          style={{ x: springX }}
          drag="x"
          dragConstraints={{
            left: -(dragMaxComputed),
            right: 0,
          }}
          dragElastic={0.08}
          dragMomentum={true}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className={`flex ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => { if (!isDragging) setActivePhoto(photo); }}
              className="group relative flex-shrink-0 bg-black overflow-hidden border-r border-white/10 last:border-r-0"
              style={{ width: CARD_WIDTH, height: 500 }}
            >
              {/* Photo */}
              <img
                src={photo.src}
                alt={t.gallery.photoAlt(photo.id)}
                className="w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                draggable={false}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 flex flex-col pointer-events-none">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#00A3E0] uppercase">
                    {t.labels.unHqNy}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-white/40">
                    #{String(photo.id).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-[#00A3E0] transition-colors duration-300">
                  SDGs in Brazil 2025
                </h3>

                <p className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                  {t.labels.officialRecord}
                </p>

                {/* Hover reveal */}
                <div className="max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300 overflow-hidden mt-3 pt-2.5 border-t border-white/10">
                  <span className="text-[11px] font-mono text-white font-bold flex items-center justify-between">
                    <span>{t.labels.zoomHd}</span>
                    <span>↗</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 24 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              onClick={e => e.stopPropagation()}
              className="max-w-5xl w-full bg-black border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <img
                  src={activePhoto.src}
                  alt={t.gallery.photoAlt(activePhoto.id)}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/80 hover:bg-black text-white text-sm rounded-full flex items-center justify-center border border-white/20 transition-colors"
                  aria-label={t.common.close}
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-white/10">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#00A3E0] tracking-widest uppercase block mb-1">
                    SEDE DAS NAÇÕES UNIDAS · NOVA YORK
                  </span>
                  <h3 className="text-base font-extrabold text-white font-mono">
                    Registro Oficial SDGs in Brazil #{activePhoto.id}
                  </h3>
                </div>
                <a
                  href={activePhoto.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-6 py-2.5 bg-white text-black font-extrabold text-xs tracking-wider uppercase rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center"
                >
                  Abrir em HD ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
