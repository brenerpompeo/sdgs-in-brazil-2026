import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useI18n } from '../i18n/LanguageProvider';
import { localizeSpeaker } from '../i18n/data';
import { SPEAKERS_DATA, Speaker } from '../data/speakersData';

// Dynamic Auto-Discovery of speaker photos in /public/assets/speakers/
const globSpeakerPhotos = (import.meta as any).glob('/public/assets/speakers/*.{jpg,jpeg,png,webp,JPG,JPEG}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const getSpeakerPhotoKey = (idOrName: string): string => {
  return idOrName.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s_]/g, '')
    .trim()
    .replace(/\s+/g, '_');
};

const SpeakerCard = ({ speaker, index, photoMap, className = '' }: { speaker: Speaker; index: number; photoMap: Record<string, string>; className?: string }) => {
  const { t } = useI18n();
  const initials = speaker.name
    .split(' ')
    .filter(n => !['Embaixador', 'de', 'do', 'da'].includes(n))
    .slice(0, 2)
    .map(w => w[0])
    .join('');

  const keyById = speaker.id.replace(/-/g, '_');
  const keyByName = getSpeakerPhotoKey(speaker.name);
  const photoSrc = speaker.image || photoMap[keyById] || photoMap[keyByName];

  return (
    <motion.div 
      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
      transition={{ duration: 0.3 }}
      className={`seamless-speaker-card flex flex-col justify-between p-7 sm:p-8 bg-black border-r border-b border-white/10 group cursor-pointer ${className}`}
    >
      <div>
        {/* Top Monospaced Tag */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#00A3E0] uppercase">
            0{index + 1} · {speaker.category}
          </span>
          <span className="text-[9px] font-mono text-slate-400 uppercase">
            SEDE ONU NY
          </span>
        </div>

        {/* Head row with photo image or initials fallback */}
        <div className="flex items-center gap-4 mb-5">
          {photoSrc ? (
            <img 
              src={photoSrc} 
              alt={speaker.name} 
              className="w-16 h-16 rounded-full object-cover border border-white/20 shadow-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#00A3E0]/20 border border-[#00A3E0]/40 text-[#00A3E0] font-extrabold text-base tracking-tight shadow-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-500 font-mono">
              {initials}
            </div>
          )}

          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight group-hover:text-[#00A3E0] transition-colors">
              {speaker.name}
            </h3>
            <div className="text-xs font-bold text-slate-200 leading-snug mt-1 font-sans">
              {speaker.role}
            </div>
            <div className="text-xs font-mono text-slate-400 leading-snug mt-0.5">
              {speaker.company}
            </div>
          </div>
        </div>

        {/* Expandable Bio Description */}
        <p className="text-xs text-slate-300 leading-relaxed font-light mt-3 line-clamp-3 group-hover:line-clamp-none transition-all">
          {speaker.bio}
        </p>
      </div>

      <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>{t.speakers.brandLabel}</span>
        <span>2026</span>
      </div>
    </motion.div>
  );
};

export const Speakers: React.FC = () => {
  const { t, locale } = useI18n();
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

    gsap.fromTo('.seamless-speaker-card', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.seamless-speakers-grid',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.06,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section id="palestrantes" className="py-14 sm:py-20 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#00A3E0]/10 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Editorial Header */}
        <div className="speakers-header text-center max-w-4xl mx-auto mb-10">
          <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
            {t.speakers.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.speakers.title}<br />
            <span className="text-slate-300 font-light font-sans">{t.speakers.titleAccent}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
            {t.speakers.subtitle}
          </p>
        </div>

        {/* Seamless Grid Container with Rounded-3xl Geometry */}
        <div className="seamless-speakers-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/10 rounded-3xl overflow-hidden shadow-2xl bg-black">
          {SPEAKERS_DATA.map((raw, idx) => (
            <SpeakerCard key={raw.id} speaker={localizeSpeaker(raw, locale)} index={idx} photoMap={speakerPhotoMap} className="speaker-card" />
          ))}
        </div>

      </div>
    </section>
  );
};
