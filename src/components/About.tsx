import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const EVENT_PHOTOS = [
  {
    src: './assets/sdgs_2025_2.jpg',
    tag: 'SEDE DA ONU · NOVA YORK',
    title: 'Edição Anterior no Hall Principal das Nações Unidas',
  },
  {
    src: './assets/sdgs_2025_10.jpg',
    tag: 'PLENÁRIA DE ABERTURA',
    title: 'Liderança Empresarial em Diálogo Multilateral',
  },
  {
    src: './assets/sdgs_2025_19.jpg',
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
    bg: './assets/sdgs_2025_10.jpg',
  },
  {
    num: 'FORÇA 02',
    title: 'O ESG fatigue é real — e presente',
    desc: 'Cresce a cobrança por evidências e métricas transparentes. Quem tem substância para demonstrar ocupa a liderança.',
    tag: 'Substância & Métricas',
    bg: './assets/sdgs_2025_18.jpg',
  },
  {
    num: 'FORÇA 03',
    title: 'A prova é o novo padrão',
    desc: 'Rastreabilidade em tempo real e novas regulações globais tornaram a transparência verificável uma exigência mínima.',
    tag: 'Compliance & Transparência',
    bg: './assets/sdgs_2025_13.jpg',
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
    gsap.fromTo('.about-intro', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.about-intro',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.force-card', 
      { y: 35, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.forces-grid',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-black text-white overflow-hidden border-t border-white/10">
      {/* Soft Ambient Radial Lights (No harsh borders) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00A3E0]/10 to-[#5F3469]/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
            SDGS IN BRAZIL 2026 · SEDE ONU NY
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Rumo a 2030: O Tempo da Prova.<br />
            <span className="text-slate-300 font-light font-sans">"Comprometemos. Agimos. Agora, provamos."</span>
          </h2>
        </div>

        {/* Highlight Stats Bar - Glassmorphism Borderless Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 bg-white/[0.02] backdrop-blur-2xl rounded-3xl text-center border border-white/10 shadow-2xl transition-all duration-300 hover:bg-white/[0.04]">
            <span className="text-4xl sm:text-6xl font-extrabold font-mono text-[#00A3E0] block mb-2 tracking-tight">
              35%
            </span>
            <span className="text-xs text-slate-300 font-light leading-relaxed">
              das metas dos ODS no caminho certo para 2030
            </span>
          </div>

          <div className="p-8 bg-white/[0.02] backdrop-blur-2xl rounded-3xl text-center border border-white/10 shadow-2xl transition-all duration-300 hover:bg-white/[0.04]">
            <span className="text-4xl sm:text-6xl font-extrabold font-mono text-[#FFD700] block mb-2 tracking-tight">
              18%
            </span>
            <span className="text-xs text-slate-300 font-light leading-relaxed">
              das metas registraram retrocesso desde 2015
            </span>
          </div>

          <div className="p-8 bg-white/[0.02] backdrop-blur-2xl rounded-3xl text-center border border-white/10 shadow-2xl transition-all duration-300 hover:bg-white/[0.04]">
            <span className="text-4xl sm:text-6xl font-extrabold font-mono text-white block mb-2 tracking-tight">
              4 Anos
            </span>
            <span className="text-xs text-slate-300 font-light leading-relaxed">
              é a janela restante para cumprir a Agenda 2030
            </span>
          </div>
        </div>

        {/* Bento Grid: Borderless Glassmorphism & Infinite Background Real Event Photos */}
        <div className="about-intro grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Left Block: Narrative with Infinite Glassmorphism (No harsh borders) */}
          <div className="lg:col-span-6 p-8 sm:p-12 bg-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#00A3E0] uppercase block mb-4">
                DIAGNÓSTICO E CONTEXTO GLOBAL
              </span>
              <p className="text-base sm:text-lg text-white leading-relaxed font-normal mb-6">
                Dez anos após a adoção da Agenda 2030, o mundo fez avanços reais, mas o Relatório ODS 2025 da ONU é contundente: nenhum dos 17 Objetivos está no ritmo necessário. Com um déficit de financiamento de <strong className="text-[#00A3E0]">US$ 4 trilhões por ano</strong> nos países em desenvolvimento, esses quatro anos finais são o momento de demonstrar resultados verificáveis com evidências.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                Na sexta-feira que antecede a Assembleia Geral da ONU (AGNU-81), o setor privado brasileiro ocupa a sede das Nações Unidas em Nova York para provar que a sustentabilidade é condição para a perenidade dos negócios.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>AGNU-81 · SEDE ONU NY</span>
              <span>18 DE SETEMBRO DE 2026</span>
            </div>
          </div>

          {/* Right Block: Square Glassmorphism Card with Real 2025 Event Photo Slideshow */}
          <div className="lg:col-span-6">
            <motion.div 
              whileHover={{ scale: 1.005 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="aspect-square relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black group flex flex-col justify-between"
            >
              {/* Event Photos Background Carousel with Seamless Crossfade */}
              {EVENT_PHOTOS.map((photo, idx) => (
                <div 
                  key={photo.src}
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out group-hover:scale-105 transition-transform duration-700"
                  style={{ 
                    backgroundImage: `url('${photo.src}')`,
                    opacity: photoIndex === idx ? 1 : 0,
                    zIndex: photoIndex === idx ? 1 : 0,
                  }}
                />
              ))}
              
              {/* Infinite Dark Fade Overlay - Seamless blend to page background */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-[2]" />

              {/* Content Overlay - Glassmorphism Details */}
              <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-between h-full">
                {/* Top Badge */}
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1.5 bg-black/70 backdrop-blur-xl text-[#00A3E0] rounded-full shadow-lg border border-white/10">
                    {EVENT_PHOTOS[photoIndex].tag}
                  </span>
                  <span className="text-xs font-mono text-slate-300 font-bold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    REGISTRO OFICIAL
                  </span>
                </div>

                {/* Bottom Quote & Event Details */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-3 drop-shadow-xl">
                    “{EVENT_PHOTOS[photoIndex].title}”
                  </h3>
                  <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-extrabold text-white">SDGs in Brazil · Nova York</h4>
                      <p className="text-xs font-mono text-[#00A3E0] font-bold mt-0.5">
                        Sede das Nações Unidas
                      </p>
                    </div>

                    {/* Carousel Dots Indicator */}
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
            </motion.div>
          </div>

        </div>

        {/* Três Forças - Borderless Square Glassmorphism Layout */}
        <div>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-3 font-mono">
              O CENÁRIO DE 2026
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Três Forças Simultâneas que Definem a Liderança Global
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
              O mercado passou a exigir prova em vez de intenção. Quem possui substância empírica ocupa posição de vantagem competitiva real.
            </p>
          </div>

          {/* Cards Quadrados com Fundo Infinito e Glassmorphism */}
          <div className="forces-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {FORCES.map((force, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="force-card aspect-square relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group flex flex-col justify-between p-8 bg-black"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${force.bg}')` }}
                />
                
                {/* Infinite Dark Fade Overlay - Seamlessly blends with background */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/40 z-[1]" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase px-3 py-1 bg-black/60 rounded-full border border-white/15 backdrop-blur-xl">
                        {force.num}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#00A3E0]">
                        {force.tag}
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-extrabold text-white mb-3 leading-snug drop-shadow-md">
                      {force.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light drop-shadow-sm">
                      {force.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>SDGs IN BRAZIL</span>
                    <span>EVIDÊNCIAS 2026</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
