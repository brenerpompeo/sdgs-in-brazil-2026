import React from 'react';
import { HeartHandshake, Briefcase, Leaf, ShieldCheck, Sparkles } from 'lucide-react';

export const FourPillars: React.FC = () => {
  const pillars = [
    {
      title: 'Direitos Humanos',
      desc: 'Respeito universal e proteção aos direitos fundamentais, prevenção a abusos e promoção da dignidade e equidade social.',
      icon: HeartHandshake,
      color: 'from-pink-500 to-rose-600',
      badge: 'Pilar 1'
    },
    {
      title: 'Trabalho Decente',
      desc: 'Eliminação de todas as formas de trabalho forçado e infantil, não-discriminação e garantia de ambientes seguros e equitativos.',
      icon: Briefcase,
      color: 'from-blue-500 to-indigo-600',
      badge: 'Pilar 2'
    },
    {
      title: 'Meio Ambiente',
      desc: 'Abordagem preventiva aos desafios ambientais, promoção da responsabilidade ecológica e difusão de tecnologias limpas.',
      icon: Leaf,
      color: 'from-emerald-400 to-teal-600',
      badge: 'Pilar 3'
    },
    {
      title: 'Anticorrupção',
      desc: 'Combate à corrupção em todas as suas formas, incluindo extorsão e suborno, priorizando a transparência e integridade das cadeias.',
      icon: ShieldCheck,
      color: 'from-amber-400 to-orange-600',
      badge: 'Pilar 4'
    }
  ];

  return (
    <section className="py-20 relative z-10 border-t border-slate-800/80 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Matriz Transversal do Evento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Os 4 Pilares Universais do Pacto Global
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Cada painel e keynote foi desenhado para integrar de forma prática os princípios fundamentais das Nações Unidas à realidade dos negócios no Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pilar, idx) => {
            const Icon = pilar.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${pilar.color} text-white shadow-lg shadow-black/20`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                      {pilar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {pilar.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {pilar.desc}
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
