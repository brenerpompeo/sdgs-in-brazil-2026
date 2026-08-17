import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useI18n } from '../i18n/LanguageProvider';


export const Sponsors: React.FC = () => {
  const { t } = useI18n();
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
    <section id="patrocinio" className="py-14 sm:py-20 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#5F3469]/10 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Editorial Header */}
        <div className="sponsors-header text-center max-w-4xl mx-auto mb-10">
          <span className="text-[11px] font-bold text-white/60 tracking-[0.3em] uppercase block mb-3 font-mono">
            {t.sponsors.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.sponsors.title}<br />
            <span className="text-white/80 font-light">{t.sponsors.titleAccent}</span>
          </h2>
          <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto leading-relaxed font-light">
            {t.sponsors.subtitle}
          </p>
        </div>

        {/* Commercial Sponsorship Section with Contact to Rafael Carmo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-12 bg-black">
          
          {/* Left Column: Benefits of Sponsorship */}
          <div className="lg:col-span-7 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-white/60 block mb-3">
                {t.sponsors.opportunityEyebrow}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                {t.sponsors.opportunityTitle}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light mb-8">
                {t.sponsors.opportunityBody}
              </p>

              {/* Benefits Checklist */}
              <div className="flex flex-col gap-5">
                {t.sponsors.benefits.map((b, i) => (
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
                {t.sponsors.contactEyebrow}
              </span>
              <h4 className="text-2xl font-extrabold text-white mb-3">
                Rafael Carmo
              </h4>
              <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed mb-8">
                {t.sponsors.contactBody}
              </p>
            </div>

            <div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:rafael.carmo@pactoglobal.org.br?subject=Interesse%20em%20Patroc%C3%ADnio%20-%20SDGs%20in%20Brazil%202026"
                className="w-full min-h-[50px] px-6 py-3.5 bg-white text-black hover:bg-gray-100 font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-lg flex items-center justify-center transition-colors font-mono mb-3"
              >
                {t.sponsors.contactCta}
              </motion.a>
              <p className="text-[11px] font-mono text-center text-white/60 tracking-wider">
                RAFAEL.CARMO@PACTOGLOBAL.ORG.BR
              </p>
            </div>
          </div>

        </div>

        {/* Institutional Section: Sobre o Pacto Global da ONU – Rede Brasil */}
        <div className="mt-14 mb-8 p-8 sm:p-12 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
          {/* Header with Logo on the Left */}
          <div className="mb-8 pb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
            <div className="flex-shrink-0">
              <img 
                src="./assets/pacto-global-realizacao.png" 
                alt={t.sponsors.logoAlt} 
                className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-md brightness-110"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#00A3E0] uppercase block mb-2">
                {t.sponsors.aboutEyebrow}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {t.sponsors.aboutTitle}
              </h3>
            </div>
          </div>

          {/* 2-Column Institutional Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Column 1: Sobre o Pacto Global da ONU */}
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] inline-block" />
                {t.sponsors.globalTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {t.sponsors.globalP1}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {t.sponsors.globalP2}
              </p>
              <div className="pt-2 text-xs font-mono">
                <a 
                  href="http://www.unglobalcompact.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#00A3E0] hover:underline font-bold inline-flex items-center gap-1"
                >
                  Siga @globalcompact · www.unglobalcompact.org ↗
                </a>
              </div>
            </div>

            {/* Column 2: O Pacto Global – Rede Brasil */}
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00FF41] inline-block" />
                {t.sponsors.brazilTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {t.sponsors.brazilP1}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {t.sponsors.brazilP2}
              </p>
              <div className="pt-2 text-xs font-mono">
                <a 
                  href="http://www.pactoglobal.org.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#00FF41] hover:underline font-bold inline-flex items-center gap-1"
                >
                  Siga @pactoglobalonubr · www.pactoglobal.org.br ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Network Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black border border-white/10 rounded-3xl p-8 text-center">
          <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10">
            <span className="text-3xl font-extrabold text-white font-mono block mb-1">{t.sponsors.stats[0].value}</span>
            <span className="text-[10px] text-white/60 font-mono uppercase tracking-wider">{t.sponsors.stats[0].label}</span>
          </div>
          <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10">
            <span className="text-3xl font-extrabold text-white font-mono block mb-1">{t.sponsors.stats[1].value}</span>
            <span className="text-[10px] text-white/60 font-mono uppercase tracking-wider">{t.sponsors.stats[1].label}</span>
          </div>
          <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10">
            <span className="text-3xl font-extrabold text-white font-mono block mb-1">{t.sponsors.stats[2].value}</span>
            <span className="text-[10px] text-white/60 font-mono uppercase tracking-wider">{t.sponsors.stats[2].label}</span>
          </div>
          <div className="p-4 bg-white/[0.02] rounded-2xl border border-white/10">
            <span className="text-3xl font-extrabold text-white font-mono block mb-1">{t.sponsors.stats[3].value}</span>
            <span className="text-[10px] text-white/60 font-mono uppercase tracking-wider">{t.sponsors.stats[3].label}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
