import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const VENUE_DETAILS = [
  { 
    icon: (
      <svg className="w-5 h-5 text-[#0D6886]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ), 
    title: 'Endereço Oficial', 
    detail: '405 E 42nd St\nNew York, NY 10017\nEstados Unidos' 
  },
  { 
    icon: (
      <svg className="w-5 h-5 text-[#5F3469]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ), 
    title: 'Data & Horário', 
    detail: '18 de Setembro de 2026\n10:00 às 20:30 (EDT)\nSemana da AGNU-81' 
  },
  { 
    icon: (
      <svg className="w-5 h-5 text-[#0D6886]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ), 
    title: 'Como Acessar', 
    detail: 'JFK ou EWR Airport\nMetrô: Linhas 4, 5, 6, 7 (42nd St)\nCredenciamento prévio obrigatório' 
  },
  { 
    icon: (
      <svg className="w-5 h-5 text-[#5F3469]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ), 
    title: 'Segurança ONU', 
    detail: 'Acesso restrito ao complexo\nCheck-in inicia às 09:30\nTrazer passaporte físico' 
  },
];

export const Venue: React.FC = () => {
  useGSAP(() => {
    gsap.fromTo('.venue-header', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.venue-header',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.venue-map', 
      { scale: 0.95, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.venue-map',
          start: 'top 85%',
        },
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.venue-card', 
      { x: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.venue-cards-list',
          start: 'top 85%',
        },
        x: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section id="local" className="py-24 sm:py-28 bg-[#05070f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="venue-header text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-[#5F3469] tracking-[0.3em] uppercase block mb-3 font-mono">
            Localização e Logística
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Sede das Nações Unidas
          </h2>
          <p className="text-sm text-white/50 max-w-md mx-auto leading-relaxed font-light px-2">
            Salões principais do complexo oficial da ONU em Manhattan, Nova York.
          </p>
        </div>

        {/* Map and Info split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map */}
          <div className="venue-map lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[340px] sm:h-[380px] relative">
            <iframe
              title="United Nations Headquarters - NY Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://www.openstreetmap.org/export/embed.html?bbox=-73.9710%2C40.7460%2C-73.9620%2C40.7530&layer=mapnik&marker=40.7495%2C-73.9678"
              className="absolute inset-0 grayscale invert contrast-[85%] opacity-80"
            />
          </div>

          {/* Details list */}
          <div className="venue-cards-list lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {VENUE_DETAILS.map((d, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="venue-card p-5 sm:p-6 bg-gradient-to-br from-[#0d131f]/80 to-[#070b14] border border-white/5 hover:border-white/20 rounded-xl flex items-start gap-4 shadow-lg"
              >
                <div className="p-2.5 bg-white/5 rounded-lg flex-shrink-0">
                  {d.icon}
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-white tracking-wide mb-1.5 uppercase font-mono">
                    {d.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/55 leading-relaxed font-light whitespace-pre-line">
                    {d.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
