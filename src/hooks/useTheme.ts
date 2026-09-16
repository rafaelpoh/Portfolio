import { useState, useEffect, useCallback } from 'react';
import type { ThemeMode } from '../types/portfolio';

const THEME_STORAGE_KEY = 'portfolio_theme_preference';

/**
 * Hook customizado para alternância de tema Claro/Escuro (reactspecs & A11y)
 * Gerencia a sincronização com o DOM e persistência local.
 */
export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    // 1. Tenta obter do armazenamento local
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'Claro' || saved === 'Escuro') {
      return saved;
    }
    // 2. Fallback para preferência do sistema operacional
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      return 'Claro';
    }
    return 'Escuro';
  });

  useEffect(() => {
    // Sincroniza atributo no nó raiz <html>
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'Escuro' ? 'Claro' : 'Escuro'));
  }, []);

  return {
    theme,
    toggleTheme,
    isDark: theme === 'Escuro',
  };
}
