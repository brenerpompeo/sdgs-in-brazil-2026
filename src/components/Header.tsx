import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenRsvp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRsvp }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B5D75]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl' 
          : 'bg-gradient-to-b from-[#0B5D75]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-4 group">
            <img 
              src="./assets/pacto-global-realizacao.png" 
              alt="Pacto Global da ONU" 
              className="h-9 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
            />
            <div className="h-6 w-px bg-white/20 hidden sm:block" />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[11px] font-extrabold tracking-wider text-white uppercase font-sans">
                SDGs IN BRAZIL 2026
              </span>
              <span className="text-[9px] font-medium tracking-widest text-slate-200 uppercase">
                SEDE DA ONU • NEW YORK
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold">
            <a href="#sobre" className="text-slate-100 hover:text-emerald-300 transition-colors">
              Sobre
            </a>
            <a href="#forcas" className="text-slate-100 hover:text-emerald-300 transition-colors">
              As 3 Forças
            </a>
            <a href="#programacao" className="text-slate-100 hover:text-emerald-300 transition-colors">
              Programação
            </a>
            <a href="#palestrantes" className="text-slate-100 hover:text-emerald-300 transition-colors">
              Palestrantes
            </a>
            <a href="#local" className="text-slate-100 hover:text-emerald-300 transition-colors">
              Localização
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182232]/80 border border-white/15 text-xs text-slate-200 font-mono">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>18 SET 2026</span>
              <span className="text-white/30">•</span>
              <MapPin className="w-3.5 h-3.5 text-blue-300" />
              <span>NY, EUA</span>
            </div>
            
            <button
              onClick={onOpenRsvp}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-[#0B5D75] text-xs font-bold uppercase tracking-wider shadow-lg transition-all hover:scale-105"
            >
              <span>Credenciamento</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#182232] border border-white/15 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#182232] border-b border-white/15 px-4 pt-4 pb-6 mt-3 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-semibold uppercase tracking-wider">
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-white py-1">
              Sobre o Evento
            </a>
            <a href="#forcas" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-white py-1">
              As 3 Forças Globais
            </a>
            <a href="#programacao" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-white py-1">
              Programação Oficial
            </a>
            <a href="#palestrantes" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-white py-1">
              Palestrantes
            </a>
            <a href="#local" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-white py-1">
              Sede da ONU NY
            </a>
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRsvp();
              }}
              className="w-full py-3 rounded-xl bg-white text-[#0B5D75] font-bold text-xs uppercase tracking-wider text-center"
            >
              Solicitar Credenciamento
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
