export type Locale = 'pt-BR' | 'en-US';

export const LOCALES: readonly Locale[] = ['pt-BR', 'en-US'] as const;

export const DEFAULT_LOCALE: Locale = 'pt-BR';

export const STORAGE_KEY = 'sdgs-locale';

/** Rótulo curto exibido no toggle do header. */
export const LOCALE_LABELS: Record<Locale, string> = {
  'pt-BR': 'PT',
  'en-US': 'EN',
};

/** Rótulo acessível completo, lido por leitores de tela. */
export const LOCALE_NAMES: Record<Locale, string> = {
  'pt-BR': 'Português (Brasil)',
  'en-US': 'English (United States)',
};

/** Texto que varia por idioma dentro dos arquivos de dados. */
export type Localized = Record<Locale, string>;

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}
