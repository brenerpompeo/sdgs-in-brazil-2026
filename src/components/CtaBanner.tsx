import React from 'react';
import { motion } from 'framer-motion';
import { LEGAL_LINKS } from '../data/legalLinks';
import { useI18n } from '../i18n/LanguageProvider';

export const CtaBanner: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="py-14 sm:py-20 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00A3E0]/10 blur-[200px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-[11px] font-bold text-[#00A3E0] tracking-[0.3em] uppercase block mb-4 font-mono">
          {t.cta.eyebrow}
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          {t.cta.title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-light leading-relaxed mb-10">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col items-center gap-4 font-mono max-w-2xl mx-auto">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://sdgs2026.cadastro9.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[54px] px-10 py-4 bg-white text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-2xl hover:bg-gray-100 flex items-center justify-center transition-colors text-center"
          >
            {t.common.interestLong} →
          </motion.a>

          {/* Legal / Disclaimer Notice for Expression of Interest */}
          <div className="text-[11px] sm:text-xs text-slate-300 font-sans font-light leading-relaxed text-center mt-4 p-4 sm:p-5 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 max-w-xl">
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#00A3E0] block mb-1">
              {t.cta.noticeTitle}
            </span>
            {t.cta.noticeBody}

            <span className="mt-3 pt-3 border-t border-white/10 flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-[10px] font-mono font-bold uppercase tracking-widest">
              {LEGAL_LINKS.map((link, index) => (
                <React.Fragment key={link.href}>
                  {index > 0 && <span className="text-white/30" aria-hidden="true">·</span>}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00A3E0] hover:text-white hover:underline transition-colors"
                  >
                    {t.legal[link.key]}
                  </a>
                </React.Fragment>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
