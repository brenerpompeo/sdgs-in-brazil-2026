import type { Locale } from '../types';
import { ptBR } from './pt-BR';
import { enUS } from './en-US';

/**
 * Alarga os literais de `as const` para `string`, em qualquer profundidade,
 * preservando a forma do objeto e as assinaturas de função.
 */
type Widen<T> = T extends string
  ? string
  : T extends (...args: infer A) => infer R
    ? (...args: A) => R
    : T extends readonly (infer E)[]
      ? readonly Widen<E>[]
      : { -readonly [K in keyof T]: Widen<T[K]> };

/**
 * O dicionário PT-BR é a fonte da verdade da forma: qualquer chave ausente ou
 * sobrando no en-US quebra a compilação.
 */
export type Dictionary = Widen<typeof ptBR>;

export const DICTIONARIES: Record<Locale, Dictionary> = {
  'pt-BR': ptBR,
  'en-US': enUS,
};
