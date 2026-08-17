/**
 * Artes com texto embutido no arquivo (faixa de data, lockup de marcas) precisam de
 * uma versão por idioma. Enquanto o design não entrega a peça traduzida, o site deve
 * exibir a versão em português em vez de uma imagem quebrada.
 *
 * A checagem acontece em tempo de build: o glob lista o que existe em
 * public/assets/, então nenhuma requisição 404 chega ao navegador. Basta adicionar
 * o arquivo (ex.: data_horizontal_en.png) e rebuildar — nenhum código muda.
 */
const AVAILABLE_ART = new Set(
  Object.keys(
    (import.meta as any).glob('/public/assets/*.{png,jpg,jpeg,webp}', {
      eager: true,
      query: '?url',
      import: 'default',
    }),
  ).map((path) => path.split('/').pop() ?? ''),
);

export function resolveArt(preferred: string, fallback: string): string {
  const filename = preferred.split('/').pop() ?? '';
  return AVAILABLE_ART.has(filename) ? preferred : fallback;
}

/** Artes em PT-BR, usadas como fallback. */
export const PT_ART = {
  dateImage: './assets/data_horizontal.png',
  brandsImage: './assets/marcas.png',
} as const;
