import React from 'react';
import { Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050B14] border-t border-slate-800 text-slate-400 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="md:col-span-1 space-y-4">
            <img 
              src="./assets/logo.png" 
              alt="SDGs in Brazil 2026" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              SDGs in Brazil 2026 — Liderança empresarial brasileira na ante-sala da Assembleia Geral da ONU na Sede em Nova York.
            </p>
            <div className="text-[10px] text-slate-500 font-mono">
              © 2026 Pacto Global da ONU - Rede Brasil. Todos os direitos reservados.
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre o Evento</a></li>
              <li><a href="#forcas" className="hover:text-blue-400 transition-colors">As 3 Forças Globais</a></li>
              <li><a href="#programacao" className="hover:text-blue-400 transition-colors">Programação Oficial</a></li>
              <li><a href="#palestrantes" className="hover:text-blue-400 transition-colors">Palestrantes</a></li>
              <li><a href="#local" className="hover:text-blue-400 transition-colors">Sede da ONU NY</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Gerência & Produção</h4>
            <div className="space-y-3 text-xs">
              <div>
                <div className="font-bold text-slate-200">Ana Urquiza</div>
                <div className="text-[11px] text-slate-500">Gerente de Eventos | Pacto Global</div>
                <a href="mailto:ana.urquiza@pactoglobal.org.br" className="text-blue-400 hover:underline">ana.urquiza@pactoglobal.org.br</a>
              </div>

              <div>
                <div className="font-bold text-slate-200">Luiza Maruche</div>
                <div className="text-[11px] text-slate-500">Produção | Yellow Eventos</div>
                <a href="mailto:producao@pactoglobal.org.br" className="text-blue-400 hover:underline">producao@pactoglobal.org.br</a>
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
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Globe className="w-4 h-4 text-blue-400" />
                <span>www.pactoglobal.org.br</span>
              </a>
              <a 
                href="https://www.unglobalcompact.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>www.unglobalcompact.org</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
              <span>Voltar ao Topo</span>
            </button>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div>
            Sede das Nações Unidas: 405 E 45th St, New York, NY 10017
          </div>
          <div>
            Pacto Global da ONU - Rede Brasil
          </div>
        </div>

      </div>
    </footer>
  );
};
