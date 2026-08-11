import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const BACKGROUNDS = [
  './assets/sdgs_2025/sdgs_2025_2.jpg',
  './assets/sdgs_2025/sdgs_2025_3.jpg',
  './assets/sdgs_2025/sdgs_2025_5.jpg',
  './assets/sdgs_2025/sdgs_2025_7.jpg',
];

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <motion.div 
    whileHover={{ scale: 1.05, y: -2 }}
    className="flex flex-col items-center px-4 sm:px-6 py-3.5 sm:py-4 bg-white/[0.04] backdrop-blur-xl border border-white/15 rounded-2xl min-w-[76px] sm:min-w-[104px] shadow-2xl"
  >
    <span className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-white leading-none">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-[10px] sm:text-xs font-bold text-white/60 tracking-widest uppercase mt-2.5 font-mono">
      {label}
    </span>
  </motion.div>
);

export const Hero: React.FC = () => {
  const target = new Date('2026-09-18T10:00:00-04:00').getTime();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [bgIndex, setBgIndex] = useState(0);

  // Entrance animation
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.hero-logo', { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
      .fromTo('.hero-date', { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8 }, '-=0.5')
      .fromTo('.hero-countdown', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
      .fromTo('.hero-ctas', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');
  }, []);

  // Preload background images
  useEffect(() => {
    BACKGROUNDS.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Background slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUNDS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    const tick = () => {
      const diff = target - Date.now();
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        });
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white">
      {/* Background Slideshow Containers */}
      {BACKGROUNDS.map((bg, idx) => (
        <div
          key={bg}
          className="absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-[1200ms] ease-in-out"
          style={{
            backgroundImage: `url('${bg}')`,
            opacity: bgIndex === idx ? 1 : 0,
            zIndex: bgIndex === idx ? 1 : 0,
          }}
        />
      ))}

      {/* Multi-layered Dimmer Overlay for Perfect Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black pointer-events-none z-[2]" />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 max-w-5xl mx-auto w-full">
        
        {/* Main Brand Logo */}
        <div className="hero-logo mb-6 sm:mb-8">
          <img
            src="./assets/logo.png"
            alt="SDGs in Brazil 2026 Logo"
            className="h-[120px] sm:h-[180px] md:h-[220px] w-auto object-contain drop-shadow-2xl mx-auto"
            loading="eager"
          />
        </div>

        {/* Date Image (data_horizontal) - Prominent & Enlarged */}
        <div className="hero-date mb-10 sm:mb-12 max-w-[320px] sm:max-w-[540px] md:max-w-[620px] w-full mx-auto">
          <img
            src="./assets/data_horizontal.png"
            alt="18 de Setembro de 2026 - Sede da ONU - NY"
            className="w-full h-auto object-contain filter drop-shadow-xl"
            loading="eager"
          />
        </div>

        {/* Countdown */}
        <div className="hero-countdown mb-10 sm:mb-12 w-full">
          <p className="text-[11px] sm:text-xs font-bold text-white/60 tracking-[0.3em] uppercase mb-4 font-mono">
            CONTAGEM REGRESSIVA PARA A ABERTURA
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
            <CountdownBox value={countdown.days} label="Dias" />
            <CountdownBox value={countdown.hours} label="Horas" />
            <CountdownBox value={countdown.minutes} label="Minutos" />
            <CountdownBox value={countdown.seconds} label="Segundos" />
          </div>
        </div>

        {/* High-Contrast CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto font-mono">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://sdgs2026.cadastro9.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[52px] px-8 py-4 bg-white text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-2xl hover:bg-gray-100 flex items-center justify-center transition-colors text-center"
          >
            TENHO INTERESSE EM PARTICIPAR
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#programacao"
            className="w-full sm:w-auto min-h-[52px] px-8 py-4 bg-white/10 text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/15 text-center flex items-center justify-center transition-colors shadow-lg"
          >
            Ver Programação
          </motion.a>
        </div>
      </div>

      {/* Corporate Sponsors Bar */}
      <div className="relative z-10 w-full border-t border-white/15 bg-black py-6 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <div className="w-full max-w-[580px]">
            <img 
              src="./assets/marcas.png" 
              alt="Marcas: Pacto Global, AYA Earth Partners, Aegea, Missão do Brasil na ONU" 
              className="w-full h-auto object-contain filter drop-shadow-sm"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
