import type { Locale } from '../types';
import type { Speaker } from '../../data/speakersData';
import type { SessionItem } from '../../data/scheduleData';
import type { PastLeader } from '../../data/pastLeadersData';
import { SPEAKERS_EN } from './speakers.en';
import { SCHEDULE_EN } from './schedule.en';
import { PAST_LEADERS_EN } from './pastLeaders.en';

/**
 * Os arquivos em src/data guardam o conteúdo em PT-BR (idioma base). Para en-US
 * aplicamos apenas os campos traduzidos, sem duplicar ids, fotos, horários ou ODS.
 * Sempre retorna um novo objeto — nunca muta o dado original.
 */
function withOverride<T extends { id: string }>(
  item: T,
  locale: Locale,
  overrides: Record<string, Partial<T>>,
): T {
  if (locale === 'pt-BR') return item;
  const override = overrides[item.id];
  return override ? { ...item, ...override } : item;
}

export function localizeSpeaker(speaker: Speaker, locale: Locale): Speaker {
  return withOverride<Speaker>(speaker, locale, SPEAKERS_EN);
}

export function localizeSession(session: SessionItem, locale: Locale): SessionItem {
  return withOverride<SessionItem>(session, locale, SCHEDULE_EN);
}

export function localizeLeader(leader: PastLeader, locale: Locale): PastLeader {
  return withOverride<PastLeader>(leader, locale, PAST_LEADERS_EN);
}
