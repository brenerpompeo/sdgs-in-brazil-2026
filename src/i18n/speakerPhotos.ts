/**
 * Resolve a foto de um palestrante a partir do nome escrito à mão em
 * `speakerNamesRaw` (ex.: "Dr. Bayo Akomolafe (Idealizador...)"), casando com os
 * arquivos de /public/assets/speakers/.
 *
 * Antes existia uma lista de casos fixos por pessoa, que precisava ser editada a
 * cada novo palestrante e falhava silenciosamente quando o nome ganhava um
 * prefixo de titulação — foi o que aconteceu com "Dr." em Bayo Akomolafe.
 */
const TITLE_PREFIX =
  /^(dr|dra|prof|profa|sr|sra|embaixador|embaixadora|ambassador|moderacao|moderation|moderator)\s+/;

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripTitles(value: string): string {
  let current = value;
  for (;;) {
    const next = current.replace(TITLE_PREFIX, '');
    if (next === current) return current;
    current = next;
  }
}

/** Monta o índice de fotos a partir do resultado de um import.meta.glob eager. */
export function buildSpeakerPhotoMap(glob: Record<string, unknown>): Record<string, string> {
  return Object.keys(glob).reduce<Record<string, string>>((map, path) => {
    const url = (glob[path] as string) || path.replace('/public', '.');
    const filename = path.split('/').pop()?.toLowerCase().split('.')[0] ?? '';
    if (!filename || filename === 'readme') return map;
    return { ...map, [filename]: url.startsWith('/') ? `.${url}` : url };
  }, {});
}

/**
 * Retorna a URL da foto, ou undefined quando não há arquivo correspondente —
 * caso em que o componente exibe a inicial do nome. Nomes coletivos (como
 * "Lideranças do Setor Privado") caem nesse caminho de propósito.
 */
export function resolveSpeakerPhoto(
  rawName: string,
  photoMap: Record<string, string>,
): string | undefined {
  const name = stripTitles(normalize(rawName.split(' (')[0]));
  if (!name) return undefined;

  const exact = photoMap[name.replace(/\s+/g, '_')];
  if (exact) return exact;

  // "Embaixador Sérgio França Danese" -> arquivo sergio_danese: casa pelo sobrenome.
  const surname = name.split(' ').pop() ?? '';
  const bySurname = Object.keys(photoMap)
    .sort()
    .find((key) => key === surname || key.endsWith(`_${surname}`));

  return bySurname ? photoMap[bySurname] : undefined;
}
