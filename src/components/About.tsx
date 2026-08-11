import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const EVENT_PHOTOS = [
  {
    src: './assets/sdgs_2025/sdgs_2025_2.jpg',
    tag: 'SEDE DA ONU · NOVA YORK',
    title: 'Edição Anterior no Hall Principal das Nações Unidas',
  },
  {
    src: './assets/sdgs_2025/sdgs_2025_5.jpg',
    tag: 'PLENÁRIA DE ABERTURA',
    title: 'Liderança Empresarial em Diálogo Multilateral',
  },
  {
    src: './assets/sdgs_2025/sdgs_2025_8.jpg',
    tag: 'DEBATES DE IMPACTO',
    title: 'Compromissos Climáticos e Transição Justa',
  },
];

const FORCES = [
  {
    num: 'FORÇA 01',
    title: 'O mundo se reorganizou',
    desc: 'Geopolítica instável, fragmentação de cadeias de valor e novos critérios socioambientais redefinem quem acessa mercados e capital global.',
    tag: 'Geopolítica & Mercados',
    bg: './assets/sdgs_2025/sdgs_2025_2.jpg',
  },
  {
    num: 'FORÇA 02',
    title: 'O ESG fatigue é real — e presente',
    desc: 'Cresce a cobrança por evidências e métricas transparentes. Quem tem substância para demonstrar ocupa a liderança.',
    tag: 'Substância & Métricas',
    bg: './assets/sdgs_2025/sdgs_2025_5.jpg',
  },
  {
    num: 'FORÇA 03',
    title: 'A prova é o novo padrão',
    desc: 'Rastreabilidade em tempo real e novas regulações globais tornaram a transparência verificável uma exigência mínima.',
    tag: 'Compliance & Transparência',
    bg: './assets/sdgs_2025/sdgs_2025_8.jpg',
  },
];

export const About: React.FC = () => {
  const [photoIndex, setPhotoIndex] = useState(0);

  // Auto slideshow for event photos
  useEffect(() => {
    const timer = setInterval(() => {
      setPhotoIndex(prev => (prev + 1) % EVENT_PHOTOS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    gsap.fromTo('.about-header', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.about-header',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.about-stats-strip', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.about-stats-strip',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.about-bento-container', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.about-bento-container',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.force-seamless-card', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.forces-seamless-grid',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden border-t border-white/10">
      {/* Soft Ambient Radial Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00A3E0]/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Editorial Header (Matching Schedule & Speakers) */}
        <div className="about-header text-center max-w-4xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
            SDGS IN BRAZIL 2026 · SEDE DA ONU NY
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Rumo a 2030: O Tempo da Prova.<br />
            <span className="text-slate-300 font-light font-sans text-xl sm:text-3xl block mt-2">
              "Comprometemos. Agimos. Agora, provamos."
            </span>
          </h2>
        </div>

        {/* Seamless Editorial Stats Strip (Unified 3-Column Module) */}
        <div className="about-stats-strip grid grid-cols-1 md:grid-cols-3 bg-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-16">
          <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-white/10 text-center flex flex-col justify-center items-center hover:bg-white/[0.03] transition-colors duration-300">
            <span className="text-5xl sm:text-6xl font-extrabold font-mono text-[#00A3E0] block mb-2 tracking-tight">
              35%
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xs">
              das metas dos ODS no caminho certo para 2030
            </span>
          </div>

          <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-white/10 text-center flex flex-col justify-center items-center hover:bg-white/[0.03] transition-colors duration-300">
            <span className="text-5xl sm:text-6xl font-extrabold font-mono text-[#FFD700] block mb-2 tracking-tight">
              18%
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xs">
              das metas registraram retrocesso desde 2015
            </span>
          </div>

          <div className="p-8 sm:p-10 text-center flex flex-col justify-center items-center hover:bg-white/[0.03] transition-colors duration-300">
            <span className="text-5xl sm:text-6xl font-extrabold font-mono text-white block mb-2 tracking-tight">
              4 Anos
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xs">
              é a janela restante para cumprir a Agenda 2030
            </span>
          </div>
        </div>

        {/* Bento Grid: Unified Seamless Module (Diagnóstico + Photos) */}
        <div className="about-bento-container grid grid-cols-1 lg:grid-cols-12 bg-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-24">
          
          {/* Left Block: Editorial Narrative */}
          <div className="lg:col-span-6 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between relative bg-white/[0.01]">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#00A3E0] uppercase block mb-4">
                DIAGNÓSTICO E CONTEXTO GLOBAL
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 tracking-tight leading-snug">
                A Urgência de Resultados Verificáveis na Sede da ONU
              </h3>
              <p className="text-base text-white font-bold leading-relaxed mb-6">
                Na sexta-feira que antecede a Assembleia Geral da ONU (AGNU-81), a liderança empresarial brasileira ocupa a sede das Nações Unidas em Nova York para demonstrar que a sustentabilidade é o único caminho para a perenidade dos negócios.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed font-light opacity-70">
                Dez anos após a adoção da Agenda 2030, o mundo fez avanços reais, mas o Relatório ODS 2025 da ONU é contundente: nenhum dos 17 Objetivos está no ritmo necessário. Com um déficit de financiamento de <strong className="text-slate-300">US$ 4 trilhões por ano</strong> nos países em desenvolvimento, estes quatro anos finais exigem comprovação empírica.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>AGNU-81 · SEDE ONU NY</span>
              <span>18 DE SETEMBRO DE 2026</span>
            </div>
          </div>

          {/* Right Block: Event Photo Slideshow Module */}
          <div className="lg:col-span-6 relative aspect-square sm:aspect-auto sm:min-h-[460px] overflow-hidden group">
            {EVENT_PHOTOS.map((photo, idx) => (
              <div 
                key={photo.src}
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out scale-100 group-hover:scale-105 transition-transform duration-700"
                style={{ 
                  backgroundImage: `url('${photo.src}')`,
                  opacity: photoIndex === idx ? 1 : 0,
                  zIndex: photoIndex === idx ? 1 : 0,
                }}
              />
            ))}
            
            {/* Seamless Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-[2]" />

            {/* Content Overlay */}
            <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 bg-black/70 backdrop-blur-xl text-[#00A3E0] rounded-full border border-white/10">
                  {EVENT_PHOTOS[photoIndex].tag}
                </span>
                <span className="text-xs font-mono text-slate-300 font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  REGISTRO OFICIAL
                </span>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-3 drop-shadow-xl">
                  “{EVENT_PHOTOS[photoIndex].title}”
                </h4>
                <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-extrabold text-white">SDGs in Brazil · Nova York</h5>
                    <p className="text-xs font-mono text-[#00A3E0] font-bold mt-0.5">
                      Sede das Nações Unidas
                    </p>
                  </div>

                  <div className="flex gap-1.5">
                    {EVENT_PHOTOS.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${photoIndex === i ? 'bg-[#00A3E0] w-5' : 'bg-white/30'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Três Forças - Seamless Editorial Strip (Unified 3-Column Module) */}
        <div>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
              O CENÁRIO DE 2026
            </span>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Três Forças Simultâneas que Definem a Liderança Global
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
              O mercado passou a exigir prova em vez de intenção. Quem possui substância empírica ocupa posição de vantagem competitiva real.
            </p>
          </div>

          {/* Unified 3-Column Module with Clean CSS Hover Transitions */}
          <div className="forces-seamless-grid grid grid-cols-1 md:grid-cols-3 bg-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {FORCES.map((force, i) => (
              <div
                key={i}
                className="force-seamless-card flex flex-col justify-between p-8 sm:p-10 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 group cursor-pointer relative min-h-[440px] overflow-hidden bg-black transition-colors duration-300"
              >
                {/* Background Photo - Real UN Assembly / Stage Speech Photos with Smooth Scale */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                  style={{ backgroundImage: `url('${force.bg}')` }}
                />
                
                {/* Infinite Dark Fade Overlay with Smooth Opacity Transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/40 group-hover:opacity-90 transition-opacity duration-500 z-[1]" />

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Header Row */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase px-3 py-1 bg-black/70 rounded-full border border-white/15 backdrop-blur-xl">
                        {force.num}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#00A3E0] group-hover:translate-x-1 transition-transform duration-300">
                        {force.tag}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug tracking-tight group-hover:text-[#00A3E0] transition-colors duration-300">
                      {force.title}
                    </h4>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                      {force.desc}
                    </p>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-4 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                    <span>SDGs IN BRAZIL</span>
                    <span className="group-hover:text-[#00A3E0] transition-colors">EVIDÊNCIAS 2026 →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
