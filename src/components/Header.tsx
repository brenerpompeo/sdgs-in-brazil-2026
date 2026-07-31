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
          ? 'bg-[#050B14]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl shadow-blue-950/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="./assets/logo.png" 
              alt="SDGs in Brazil" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block h-8 w-px bg-slate-700/60" />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[10px] font-semibold tracking-wider text-blue-400 uppercase">Pacto Global da ONU</span>
              <span className="text-xs font-bold text-slate-200">Rede Brasil</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#sobre" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#forcas" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Forças Globais</a>
            <a href="#programacao" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Programação</a>
            <a href="#palestrantes" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Palestrantes</a>
            <a href="#local" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Sede da ONU</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>18 de Set, 2026</span>
              <span className="text-slate-600">•</span>
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>NY, EUA</span>
            </div>
            
            <button
              onClick={onOpenRsvp}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-emerald-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Credenciamento</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};
