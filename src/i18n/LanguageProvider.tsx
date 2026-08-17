import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, isLocale, STORAGE_KEY, type Locale, type Localized } from './types';
import { DICTIONARIES, type Dictionary } from './dictionaries';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  /** Dicionário do idioma ativo. */
  t: Dictionary;
  /** Resolve um campo localizado vindo dos arquivos de dados. */
  pick: (value: Localized) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored)) return stored;

  // Só cai para inglês quando o navegador não indica português.
  const preferred = window.navigator.languages ?? [window.navigator.language];
  const wantsPortuguese = preferred.some((lang) => lang?.toLowerCase().startsWith('pt'));
  return wantsPortuguese ? 'pt-BR' : 'en-US';
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = DICTIONARIES[locale].meta.title;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Modo privativo pode bloquear o storage; a troca de idioma segue válida na sessão.
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: DICTIONARIES[locale],
      pick: (localized: Localized) => localized[locale],
    }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useI18n precisa ser usado dentro de <LanguageProvider>.');
  }
  return ctx;
}
