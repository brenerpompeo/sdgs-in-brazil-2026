import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useI18n } from '../i18n/LanguageProvider';
import { localizeSession } from '../i18n/data';
import { SCHEDULE_DATA, SessionItem } from '../data/scheduleData';

// Dynamic Auto-Discovery of speaker photos in /public/assets/speakers/
const globSpeakerPhotos = (import.meta as any).glob('/public/assets/speakers/*.{jpg,jpeg,png,webp,JPG,JPEG}', {
  eager: true,
  query: '?url',
  import: 'default',
});

interface ScheduleProps {
  onSelectSession: (session: SessionItem) => void;
}


const getSpeakerPhotoKey = (name: string): string => {
  const n = name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .trim();
  if (n.includes('sanda') || n.includes('ojiambo')) return 'sanda_ojiambo';
  if (n.includes('guilherme') || n.includes('xavier')) return 'guilherme_xavier';
  if (n.includes('gabriela') || n.includes('almeida')) return 'gabriela_almeida';
  if (n.includes('ana paula') || n.includes('carracedo')) return 'ana_paula_carracedo';
  if (n.includes('sergio') && n.includes('danese')) return 'sergio_danese';
  if (n.includes('eugenio') || n.includes('ricas')) return 'eugenio_ricas';
  if (n.includes('radames') || n.includes('casseb')) return 'radames_casseb';
  if (n.includes('calvin') || n.includes('lawrence')) return 'calvin_lawrence';
  if (n.includes('renata') || n.includes('piazzon')) return 'renata_piazzon';
  if (n.includes('kaveh') || n.includes('madani')) return 'kaveh_madani';
  if (n.includes('luciana') || n.includes('nicola')) return 'luciana_nicola';
  return n.replace(/\s+/g, '_');
};

export const Schedule: React.FC<ScheduleProps> = ({ onSelectSession }) => {
  const { t, locale } = useI18n();
  const [period, setPeriod] = useState<'all' | 'manha' | 'tarde'>('all');
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

  const periods = [
    { key: 'all', label: t.schedule.periods.all },
    { key: 'manha', label: t.schedule.periods.manha },
    { key: 'tarde', label: t.schedule.periods.tarde },
  ] as const;

  const localized = SCHEDULE_DATA.map((s) => localizeSession(s, locale));
  const filtered = period === 'all' ? localized : localized.filter(s => s.period === period);

  useGSAP(() => {
    gsap.fromTo('.schedule-header', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.schedule-header',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.schedule-row', 
      { y: 25, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.schedule-timeline',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.06,
        ease: 'power3.out',
      }
    );
  }, [period]);

  return (
    <section id="programacao" className="py-14 sm:py-20 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00A3E0]/10 blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Editorial Header */}
        <div className="schedule-header text-center max-w-4xl mx-auto mb-10">
          <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
            {t.schedule.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.schedule.title}<br />
            <span className="text-slate-300 font-light font-sans">{t.schedule.titleAccent}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
            {t.schedule.subtitle}
          </p>
        </div>

        {/* Filter Tabs - Rounded Pills */}
        <div className="flex gap-2 justify-center flex-wrap mb-8">
          {periods.map(p => (
            <motion.button
              key={p.key}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPeriod(p.key as any)}
              className={`min-h-[40px] px-6 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 border flex items-center justify-center cursor-pointer ${
                period === p.key
                  ? 'bg-white text-black border-white shadow-xl'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {p.label}
            </motion.button>
          ))}
        </div>

        {/* Timeline Container with Rounded 3XL Outer Border */}
        <div className="schedule-timeline flex flex-col bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {filtered.map((session, index) => {
            const isBreak = session.type === 'Almoço';
            const pillar = t.schedule.pillars[session.id as keyof typeof t.schedule.pillars] || t.labels.defaultPillar;

            return (
              <motion.div
                key={session.id}
                whileHover={!isBreak ? { x: 6, backgroundColor: 'rgba(255, 255, 255, 0.03)' } : undefined}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                onClick={() => !isBreak && onSelectSession(session)}
                className={`schedule-row py-7 px-6 sm:px-8 border-b border-white/10 last:border-b-0 transition-all duration-300 ${
                  isBreak 
                    ? 'bg-white/[0.01] opacity-75 flex flex-col sm:flex-row items-center justify-between gap-4' 
                    : 'cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 group'
                }`}
              >
                {isBreak ? (
                  <>
                    <div className="flex items-center gap-4">
                      <span className="text-xl sm:text-2xl font-mono font-extrabold text-white">
                        {session.timeStart} – {session.timeEnd}
                      </span>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-slate-300 uppercase px-3 py-1 bg-white/10 rounded-full border border-white/10">
                        {t.labels.sessionType[session.type]}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white tracking-wide text-center sm:text-right">
                      {session.title}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Time & Session Type */}
                    <div className="flex md:flex-col justify-between items-start md:w-52 flex-shrink-0 gap-2">
                      <span className="text-lg sm:text-2xl font-mono font-extrabold text-white">
                        {session.timeStart} <span className="text-xs text-slate-400 font-light mx-0.5">–</span> {session.timeEnd}
                      </span>
                      
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[9px] font-mono font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-[#00A3E0]/20 text-[#00A3E0] border border-[#00A3E0]/40">
                          {t.labels.sessionType[session.type]}
                        </span>
                        <span className="text-[9px] font-mono font-medium tracking-wider text-slate-400">
                          {pillar}
                        </span>
                      </div>
                    </div>

                    {/* Main Title & Description */}
                    <div className="flex-1 md:px-6">
                      <h3 className="text-lg sm:text-2xl font-extrabold text-white leading-snug mb-1 group-hover:text-[#00A3E0] transition-colors">
                        {session.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-light line-clamp-2 leading-relaxed">
                        {session.description}
                      </p>
                    </div>

                    {/* Speaker Avatar Badges & Full Names */}
                    <div className="flex items-center justify-between md:flex-col md:items-end flex-shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-white/10 gap-3">
                      {session.speakerNamesRaw && session.speakerNamesRaw.length > 0 && (
                        <div className="flex flex-col gap-1.5 md:items-end max-w-[280px] sm:max-w-[320px]">
                          {session.speakerNamesRaw.map((sp, sIdx) => {
                            const nameClean = sp.split(' (')[0];
                            const key = getSpeakerPhotoKey(nameClean);
                            const photoSrc = speakerPhotoMap[key];
                            const initial = nameClean.charAt(0);

                            return (
                              <div key={sIdx} className="flex items-center gap-2 text-xs text-white font-mono">
                                {photoSrc ? (
                                  <img
                                    src={photoSrc}
                                    alt={nameClean}
                                    className="w-6 h-6 rounded-full object-cover border border-[#00A3E0]/60 flex-shrink-0 shadow-md"
                                  />
                                ) : (
                                  <div className="w-6 h-6 rounded-full bg-[#00A3E0]/20 border border-[#00A3E0]/40 flex items-center justify-center text-[10px] font-extrabold text-[#00A3E0] flex-shrink-0 font-mono">
                                    {initial}
                                  </div>
                                )}
                                <span className="font-medium truncate text-slate-200">
                                  {nameClean}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      <span className="text-[11px] font-mono text-[#00A3E0] group-hover:text-white font-bold tracking-wider uppercase flex items-center gap-1 mt-1 transition-colors">
                        {t.labels.viewDetails}
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
