import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const VENUE_DETAILS = [
  { 
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ), 
    title: 'Endereço Oficial', 
    detail: '405 E 42nd St\nNew York, NY 10017\nEstados Unidos' 
  },
  { 
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ), 
    title: 'Data & Horário', 
    detail: '18 de Setembro de 2026\n10:00 às 20:30 (EDT)\nSemana da AGNU-81' 
  },
  { 
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ), 
    title: 'Como Acessar', 
    detail: 'JFK ou EWR Airport\nMetrô: Linhas 4, 5, 6, 7 (42nd St)\nCredenciamento prévio obrigatório' 
  },
  { 
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  }, []);

  return (
    <section id="local" className="py-24 sm:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0D6886]/10 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Editorial Header */}
        <div className="venue-header text-center max-w-4xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-white/60 tracking-[0.3em] uppercase block mb-3 font-mono">
            LOCALIZAÇÃO & LOGÍSTICA · NOVA YORK
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Sede das Nações Unidas.<br />
            <span className="text-white/80 font-light">405 E 42nd St, Manhattan, NY.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto leading-relaxed font-light">
            Salões principais do complexo oficial das Nações Unidas em Manhattan durante a semana da 81ª Assembleia Geral da ONU.
          </p>
        </div>

        {/* Map and Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Reliable Google Maps Dark Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[380px] sm:min-h-[460px] relative bg-neutral-900 group">
            <iframe
              title="United Nations Headquarters - Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.428458784157!2d-73.97029582342551!3d40.74945397138767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25902092f6b89%3A0x63339ed3015a1d7c!2sUnited%20Nations%20Headquarters!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full min-h-[380px] sm:min-h-[460px] object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="absolute bottom-4 left-4 z-10 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono text-white/80">
              📍 SEDE DAS NAÇÕES UNIDAS · NY 10017
            </div>
          </div>

          {/* Details list */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {VENUE_DETAILS.map((d, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 4, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex items-start gap-4 shadow-xl"
              >
                <div className="p-3 bg-white/10 rounded-xl flex-shrink-0 border border-white/10">
                  {d.icon}
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-white tracking-widest uppercase mb-1 font-mono">
                    {d.title}
                  </h3>
                  <p className="text-xs text-white/75 leading-relaxed font-light whitespace-pre-line">
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
