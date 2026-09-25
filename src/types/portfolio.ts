/**
 * Contratos de Dados do Portfólio (reactspecs: Tipagem Estrita e Imutabilidade)
 */

export type ThemeMode = 'Escuro' | 'Claro';

export type NavSection =
  | 'sobre'
  | 'cursos'
  | 'habilidades'
  | 'projetos'
  | 'outros-projetos'
  | 'extensoes'
  | 'contato';

export interface NavItem {
  readonly id: NavSection;
  readonly label: string;
  readonly icon: string;
}

export interface ProfileData {
  readonly name: string;
  readonly role: string;
  readonly photo: string;
  readonly photoAlternative: string;
  readonly paragraphs: ReadonlyArray<string>;
  readonly githubUrl: string;
  readonly linkedinUrl: string;
  readonly email: string;
  readonly resumeUrl: string;
}

export interface Course {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly description: string;
  readonly certificateUrl: string;
  readonly institution?: string;
}

export interface SkillItem {
  readonly id: string;
  readonly name: string;
  readonly iconUrl?: string;
}

export interface LanguageItem {
  readonly id: string;
  readonly name: string;
  readonly level: string;
}

export interface SkillsData {
  readonly programming: ReadonlyArray<SkillItem>;
  readonly tools: ReadonlyArray<SkillItem>;
  readonly languages: ReadonlyArray<LanguageItem>;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly description: string;
  readonly liveUrl: string;
  readonly githubUrl?: string;
  readonly tags?: ReadonlyArray<string>;
}

export interface Extension {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly description: string;
  readonly storeUrl: string;
  readonly badgeText?: string;
}

export interface OtherProject {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly description: string;
  readonly liveUrl: string;
  readonly githubUrl?: string;
  readonly tags?: ReadonlyArray<string>;
}
