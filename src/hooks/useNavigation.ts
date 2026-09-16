import { useState, useEffect, useCallback } from 'react';
import type { NavSection } from '../types/portfolio';

const VALID_SECTIONS: ReadonlyArray<NavSection> = [
  'sobre',
  'cursos',
  'habilidades',
  'projetos',
  'outros-projetos',
  'extensoes',
  'contato',
];

function getSectionFromHash(): NavSection {
  if (typeof window === 'undefined') return 'sobre';
  const rawHash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  const found = VALID_SECTIONS.find((sec) => sec === rawHash);
  return found || 'sobre';
}

/**
 * Hook para navegação dinâmica desacoplada da aplicação.
 * Sincroniza com hash no navegador sem recarregar a página.
 */
export function useNavigation() {
  const [activeSection, setActiveSection] = useState<NavSection>(getSectionFromHash);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(getSectionFromHash());
      // Rola para o topo ao alternar de tela para garantir boa leitura
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateTo = useCallback((section: NavSection) => {
    setActiveSection(section);
    window.location.hash = `#/${section}`;
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return {
    activeSection,
    navigateTo,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
}
