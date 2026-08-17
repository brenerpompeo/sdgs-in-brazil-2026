import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useI18n } from '../i18n/LanguageProvider';

/** Apenas o que é visual; textos vêm do dicionário de idioma. */
const EVENT_PHOTO_SOURCES = [
  './assets/sdgs_2025/sdgs_2025_2.jpg',
  './assets/sdgs_2025/sdgs_2025_5.jpg',
  './assets/sdgs_2025/sdgs_2025_8.jpg',
];

const FORCE_STYLES = [
  {
    accentColor: '#00A3E0',
    glowGradient: 'from-[#00A3E0]/30 via-[#0047FF]/15 to-transparent',
    borderColor: 'group-hover:border-[#00A3E0]/50',
    hoverGlow: 'group-hover:bg-[#00A3E0]/[0.04]',
  },
  {
    accentColor: '#FFD700',
    glowGradient: 'from-[#FFD700]/30 via-[#FF8C00]/15 to-transparent',
    borderColor: 'group-hover:border-[#FFD700]/50',
    hoverGlow: 'group-hover:bg-[#FFD700]/[0.04]',
  },
  {
    accentColor: '#00FF41',
    glowGradient: 'from-[#00FF41]/30 via-[#00A3E0]/15 to-transparent',
    borderColor: 'group-hover:border-[#00FF41]/50',
    hoverGlow: 'group-hover:bg-[#00FF41]/[0.04]',
  },
];

export const About: React.FC = () => {
  const { t } = useI18n();
  const [photoIndex, setPhotoIndex] = useState(0);

  // Auto slideshow for event photos
  useEffect(() => {
    const timer = setInterval(() => {
      setPhotoIndex(prev => (prev + 1) % EVENT_PHOTO_SOURCES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    gsap.fromTo('.about-header', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.about-header',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.about-stats-strip', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.about-stats-strip',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.about-bento-container', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.about-bento-container',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.force-seamless-card', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.forces-seamless-grid',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section id="sobre" className="relative py-14 sm:py-20 bg-black text-white overflow-hidden border-t border-white/10">
      {/* Soft Ambient Radial Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00A3E0]/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Editorial Header (Matching Schedule & Speakers) */}
        <div className="about-header text-center max-w-4xl mx-auto mb-10">
          <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
            {t.about.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.about.title}<br />
            <span className="text-slate-300 font-light font-sans text-xl sm:text-3xl block mt-2">
              {t.about.quote}
            </span>
          </h2>
        </div>

        {/* Seamless Editorial Stats Strip (Unified 3-Column Module) */}
        <div className="about-stats-strip grid grid-cols-1 md:grid-cols-3 bg-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-12">
          <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-white/10 text-center flex flex-col justify-center items-center hover:bg-white/[0.03] transition-colors duration-300">
            <span className="text-5xl sm:text-6xl font-extrabold font-mono text-[#00A3E0] block mb-2 tracking-tight">
              {t.about.stats[0].value}
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xs">
              {t.about.stats[0].label}
            </span>
          </div>

          <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-white/10 text-center flex flex-col justify-center items-center hover:bg-white/[0.03] transition-colors duration-300">
            <span className="text-5xl sm:text-6xl font-extrabold font-mono text-[#FFD700] block mb-2 tracking-tight">
              {t.about.stats[1].value}
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xs">
              {t.about.stats[1].label}
            </span>
          </div>

          <div className="p-8 sm:p-10 text-center flex flex-col justify-center items-center hover:bg-white/[0.03] transition-colors duration-300">
            <span className="text-5xl sm:text-6xl font-extrabold font-mono text-white block mb-2 tracking-tight">
              {t.about.stats[2].value}
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xs">
              {t.about.stats[2].label}
            </span>
          </div>
        </div>

        {/* Bento Grid: Unified Seamless Module (Diagnóstico + Photos) */}
        <div className="about-bento-container grid grid-cols-1 lg:grid-cols-12 bg-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-14">
          
          {/* Left Block: Editorial Narrative */}
          <div className="lg:col-span-6 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between relative bg-white/[0.01]">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#00A3E0] uppercase block mb-4">
                {t.about.diagnosisEyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 tracking-tight leading-snug">
                {t.about.diagnosisTitle}
              </h3>
              <p className="text-base text-white/95 leading-relaxed font-normal mb-6">
                {t.about.diagnosisP1Before}<strong className="text-[#00A3E0]">{t.about.diagnosisP1Highlight}</strong>{t.about.diagnosisP1After}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {t.about.diagnosisP2}
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>{t.about.metaVenue}</span>
              <span>{t.about.metaDate}</span>
            </div>
          </div>

          {/* Right Block: Event Photo Slideshow Module */}
          <div className="lg:col-span-6 relative aspect-square sm:aspect-auto sm:min-h-[460px] overflow-hidden group">
            {EVENT_PHOTO_SOURCES.map((src, idx) => (
              <div 
                key={src}
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out scale-100 group-hover:scale-105 transition-transform duration-700"
                style={{ 
                  backgroundImage: `url('${src}')`,
                  opacity: photoIndex === idx ? 1 : 0,
                  zIndex: photoIndex === idx ? 1 : 0,
                }}
              />
            ))}
            
            {/* Seamless Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-[2]" />

            {/* Content Overlay */}
            <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 bg-black/70 backdrop-blur-xl text-[#00A3E0] rounded-full border border-white/10">
                  {t.about.photos[photoIndex].tag}
                </span>
                <span className="text-xs font-mono text-slate-300 font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {t.about.officialRecord}
                </span>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-3 drop-shadow-xl">
                  “{t.about.photos[photoIndex].title}”
                </h4>
                <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-extrabold text-white">{t.about.brandCity}</h5>
                    <p className="text-xs font-mono text-[#00A3E0] font-bold mt-0.5">
                      {t.about.brandVenue}
                    </p>
                  </div>

                  <div className="flex gap-1.5">
                    {EVENT_PHOTO_SOURCES.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${photoIndex === i ? 'bg-[#00A3E0] w-5' : 'bg-white/30'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Três Forças - Seamless Editorial Strip (Unified 3-Column Module) */}
        <div>
          <div className="text-center max-w-4xl mx-auto mb-10">
            <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
              {t.about.forcesEyebrow}
            </span>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
              {t.about.forcesTitle}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
              {t.about.forcesSubtitle}
            </p>
          </div>

          {/* Unified Glassmorphic 3-Column Module */}
          <div className="forces-seamless-grid grid grid-cols-1 md:grid-cols-3 bg-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {FORCE_STYLES.map((style, i) => (
              <div
                key={i}
                className={`force-seamless-card flex flex-col justify-between p-8 sm:p-10 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 group cursor-pointer relative min-h-[440px] overflow-hidden bg-black/60 backdrop-blur-2xl transition-all duration-500 ${style.borderColor} ${style.hoverGlow}`}
              >
                {/* Ambient Color Glow 1 (Top-Left) */}
                <div 
                  className={`absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br ${style.glowGradient} blur-3xl opacity-50 group-hover:opacity-90 group-hover:scale-125 transition-all duration-700 pointer-events-none`} 
                />

                {/* Ambient Color Glow 2 (Bottom-Right) */}
                <div 
                  className={`absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-tl ${style.glowGradient} blur-3xl opacity-30 group-hover:opacity-75 group-hover:scale-125 transition-all duration-700 pointer-events-none`} 
                />

                {/* Subtle Glass Surface Overlay */}
                <div className="absolute inset-0 bg-white/[0.015] group-hover:bg-white/[0.03] transition-colors duration-500 z-[1] pointer-events-none" />

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Header Row */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase px-3.5 py-1.5 bg-white/10 rounded-full border border-white/15 backdrop-blur-md">
                        {t.about.forces[i].num}
                      </span>
                      <span 
                        className="text-xs font-mono font-bold tracking-wider uppercase transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: style.accentColor }}
                      >
                        {t.about.forces[i].tag}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h4 
                      className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug tracking-tight transition-colors duration-300"
                    >
                      {t.about.forces[i].title}
                    </h4>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {t.about.forces[i].desc}
                    </p>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                    <span>{t.about.forcesFooterLabel}</span>
                    <span 
                      className="font-bold tracking-wider transition-colors duration-300"
                      style={{ color: style.accentColor }}
                    >
                      {t.about.forcesFooterCta}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
