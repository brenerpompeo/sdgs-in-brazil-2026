import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const BENEFITS = [
  {
    title: 'VISIBILIDADE INSTITUCIONAL',
    desc: 'Posicionamento estratégico em ambiente de alto nível liderado pelas Nações Unidas na sede em Nova York.',
  },
  {
    title: 'RELACIONAMENTO C-SUITE',
    desc: 'Acesso qualificado a 300 lideranças do setor privado, governamental, diplomacia e sociedade civil.',
  },
  {
    title: 'ASSOCIAÇÃO DE IMPACTO',
    desc: 'Posicionar sua marca na vanguarda da agenda socioambiental e dos Objetivos de Desenvolvimento Sustentável.',
  },
  {
    title: 'REDE GLOBAL DE CONTATOS',
    desc: 'Fortalecimento de parcerias estratégicas com organizações comprometidas com evidências e métricas reais.',
  },
];

export const Sponsors: React.FC = () => {
  useGSAP(() => {
    gsap.fromTo('.sponsors-header', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.sponsors-header',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section id="patrocinio" className="py-24 sm:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#5F3469]/10 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Editorial Header */}
        <div className="sponsors-header text-center max-w-4xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-white/60 tracking-[0.3em] uppercase block mb-3 font-mono">
            INVESTIMENTO EM IMPACTO GLOBAL · PARCERIAS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Realização & Patrocínios.<br />
            <span className="text-white/80 font-light">Aliança de Lideranças Empresariais.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto leading-relaxed font-light">
            Organizações líderes que impulsionam a presença e o protagonismo da sustentabilidade brasileira na sede das Nações Unidas.
          </p>
        </div>

        {/* Realization Banner Lockup */}
        <div className="mb-16 p-8 sm:p-12 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl text-center max-w-4xl mx-auto">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-white/60 block mb-6">
            CHANCELARIA & REALIZADORES OFICIAIS
          </span>
          <div className="max-w-xl mx-auto mb-6">
            <img 
              src="./assets/marcas.png" 
              alt="Pacto Global, AYA, Aegea e Missão do Brasil na ONU"
              className="w-full h-auto object-contain filter drop-shadow-md"
            />
          </div>
          <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto font-light leading-relaxed">
            Uma aliança entre o setor privado, a diplomacia brasileira e a governança das Nações Unidas.
          </p>
        </div>

        {/* Commercial Sponsorship Section with Contact to Rafael Carmo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-16 bg-black">
          
          {/* Left Column: Benefits of Sponsorship */}
          <div className="lg:col-span-7 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-white/60 block mb-3">
                OPORTUNIDADE DE IMPACTO
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Quer ser um patrocinador?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light mb-8">
                Faça parte do SDGs in Brazil 2026 na Sede da ONU em Nova York. Apoiar a agenda de sustentabilidade e ODS é um posicionamento de liderança e responsabilidade socioambiental.
              </p>

              {/* Benefits Checklist */}
              <div className="flex flex-col gap-5">
                {BENEFITS.map((b, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5 font-bold font-mono">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-white tracking-wider uppercase font-mono">
                        {b.title}
                      </h4>
                      <p className="text-xs text-white/70 font-light leading-relaxed mt-0.5">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dedicated Contact Card for Rafael Carmo */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-white/[0.02]">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/60 block mb-2">
                PARCERIAS E APOIO COMERCIAL
              </span>
              <h4 className="text-2xl font-extrabold text-white mb-3">
                Rafael Carmo
              </h4>
              <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed mb-8">
                Fale com o coordenador comercial para receber o portfólio de patrocínios, cotas de apoio e conhecer todas as contrapartidas estruturadas.
              </p>
            </div>

            <div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:rafael.carmo@pactoglobal.org.br?subject=Interesse%20em%20Patroc%C3%ADnio%20-%20SDGs%20in%20Brazil%202026"
                className="w-full min-h-[50px] px-6 py-3.5 bg-white text-black hover:bg-gray-100 font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-lg flex items-center justify-center transition-colors font-mono mb-3"
              >
                FALAR COM RAFAEL →
              </motion.a>
              <p className="text-[11px] font-mono text-center text-white/60 tracking-wider">
                RAFAEL.CARMO@PACTOGLOBAL.ORG.BR
              </p>
            </div>
          </div>

        </div>

        {/* Network Stats & Event Operations Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-black border border-white/10 rounded-3xl p-8">
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/[0.02] rounded-xl border border-white/10 text-center">
              <span className="text-2xl font-extrabold text-white font-mono block">2.000+</span>
              <span className="text-[10px] text-white/60 font-mono uppercase">Participantes Rede Brasil</span>
            </div>
            <div className="p-4 bg-white/[0.02] rounded-xl border border-white/10 text-center">
              <span className="text-2xl font-extrabold text-white font-mono block">393</span>
              <span className="text-[10px] text-white/60 font-mono uppercase">Org. Ambição 2030</span>
            </div>
            <div className="p-4 bg-white/[0.02] rounded-xl border border-white/10 text-center">
              <span className="text-2xl font-extrabold text-white font-mono block">2Mi+</span>
              <span className="text-[10px] text-white/60 font-mono uppercase">Trabalhadores Impactados</span>
            </div>
            <div className="p-4 bg-white/[0.02] rounded-xl border border-white/10 text-center">
              <span className="text-2xl font-extrabold text-white font-mono block">2ª Maior</span>
              <span className="text-[10px] text-white/60 font-mono uppercase">Rede Local do Mundo</span>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            <span className="text-[10px] font-mono font-bold tracking-widest text-white/60 uppercase block mb-3">
              CONTATOS DE EVENTO E PRODUÇÃO
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <p className="font-bold text-white">Ana Urquiza</p>
                <p className="text-white/60 text-[11px]">Gerente de Eventos</p>
                <a href="mailto:ana.urquiza@pactoglobal.org.br" className="text-white/80 hover:text-white underline text-[11px] block mt-1">
                  ana.urquiza@pactoglobal.org.br
                </a>
              </div>
              <div>
                <p className="font-bold text-white">Luiza Maruche</p>
                <p className="text-white/60 text-[11px]">Produção (Yellow Eventos)</p>
                <a href="mailto:producao@pactoglobal.org.br" className="text-white/80 hover:text-white underline text-[11px] block mt-1">
                  producao@pactoglobal.org.br
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
