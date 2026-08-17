export interface LegalLink {
  label: string;
  href: string;
}

/**
 * Documentos legais oficiais do Pacto Global da ONU - Rede Brasil.
 * Referenciados no rodapé e no aviso da manifestação de interesse.
 */
export const TERMS_OF_USE: LegalLink = {
  label: 'Termos de Uso',
  href: 'https://www.pactoglobal.org.br/wp-content/uploads/2024/03/Aviso-de-Privacidade-Signatarios-e-Prospects-final-Marco-2021.pdf',
};

export const PRIVACY_POLICY: LegalLink = {
  label: 'Política de Privacidade',
  href: 'https://www.pactoglobal.org.br/wp-content/uploads/2026/03/Poli%CC%81tica_de_Governanc%CC%A7a_de_Protec%CC%A7a%CC%83o_de_Dados_Pessoais.docx-1.pdf',
};

export const LEGAL_LINKS: readonly LegalLink[] = [TERMS_OF_USE, PRIVACY_POLICY];
