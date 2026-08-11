import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SPEAKERS_DATA, Speaker } from '../data/speakersData';

// Dynamic Auto-Discovery of speaker photos in /public/assets/speakers/
const globSpeakerPhotos = (import.meta as any).glob('/public/assets/speakers/*.{jpg,jpeg,png,webp,JPG,JPEG}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [speakerPhotoMap, setSpeakerPhotoMap] = useState<Record<string, string>>({});

  useEffect(() => {
    const map: Record<string, string> = {};
    Object.keys(globSpeakerPhotos).forEach((path) => {
      const url = (globSpeakerPhotos[path] as string) || path.replace('/public', '.');
      const filename = path.split('/').pop()?.toLowerCase().split('.')[0] || '';
      if (filename && filename !== 'readme') {
        map[filename] = url.startsWith('/') ? `.${url}` : url;
      }
    });
    setSpeakerPhotoMap(map);
  }, []);

  useGSAP(() => {
    gsap.fromTo('.speakers-header', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.speakers-header',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.speaker-seamless-card', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.speakers-seamless-grid',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      }
    );
  }, [activeCategory]);

  const categories = ['Todos', 'Keynote', 'Painelista', 'Moderador', 'Liderança Institucional'];

  const filteredSpeakers = activeCategory === 'Todos'
    ? SPEAKERS_DATA
    : SPEAKERS_DATA.filter(s => s.category === activeCategory);

  return (
    <section id="palestrantes" className="py-24 sm:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Soft Radial Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00A3E0]/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header */}
        <div className="speakers-header text-center max-w-4xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
            ORADORES DO EVENTO · SEDE ONU NY
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Palestrantes & Lideranças.<br />
            <span className="text-slate-300 font-light font-sans text-xl sm:text-3xl block mt-2">
              Vozes que moldam o futuro do setor privado e da sustentabilidade global.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
            Especialistas multilaterais, executivos C-Suite e autoridades internacionais reunidos na Assembleia Geral das Nações Unidas.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14 font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 text-[11px] font-bold tracking-wider uppercase rounded-full border transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-black border-white shadow-xl'
                  : 'bg-black/60 text-slate-400 border-white/10 hover:border-white/30 hover:text-white backdrop-blur-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Seamless Grid (Square Portrait Cards) */}
        <div className="speakers-seamless-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {filteredSpeakers.map((speaker, idx) => {
            const key = speaker.id.replace(/-/g, '_');
            const photoSrc = speakerPhotoMap[key] || speaker.image || `./assets/sdgs_2025/sdgs_2025_${(idx % 30) + 1}.jpg`;

            return (
              <div
                key={speaker.id}
                onClick={() => setSelectedSpeaker(speaker)}
                className="speaker-seamless-card flex flex-col justify-between p-6 sm:p-8 border-b sm:border-r border-white/10 last:border-r-0 group cursor-pointer relative h-[420px] sm:h-[460px] overflow-hidden bg-black transition-colors duration-300"
              >
                {/* Full-Bleed Background Portrait */}
                <img
                  src={photoSrc}
                  alt={speaker.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:opacity-95 transition-opacity duration-300 z-[1]" />

                {/* Card Content Overlay */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Top Meta */}
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-[#00A3E0] uppercase px-2.5 py-1 bg-black/70 backdrop-blur-xl rounded border border-white/10">
                      {speaker.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-300">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Bottom Information */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight group-hover:text-[#00A3E0] transition-colors duration-300 mb-1">
                      {speaker.name}
                    </h3>

                    <p className="text-xs font-bold text-slate-200 leading-snug">
                      {speaker.role}
                    </p>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">
                      {speaker.company}
                    </p>

                    {/* Hover Hint */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden mt-3 pt-2 border-t border-white/20">
                      <span className="text-[11px] font-mono text-white flex items-center justify-between font-bold">
                        <span>Ver Bio Completa</span>
                        <span>↗</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Speaker Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <div
            onClick={() => setSelectedSpeaker(null)}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="max-w-2xl w-full bg-black border border-white/20 rounded-3xl overflow-hidden shadow-2xl relative text-white p-6 sm:p-10 font-sans"
            >
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center border border-white/20 font-mono transition-colors"
                aria-label="Fechar"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#00A3E0] uppercase px-3 py-1 bg-white/10 rounded-full border border-white/10">
                  {selectedSpeaker.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
                {selectedSpeaker.name}
              </h3>
              <p className="text-sm sm:text-base font-bold text-[#00A3E0] mb-1">
                {selectedSpeaker.role}
              </p>
              <p className="text-xs font-mono text-slate-400 mb-6">
                {selectedSpeaker.company}
              </p>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">
                  BIOGRAFIA & ATUAÇÃO
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {selectedSpeaker.bio}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="min-h-[44px] px-6 py-2.5 bg-white text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
