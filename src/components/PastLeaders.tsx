import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { PAST_LEADERS } from '../data/pastLeadersData';

// Dynamic Auto-Discovery of dedicated leader photos inside /public/assets/leaders/
const globLeaderPhotos = (import.meta as any).glob('/public/assets/leaders/*.{jpg,jpeg,png,webp,JPG,JPEG}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const PastLeaders: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [leaderPhotoMap, setLeaderPhotoMap] = useState<Record<string, string>>({});
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  useEffect(() => {
    // Build lookup map from filename (e.g. drauzio_varella.jpg)
    const map: Record<string, string> = {};
    Object.keys(globLeaderPhotos).forEach((path) => {
      const url = (globLeaderPhotos[path] as string) || path.replace('/public', '.');
      const filename = path.split('/').pop()?.toLowerCase().split('.')[0] || '';
      if (filename && filename !== 'readme') {
        map[filename] = url.startsWith('/') ? `.${url}` : url;
      }
    });
    setLeaderPhotoMap(map);
  }, []);

  // Convert vertical mouse wheel into horizontal scroll on the carousel
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheelHandler = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.5;
      }
    };

    el.addEventListener('wheel', onWheelHandler, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheelHandler);
    };
  }, []);

  useGSAP(() => {
    gsap.fromTo('.past-leaders-header', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.past-leaders-header',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.seamless-leader-card', 
      { y: 35, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.seamless-leaders-container',
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

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const currentProgress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(currentProgress);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section id="liderancas-anteriores" className="py-24 sm:py-32 bg-black text-white relative overflow-hidden">
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#0D6886]/10 blur-[200px] pointer-events-none" />

      {/* Centered Editorial Header */}
      <div className="past-leaders-header text-center max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
          LEGADO & TRAJETÓRIA NA ONU
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Personalidades que estiveram no SDGs.<br />
          <span className="text-white/80 font-light">Protagonismo em Nova York.</span>
        </h2>
        <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto leading-relaxed font-light">
          CEOs, conselheiros, atletas, artistas e diplomáticas de grande relevância internacional que já protagonizaram os painéis do SDGs in Brazil nas edições anteriores.
        </p>
      </div>

      {/* Seamless Carousel Container (0px Gap Aesthetic) */}
      <div className="seamless-leaders-container relative w-full">
        
        {/* Sleek Progress Indicator & Scroll Instruction (Sem setas) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#00A3E0] animate-pulse inline-block" />
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/60">
              Role o mouse ou arraste lateralmente
            </span>
          </div>
          <div className="w-32 sm:w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#00A3E0] via-[#FFD700] to-[#00FF41] rounded-full transition-all duration-150"
              style={{ width: `${Math.max(8, Math.min(100, scrollProgress))}%` }}
            />
          </div>
        </div>

        {/* 0px Gap Seamless Strip with Mouse Wheel & Drag Support */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-none w-full select-none ${
            isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PAST_LEADERS.map((leader, index) => {
            // Check if user uploaded a custom photo into public/assets/leaders/
            const key = leader.id.replace(/-/g, '_');
            const photoSrc = leaderPhotoMap[key] || leader.photo;

            return (
              <div
                key={leader.id}
                className="seamless-leader-card snap-start flex-shrink-0 w-full sm:w-[50%] md:w-[33.333%] lg:w-[25%] h-[520px] sm:h-[580px] relative overflow-hidden group cursor-pointer border-r border-white/10 last:border-r-0 bg-black"
              >
                {/* Full-Bleed High-Res Image with Smooth Zoom */}
                <img
                  src={photoSrc}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Seamless Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300 z-[1]" />

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8 z-10 flex flex-col justify-end">
                  {/* Minified Tag */}
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#00A3E0] uppercase block mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Main Leader Name */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight group-hover:text-[#00A3E0] transition-colors duration-300">
                    {leader.name}
                  </h3>

                  {/* Role & Company */}
                  <p className="text-xs sm:text-sm font-bold text-white/90 leading-snug mt-1 font-sans">
                    {leader.role}
                  </p>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {leader.company}
                  </p>

                  {/* Hover Expandable Bio Description */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden mt-3 pt-3 border-t border-white/20">
                    <p className="text-xs text-white/80 font-light leading-relaxed">
                      {leader.quote ? `“${leader.quote}”` : 'Personalidade de grande relevância no engajamento socioambiental e liderança na Sede da ONU em Nova York.'}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
