/**
 * Utilitários de Segurança e Higienização de Protocolos (reactspecs & OWASP)
 */

/**
 * Valida se uma URL é segura para navegação antes de ser injetada em tags de link (<a href>).
 * Bloqueia protocolos perigosos como `javascript:`, `vbscript:` e `data:` maliciosos.
 */
export function isSafeUrl(url: string): boolean {
  if (!url || typeof url !== 'string') {
    return false;
  }

  const trimmed = url.trim();

  // Permite âncoras locais, caminhos relativos e arquivos estáticos confiáveis
  if (
    trimmed.startsWith('#') ||
    trimmed.startsWith('/') ||
    trimmed.startsWith('./') ||
    trimmed.startsWith('../')
  ) {
    return true;
  }

  try {
    const parsed = new URL(trimmed);
    const protocol = parsed.protocol.toLowerCase();
    return protocol === 'http:' || protocol === 'https:' || protocol === 'mailto:';
  } catch {
    // Se a URL não for absoluta válida, verifica se não começa com protocolo proibido
    const lower = trimmed.toLowerCase();
    if (
      lower.startsWith('javascript:') ||
      lower.startsWith('data:') ||
      lower.startsWith('vbscript:')
    ) {
      return false;
    }
    return true;
  }
}

/**
 * Retorna uma URL higienizada ou um fallback seguro '#' caso a URL seja perigosa.
 */
export function sanitizeLink(url: string): string {
  return isSafeUrl(url) ? url : '#';
}
