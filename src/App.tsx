import { FC, useMemo } from 'react';
import { useTheme } from './hooks/useTheme';
import { useNavigation } from './hooks/useNavigation';
import { Navbar } from './components/Navbar/Navbar';
import { ThemeSwitch } from './components/ThemeSwitch/ThemeSwitch';
import { Footer } from './components/Footer/Footer';

// Features
import { About } from './features/About/About';
import { Courses } from './features/Courses/Courses';
import { Skills } from './features/Skills/Skills';
import { Projects } from './features/Projects/Projects';
import { OtherProjects } from './features/OtherProjects/OtherProjects';
import { Extensions } from './features/Extensions/Extensions';
import { Contact } from './features/Contact/Contact';

// Dados Centralizados
import {
  NAVIGATION_ITEMS,
  PROFILE_DATA,
  COURSES_DATA,
  SKILLS_DATA,
  PROJECTS_DATA,
  OTHER_PROJECTS_DATA,
  EXTENSIONS_DATA,
} from './data/portfolioData';

import styles from './App.module.css';

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const {
    activeSection,
    navigateTo,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  } = useNavigation();

  // Renderização declarativa da seção ativa (State Colocation & Performance)
  const renderActiveSection = useMemo(() => {
    switch (activeSection) {
      case 'sobre':
        return <About profile={PROFILE_DATA} onNavigate={navigateTo} />;
      case 'cursos':
        return <Courses courses={COURSES_DATA} />;
      case 'habilidades':
        return <Skills skills={SKILLS_DATA} />;
      case 'projetos':
        return <Projects projects={PROJECTS_DATA} />;
      case 'outros-projetos':
        return <OtherProjects items={OTHER_PROJECTS_DATA} />;
      case 'extensoes':
        return <Extensions extensions={EXTENSIONS_DATA} />;
      case 'contato':
        return <Contact profile={PROFILE_DATA} />;
      default:
        return <About profile={PROFILE_DATA} onNavigate={navigateTo} />;
    }
  }, [activeSection, navigateTo]);

  return (
    <div className={styles.appContainer}>
      {/* Barra de Navegação Lateral / Drawer Mobile */}
      <Navbar
        items={NAVIGATION_ITEMS}
        activeSection={activeSection}
        isMobileOpen={isMobileMenuOpen}
        onSelectSection={navigateTo}
        onToggleMobile={toggleMobileMenu}
        onCloseMobile={closeMobileMenu}
      />

      {/* Botão Flutuante de Alternância de Tema */}
      <div className={styles.themeSwitchContainer}>
        <ThemeSwitch theme={theme} onToggle={toggleTheme} />
      </div>

      {/* Área Principal de Conteúdo Dinâmico */}
      <div className={styles.mainWrapper}>
        <main className={styles.mainContent} id="conteudo-principal">
          {renderActiveSection}
        </main>
        <Footer />
      </div>
    </div>
  );
};
