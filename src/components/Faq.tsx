import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const FAQS = [
  {
    q: 'Quem pode participar do SDGs in Brazil 2026 na Sede da ONU?',
    a: 'O evento é exclusivo para CEOs, presidentes, conselheiros, vice-presidentes, diretores C-Suite de empresas signatárias do Pacto Global da ONU, além de diplomatas, autoridades governamentais e convidados especiais da alta liderança internacional.',
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
    a: 'A transmissão online ao vivo será disponibilizada via UN Web TV e canais oficiais do Pacto Global da ONU para participantes cadastrados remotamente.',
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

    gsap.fromTo('.faq-item', 
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
    <section id="faq" className="py-24 sm:py-28 bg-[#05070f] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="faq-header text-center mb-14">
          <span className="text-[11px] font-bold text-[#5F3469] tracking-[0.3em] uppercase block mb-3 font-mono">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-lg mx-auto leading-relaxed font-light px-2">
            Informações práticas sobre credenciamento, protocolo de segurança na ONU e logística de viagem.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-list flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="faq-item rounded-2xl bg-[#0d131f] border border-white/15 hover:border-white/30 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full min-h-[56px] px-6 py-4 flex items-center justify-between text-left gap-4 font-bold text-sm sm:text-base text-white hover:text-[#38bdf8] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <span className={`text-lg font-mono transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-45 text-[#38bdf8]' : 'text-white/40'}`}>
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-white/80 font-light leading-relaxed border-t border-white/5 pt-4">
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
