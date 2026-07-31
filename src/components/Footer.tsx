import React from 'react';
import { Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B2436] border-t border-white/10 text-slate-300 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="md:col-span-1 space-y-4">
            <div className="text-2xl font-black text-white font-sans uppercase tracking-tight">
              SDGs <span className="text-emerald-400">IN BRAZIL</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              SDGs in Brazil 2026 — Liderança empresarial brasileira na ante-sala da Assembleia Geral da ONU na Sede em Nova York.
            </p>
            <div className="text-[10px] text-slate-400 font-mono">
              © 2026 Pacto Global da ONU - Rede Brasil. Todos os direitos reservados.
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre o Evento</a></li>
              <li><a href="#forcas" className="hover:text-emerald-400 transition-colors">As 3 Forças Globais</a></li>
              <li><a href="#programacao" className="hover:text-emerald-400 transition-colors">Programação Oficial</a></li>
              <li><a href="#palestrantes" className="hover:text-emerald-400 transition-colors">Palestrantes</a></li>
              <li><a href="#local" className="hover:text-emerald-400 transition-colors">Sede da ONU NY</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Gerência & Produção</h4>
            <div className="space-y-3 text-xs">
              <div>
                <div className="font-bold text-white">Ana Urquiza</div>
                <div className="text-[11px] text-slate-400">Gerente de Eventos | Pacto Global</div>
                <a href="mailto:ana.urquiza@pactoglobal.org.br" className="text-emerald-400 hover:underline">ana.urquiza@pactoglobal.org.br</a>
              </div>

              <div>
                <div className="font-bold text-white">Luiza Maruche</div>
                <div className="text-[11px] text-slate-400">Produção | Yellow Eventos</div>
                <a href="mailto:producao@pactoglobal.org.br" className="text-emerald-400 hover:underline">producao@pactoglobal.org.br</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Canais Oficiais</h4>
            <div className="space-y-2 text-xs">
              <a 
                href="https://www.pactoglobal.org.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>www.pactoglobal.org.br</span>
              </a>
              <a 
                href="https://www.unglobalcompact.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Globe className="w-4 h-4 text-blue-400" />
                <span>www.unglobalcompact.org</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D6886] border border-white/20 text-xs font-semibold text-white hover:bg-teal-700 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Voltar ao Topo</span>
            </button>
          </div>

        </div>

      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 border-t border-white/20 font-mono text-xs text-white">
        <div className="bg-[#1B2436] py-4 px-6 flex items-center justify-center gap-4 border-b md:border-b-0 md:border-r border-white/10">
          <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">REALIZAÇÃO:</span>
          <span className="font-extrabold text-sm text-white">Pacto Global Rede Brasil</span>
        </div>

        <div className="bg-[#683B75] py-4 px-6 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-widest text-purple-200 uppercase">PATROCÍNIO:</span>
            <span className="font-black text-base text-white font-sans">aegea</span>
          </div>

          <div className="h-4 w-px bg-white/20" />

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-widest text-purple-200 uppercase">APOIO:</span>
            <span className="font-bold text-xs text-white uppercase">MISSÃO DO BRASIL NA ONU</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
