import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/LanguageProvider';
import { LOCALES, LOCALE_LABELS, LOCALE_NAMES } from '../i18n/types';

interface LanguageToggleProps {
  className?: string;
}

/**
 * Alterna entre PT-BR e EN-US. Renderiza os dois idiomas lado a lado — em vez de
 * um botão que só mostra o idioma alternativo — para que a opção ativa fique
 * explícita. Cada botão respeita o alvo de toque de 44px usado no restante do header.
 */
export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.common.languageSwitch}
      className={`flex items-center gap-0.5 p-0.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl ${className}`}
    >
      {LOCALES.map((option) => {
        const isActive = option === locale;

        return (
          <motion.button
            key={option}
            type="button"
            whileTap={{ scale: 0.94 }}
            onClick={() => setLocale(option)}
            aria-pressed={isActive}
            aria-label={LOCALE_NAMES[option]}
            lang={option}
            className={`relative min-w-[44px] min-h-[44px] px-2.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3E0] focus-visible:ring-offset-1 focus-visible:ring-offset-black ${
              isActive
                ? 'bg-white text-black shadow-md'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            {LOCALE_LABELS[option]}
          </motion.button>
        );
      })}
    </div>
  );
};
