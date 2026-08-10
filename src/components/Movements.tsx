import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const MOVEMENTS = [
  {
    id: 'elas-lideram',
    title: 'Elas Lideram 2030',
    subtitle: 'Equidade de Gênero na Alta Liderança',
    description: 'Meta de 50% de mulheres em cargos de alta liderança (CEOs, Diretorias e Conselhos) até 2030 nas empresas signatárias.',
    ods: 5,
    tag: 'Igualdade de Gênero',
    color: '#E5243B',
  },
  {
    id: 'raca-prioridade',
    title: 'Raça é Prioridade',
    subtitle: 'Racial Equity & Inclusion',
    description: 'Compromisso com a aceleração de profissionais negros em cargos de chefia e liderança nas maiores corporações do Brasil.',
    ods: 10,
    tag: 'Inclusão Racial',
    color: '#DD1367',
  },
  {
    id: 'salario-digno',
    title: 'Salário Digno',
    subtitle: 'Decent Living Wage for All',
    description: 'Garantia de remuneração justa e digna em 100% das operações e fortalecimento de cadeias de suprimentos sustentáveis.',
    ods: 8,
    tag: 'Trabalho Digno',
    color: '#A21942',
  },
  {
    id: 'mente-foco',
    title: 'Mente em Foco',
    subtitle: 'Saúde Mental & Bem-estar Corporativo',
    description: 'Implementação de diretrizes de saúde mental e redução do estigma no ambiente corporativo para milhares de colaboradores.',
    ods: 3,
    tag: 'Saúde & Bem-Estar',
    color: '#4C9F38',
  },
  {
    id: 'transparencia-100',
    title: 'Transparência 100%',
    subtitle: 'Integridade & Anti-Corrupção',
    description: 'Meta de 100% de transparência na governança corporativa, compliance rigoroso e combate à corrupção nas organizações.',
    ods: 16,
    tag: 'Anticorrupção',
    color: '#00689D',
  },
  {
    id: 'net-zero',
    title: 'Ambição Net Zero',
    subtitle: 'Descarbonização e Clima',
    description: 'Metas baseadas na ciência (SBTi) para neutralidade de emissões de carbono e transição energética justa até 2030/2050.',
    ods: 13,
    tag: 'Ação Climática',
    color: '#3F7E44',
  },
];

export const Movements: React.FC = () => {
  useGSAP(() => {
    gsap.fromTo('.movements-header', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.movements-header',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.seamless-movement-card', 
      { y: 35, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.seamless-movements-grid',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section id="movimentos" className="py-24 sm:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0D6886]/10 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Editorial Header */}
        <div className="movements-header text-center max-w-4xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-white/60 tracking-[0.3em] uppercase block mb-3 font-mono">
            ESTRATÉGIA PACTO GLOBAL ONU
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Movimentos da Ambição 2030.<br />
            <span className="text-white/80 font-light">Metas Concretas & Auditáveis.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto leading-relaxed font-light">
            Iniciativas com metas mensuráveis e compromissos empíricos assumidos pelas lideranças empresariais na Sede da ONU em Nova York.
          </p>
        </div>

        {/* Seamless 0px Gap Grid (Borderless Dividers) */}
        <div className="seamless-movements-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-white/10">
          {MOVEMENTS.map((mov, index) => (
            <motion.div
              key={mov.id}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
              transition={{ duration: 0.3 }}
              className="seamless-movement-card flex flex-col justify-between p-8 bg-black border-r border-b border-white/10 group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                style={{ backgroundColor: mov.color }}
              />

              <div>
                {/* Header row: ODS icon + Monospaced Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-white/60 uppercase">
                    0{index + 1} · {mov.tag}
                  </span>
                  <img
                    src={`./assets/ods/ods-${String(mov.ods).padStart(2, '0')}.jpg`}
                    alt={`ODS ${mov.ods}`}
                    className="w-10 h-10 object-contain shadow-md border border-white/10 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-2xl font-extrabold text-white mb-1 group-hover:text-white transition-colors tracking-tight">
                  {mov.title}
                </h3>
                <p className="text-xs font-mono text-white/60 mb-4 uppercase tracking-wider">
                  {mov.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">
                  {mov.description}
                </p>
              </div>

              {/* Bottom ODS link reference */}
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[10px]">
                <span className="text-white/40 uppercase tracking-wider">
                  ODS {mov.ods} · META 2030
                </span>
                <span className="text-white/60 group-hover:text-white uppercase tracking-wider transition-colors font-bold">
                  Saiba mais →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
