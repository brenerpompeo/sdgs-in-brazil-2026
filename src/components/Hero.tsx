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
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-lg shadow-blue-950/50">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-emerald-400">SEDE DA ONU • NOVA YORK</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-200">18 DE SETEMBRO DE 2026</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>300 Vagas de Alta Liderança</span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase leading-[1.05]">
            SDGs in Brazil <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-yellow-400 bg-clip-text text-transparent">2026</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-8">
            Liderança Empresarial Brasileira na Ante-sala da <strong className="font-semibold text-white">Assembleia Geral da ONU</strong>.
            Evidências, Substância e Ação Concreta para a Agenda 2030.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/90 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-4 gap-3 sm:gap-6 text-center">
              <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-2xl sm:text-4xl md:text-5xl font-black font-mono text-white">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400 mt-1">Dias</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-2xl sm:text-4xl md:text-5xl font-black font-mono text-emerald-400">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-400 mt-1">Horas</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-2xl sm:text-4xl md:text-5xl font-black font-mono text-yellow-400">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-yellow-400 mt-1">Minutos</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-2xl sm:text-4xl md:text-5xl font-black font-mono text-blue-400">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400 mt-1">Segundos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <button
            onClick={onOpenRsvp}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 text-white font-bold text-base shadow-xl flex items-center justify-center gap-2 group"
          >
            <span>Garantir Credenciamento</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#programacao"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base text-center"
          >
            Ver Programação
          </a>
        </div>

      </div>
    </section>
  );
};
