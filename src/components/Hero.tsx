import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenRsvp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRsvp }) => {
  const targetDate = new Date('2026-09-18T10:00:00-04:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative min-h-screen pt-28 pb-12 flex flex-col justify-between bg-[#0D6886] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col items-center justify-center my-auto text-center">
        
        <div className="relative mb-8 max-w-xl w-full mx-auto flex flex-col items-center">
          
          <div className="relative w-72 sm:w-96 aspect-square flex items-center justify-center">
            <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-2xl">
              <defs>
                <linearGradient id="odsGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E5243B" />
                  <stop offset="15%" stopColor="#DDA63A" />
                  <stop offset="30%" stopColor="#4C9F38" />
                  <stop offset="45%" stopColor="#C5192D" />
                  <stop offset="60%" stopColor="#FF3A21" />
                  <stop offset="75%" stopColor="#26BDE2" />
                  <stop offset="90%" stopColor="#FCC30B" />
                  <stop offset="100%" stopColor="#A21942" />
                </linearGradient>
                <linearGradient id="odsGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#DD1367" />
                  <stop offset="25%" stopColor="#FD6925" />
                  <stop offset="50%" stopColor="#3F7E44" />
                  <stop offset="75%" stopColor="#0A97D9" />
                  <stop offset="100%" stopColor="#00689D" />
                </linearGradient>
              </defs>

              <path
                d="M 230,60 C 270,50 310,80 340,110 C 380,140 430,170 420,220 C 410,270 370,300 350,340 C 330,380 300,430 260,450 C 230,460 210,420 190,390 C 170,360 140,320 130,280 C 120,240 140,200 150,160 C 160,120 190,70 230,60 Z"
                fill="none"
                stroke="url(#odsGradient1)"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-95"
              />
              <path
                d="M 230,75 C 265,65 300,92 328,120 C 365,148 410,175 402,220 C 392,265 355,292 338,330 C 320,368 292,412 255,432 C 228,442 210,405 192,378 C 174,350 148,315 138,278 C 128,240 148,205 158,168 C 168,130 195,85 230,75 Z"
                fill="none"
                stroke="url(#odsGradient2)"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <div className="text-4xl sm:text-6xl font-black tracking-tighter text-white uppercase drop-shadow-md leading-none font-sans">
                SDGs
              </div>
              <div className="text-xl sm:text-3xl font-extrabold tracking-widest text-white uppercase mt-1 flex items-center gap-1 font-mono">
                <span>IN</span>
                <span className="bg-white text-[#0D6886] px-1 rounded font-black">BRAZIL</span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm sm:text-lg font-bold tracking-widest text-slate-100 uppercase font-mono bg-[#1B2436]/60 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            18 DE SETEMBRO DE 2026 • SEDE DA ONU • NEW YORK
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-base sm:text-xl text-slate-100 font-light leading-relaxed mb-4">
            Liderança Empresarial Brasileira na Ante-sala da <strong className="font-semibold text-white">81ª Assembleia Geral da ONU</strong>. 
            Evidências, Substância e Ação Concreta para a Agenda 2030.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-10 w-full">
          <div className="p-4 sm:p-6 rounded-2xl bg-[#1B2436]/90 border border-white/15 shadow-2xl backdrop-blur-md">
            <div className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 mb-3 font-bold">
              Contagem Regressiva para a Abertura na ONU
            </div>
            
            <div className="grid grid-cols-4 gap-3 text-center">
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0D6886]/60 border border-white/10">
                <span className="text-2xl sm:text-4xl font-black font-mono text-white">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">Dias</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0D6886]/60 border border-white/10">
                <span className="text-2xl sm:text-4xl font-black font-mono text-emerald-400">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400 mt-1">Horas</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0D6886]/60 border border-white/10">
                <span className="text-2xl sm:text-4xl font-black font-mono text-yellow-400">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-yellow-400 mt-1">Minutos</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0D6886]/60 border border-white/10">
                <span className="text-2xl sm:text-4xl font-black font-mono text-blue-300">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-300 mt-1">Segundos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10 w-full">
          <button
            onClick={onOpenRsvp}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white font-bold text-base shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <span>Garantir Credenciamento</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#programacao"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1B2436] hover:bg-slate-800 border border-white/20 text-white font-bold text-base text-center transition-colors"
          >
            Ver Programação
          </a>
        </div>

      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 border-t border-white/20 font-mono text-xs text-white">
        <div className="bg-[#1B2436] py-5 px-6 flex items-center justify-center gap-4 border-b md:border-b-0 md:border-r border-white/10">
          <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">REALIZAÇÃO:</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center border border-blue-400">
              <span className="text-xs font-black text-white">UN</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-sm text-white">Pacto Global</span>
              <span className="text-[10px] text-slate-300">Rede Brasil</span>
            </div>
          </div>
        </div>

        <div className="bg-[#683B75] py-5 px-6 flex items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-widest text-purple-200 uppercase">PATROCÍNIO:</span>
            <span className="font-black text-lg text-white tracking-wider font-sans">aegea</span>
          </div>

          <div className="h-6 w-px bg-white/20" />

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-widest text-purple-200 uppercase">APOIO:</span>
            <span className="font-extrabold text-xs text-white uppercase bg-white/10 px-2 py-1 rounded">
              MISSÃO DO BRASIL NA ONU
            </span>
          </div>
        </div>
      </div>

    </section>
  );
};
