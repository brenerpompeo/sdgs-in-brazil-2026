import React from 'react';
import { Globe2, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

export const GlobalForces: React.FC = () => {
  const forces = [
    {
      number: '01',
      title: 'O mundo se reorganizou',
      subtitle: 'Geopolítica, Regulação e Novas Cadeias',
      desc: 'Geopolítica instável, fragmentação de cadeias de valor e novos critérios socioambientais (como CBAM e diretivas europeias de due diligence) redefinem quem acessa capital, novos mercados e alianças globais.',
      icon: Globe2,
      accent: 'border-blue-500/40 text-blue-400 bg-blue-950/30'
    },
    {
      number: '02',
      title: 'O ESG fatigue é real — e presente',
      subtitle: 'Fim das Narrativas Vazias',
      desc: 'O mercado vive um ceticismo crescente alimentado por anos de promessas sem entrega e metas sem métricas. Reguladores e investidores exigem substância. Quem possui ações concretas toma a liderança.',
      icon: ShieldAlert,
      accent: 'border-yellow-500/40 text-yellow-400 bg-yellow-950/30'
    },
    {
      number: '03',
      title: 'A prova é o novo padrão',
      subtitle: 'Rastreabilidade e Transparência em Tempo Real',
      desc: 'Comprovação empírica, auditoria independente e dados auditáveis tornaram-se a exigência mínima para qualquer operação corporativa global. Transparência não é mais opção: é vantagem competitiva.',
      icon: CheckCircle2,
      accent: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30'
    }
  ];

  return (
    <section id="forcas" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 block">
              Três Forças Simultâneas
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              O cenário que define os líderes em 2026
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            As empresas brasileiras engajadas ocupam posição privileged. Em um momento de pressão multilateral, organizações que atuam com responsabilidade real assumem o protagonismo global.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {forces.map((force, idx) => {
            const Icon = force.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-slate-800/90 glass-panel-hover flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black font-mono text-slate-600 group-hover:text-slate-400 transition-colors">
                      {force.number}
                    </span>
                    <div className={`p-3.5 rounded-2xl border ${force.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {force.title}
                  </h3>

                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    {force.subtitle}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {force.desc}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-semibold group-hover:text-white transition-colors">
                  <span>Debatido no evento</span>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
