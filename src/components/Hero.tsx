import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';

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
    <section className="relative min-h-screen pt-28 pb-0 flex flex-col justify-between bg-[#0B5D75] overflow-hidden">
      
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none bg-center bg-cover mix-blend-overlay"
        style={{ backgroundImage: `url('./assets/line-field.png')` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col items-center justify-center my-auto text-center py-6">
        
        <div className="max-w-xl w-full mx-auto mb-8 relative">
          <img 
            src="./assets/kv-forum-2026-final.png" 
            alt="SDGs in Brazil 2026 Key Visual" 
            className="w-full h-auto object-contain mx-auto drop-shadow-2xl hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-slate-100 leading-relaxed mb-4">
            Liderança Empresarial Brasileira na Ante-sala da <strong className="font-bold text-white">81ª Assembleia Geral da ONU</strong>
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 uppercase tracking-widest font-mono">
            Evidências, Substância e Ação Concreta para a Agenda 2030
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-10 w-full">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#182232]/85 border border-white/15 shadow-2xl backdrop-blur-md">
            <div className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 mb-3 font-semibold flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Contagem Regressiva para o Evento</span>
            </div>
            
            <div className="grid grid-cols-4 gap-2.5 text-center font-mono">
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0B5D75]/60 border border-white/10">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-300 mt-0.5">Dias</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0B5D75]/60 border border-white/10">
                <span className="text-2xl sm:text-3xl font-bold text-emerald-400">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 mt-0.5">Horas</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0B5D75]/60 border border-white/10">
                <span className="text-2xl sm:text-3xl font-bold text-yellow-300">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-yellow-300 mt-0.5">Minutos</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0B5D75]/60 border border-white/10">
                <span className="text-2xl sm:text-3xl font-bold text-blue-300">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-blue-300 mt-0.5">Segundos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10 w-full">
          <button
            onClick={onOpenRsvp}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#0B5D75] font-bold text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <span>Garantir Credenciamento</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#programacao"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#182232] hover:bg-slate-800 border border-white/20 text-white font-bold text-xs uppercase tracking-wider text-center transition-colors"
          >
            Ver Programação
          </a>
        </div>

      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 border-t border-white/20 relative z-20">
        <div className="bg-[#182232] py-4 px-8 flex items-center justify-center md:justify-end gap-4 border-b md:border-b-0 md:border-r border-white/10">
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">REALIZAÇÃO:</span>
          <img 
            src="./assets/pacto-global-realizacao.png" 
            alt="Pacto Global Rede Brasil" 
            className="h-8 w-auto object-contain brightness-0 invert"
          />
        </div>

        <div className="bg-[#5F3469] py-4 px-8 flex items-center justify-center md:justify-start gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-purple-200 uppercase">PATROCÍNIO:</span>
            <img 
              src="./assets/aegea-patrocinador.png" 
              alt="Aegea Saneamento" 
              className="h-7 w-auto object-contain brightness-0 invert"
            />
          </div>

          <div className="h-6 w-px bg-white/20" />

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-purple-200 uppercase">PARCERIA:</span>
            <img 
              src="./assets/logo-aya.png" 
              alt="AYA Earth Partners" 
              className="h-6 w-auto object-contain brightness-0 invert"
            />
          </div>
        </div>
      </div>

    </section>
  );
};
