import React from 'react';
import { TrendingUp, AlertTriangle, Clock, Users } from 'lucide-react';

export const MetricStats: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: 'US$ 4 Tri',
      unit: '/ ano',
      label: 'Déficit de Financiamento Global',
      desc: 'Necessidade anual de investimento para cumprir os 17 ODS nos países em desenvolvimento.',
      color: 'from-blue-500 to-cyan-400',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: AlertTriangle,
      value: '35%',
      unit: 'apenas',
      label: 'Metas ODS no Rumo Certo',
      desc: 'Quase metade das metas avança devagar e 18% regrediram no Relatório ONU 2025.',
      color: 'from-yellow-400 to-orange-500',
      borderColor: 'border-yellow-500/30'
    },
    {
      icon: Clock,
      value: '4 Anos',
      unit: 'restantes',
      label: 'Janela Decisiva (2026 - 2030)',
      desc: 'Não é mais tempo para meras promessas, mas sim para apresentar resultados e dados empíricos.',
      color: 'from-emerald-400 to-teal-500',
      borderColor: 'border-emerald-500/30'
    },
    {
      icon: Users,
      value: '300',
      unit: 'convidados',
      label: 'Altas Lideranças Globais',
      desc: 'CEOs, C-Suite, embaixadores, diplomatas e formadores de opinião reunidos na sede da ONU.',
      color: 'from-purple-400 to-blue-500',
      borderColor: 'border-purple-500/30'
    }
  ];

  return (
    <section id="sobre" className="py-20 relative z-10 border-y border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">
            Contexto Global & Urgência
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Por que 2026 é o ano da prova de substância?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Dez anos após a adoção da Agenda 2030, a janela de ação está se fechando. O setor privado brasileiro ocupa posição estratégica para demonstrar ao mundo que sustentabilidade é condição para a perenidade dos negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className={`glass-panel p-6 rounded-2xl border ${stat.borderColor} glass-panel-hover flex flex-col justify-between relative group overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-20 h-20 text-white" />
                </div>

                <div>
                  <div className="inline-flex p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 mb-5">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                      {stat.unit}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
