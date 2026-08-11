import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const FAQS = [
  {
    q: 'Quem pode participar do SDGs in Brazil 2026 na Sede da ONU?',
    a: 'O evento é exclusivo para CEOs, presidentes, conselheiros, vice-presidentes, diretores C-Suite de empresas signatárias do Pacto Global da ONU - Rede Brasil, além de diplomatas, autoridades governamentais e convidados especiais da alta liderança internacional.',
  },
  {
    q: 'Como funciona o processo de credenciamento e acesso à Sede da ONU?',
    a: 'O acesso ao complexo das Nações Unidas em Nova York exige credenciamento prévio individual. Após a aprovação da sua pré-inscrição, nossa equipe enviará as instruções para emissão do Badge Oficial da ONU (UN Access Pass). No dia do evento, é obrigatória a apresentação do passaporte físico válido.',
  },
  {
    q: 'O evento oferece tradução simultânea?',
    a: 'Sim. Todas as sessões e painéis contarão com tradução simultânea em tempo real (Português/Inglês e Inglês/Português) via receptores fornecidos no local.',
  },
  {
    q: 'É necessário visto especial para os Estados Unidos?',
    a: 'Participantes brasileiros devem possuir visto americano B1/B2 (Negócios/Turismo) válido ou autorização de viagem ESTA (para cidadãos com dupla nacionalidade elegíveis). A organização do evento pode fornecer carta oficial de convite para auxílio no processo de agendamento.',
  },
  {
    q: 'O evento terá transmissão online ao vivo?',
    a: 'A transmissão online ao vivo será disponibilizada via UN Web TV e canais oficiais do Pacto Global da ONU - Rede Brasil para participantes cadastrados remotamente.',
  },
  {
    q: 'Como funciona a participação da imprensa?',
    a: 'Jornalistas e veículos de comunicação interessados na cobertura do evento devem solicitar credenciamento de imprensa específico com antecedência para obter o passe de mídia da ONU.',
  },
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useGSAP(() => {
    gsap.fromTo('.faq-header', 
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.faq-header',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    gsap.fromTo('.seamless-faq-item', 
      { y: 25, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Editorial Header */}
        <div className="faq-header text-center mb-16">
          <span className="text-[11px] font-bold text-white/60 tracking-[0.3em] uppercase block mb-3 font-mono">
            DÚVIDAS FREQUENTES · PROTOCOLO ONU
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Perguntas Frequentes.<br />
            <span className="text-white/80 font-light">Credenciamento & Logística.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-lg mx-auto leading-relaxed font-light px-2">
            Informações práticas sobre o protocolo de segurança na ONU em Nova York e credenciamento oficial.
          </p>
        </div>

        {/* Seamless Accordion List (Borderless Dividers) */}
        <div className="faq-list flex flex-col border-t border-b border-white/10">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="seamless-faq-item border-b border-white/10 last:border-b-0 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-6 px-4 sm:px-6 flex items-center justify-between text-left gap-4 font-extrabold text-base sm:text-lg text-white hover:text-white transition-colors group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-white/40">0{idx + 1}</span>
                    <span className="leading-snug">{faq.q}</span>
                  </div>
                  <span className={`text-xl font-mono transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45 text-white' : 'text-white/40'}`}>
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-6 text-xs sm:text-sm text-white/75 font-light leading-relaxed pl-10 sm:pl-12">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
