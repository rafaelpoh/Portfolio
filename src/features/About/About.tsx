import { FC, memo } from 'react';
import type { ProfileData, NavSection } from '../../types/portfolio';
import { ProfileCanvas } from './components/ProfileCanvas';
import { Button } from '../../components/Button/Button';
import { Badge } from '../../components/Badge/Badge';
import styles from './About.module.css';

export interface AboutProps {
  readonly profile: ProfileData;
  readonly onNavigate: (section: NavSection) => void;
}

export const About: FC<AboutProps> = memo(({ profile, onNavigate }) => {
  return (
    <section className={`${styles.aboutSection} animate-fade-in`} aria-labelledby="about-title">
      <div className={styles.container}>
        {/* Coluna da Imagem com Canvas Interativo */}
        <div className={styles.imageColumn}>
          <ProfileCanvas
            primarySrc={profile.photoAlternative}
            alternativeSrc={profile.photo}
            alt={`Foto de perfil de ${profile.name}`}
          />
          <div className={styles.socialQuickLinks}>
            <Button
              variant="secondary"
              size="sm"
              href={profile.githubUrl}
              target="_blank"
              icon={<i className="bi bi-github" aria-hidden="true" />}
              ariaLabel="Acessar GitHub de Rafael Perroni"
            >
              GitHub
            </Button>
            <Button
              variant="secondary"
              size="sm"
              href={profile.linkedinUrl}
              target="_blank"
              icon={<i className="bi bi-linkedin" aria-hidden="true" />}
              ariaLabel="Acessar LinkedIn de Rafael Perroni"
            >
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Coluna do Conteúdo Textual */}
        <div className={styles.textColumn}>
          <div className={styles.headerArea}>
            <div className={styles.badgeRow}>
              <Badge variant="accent" icon={<i className="bi bi-terminal-fill" aria-hidden="true" />}>
                Sistemas & Lógica
              </Badge>
              <Badge variant="default" icon={<i className="bi bi-lightning-charge-fill" aria-hidden="true" />}>
                Front-End Moderno
              </Badge>
            </div>
            <h1 id="about-title" className={styles.title}>
              Olá, sou <span className={styles.nameHighlight}>{profile.name}</span>
            </h1>
            <h2 className={styles.subtitle}>{profile.role}</h2>
          </div>

          <div className={styles.bio}>
            <p className={styles.paragraph}>
              Um <strong className="destaque">Desenvolvedor Front-End</strong> que une o rigor da lógica estruturada à eficiência das interfaces modernas.
            </p>
            <p className={styles.paragraph}>
              Minha trajetória na tecnologia é marcada por uma base de engenharia profunda. Antes de focar na experiência do usuário, consolidei meu raciocínio lógico e a resolução de problemas complexos através de linguagens de baixo nível como <strong className="destaque">C e C++</strong>. Essa bagagem me permite entender exatamente o que acontece por trás dos panos de uma aplicação, resultando em um código nativo (<strong className="destaque">JavaScript, HTML5 e CSS3</strong>) muito mais sólido, semântico e performático.
            </p>
            <p className={styles.paragraph}>
              Graduado em <strong className="destaque">Análise e Desenvolvimento de Sistemas (ADS)</strong> e com histórico prático no <strong className="destaque">Banco do Brasil</strong> manipulando bancos de dados relacionais (SQL) e relatórios, desenvolvi uma visão analítica sobre a organização e o fluxo de dados. Hoje, aplico essa disciplina na construção de layouts responsivos, modulares e pautados em <strong className="destaque">Acessibilidade Web (WCAG)</strong>, dominando a arquitetura e o desenvolvimento de aplicações modernas com <strong className="destaque">React e TypeScript</strong>.
            </p>
            <p className={styles.paragraph}>
              Além disso, sou um entusiasta de <strong className="destaque">Inteligência Artificial</strong>, integrando ferramentas inteligentes para otimizar meu fluxo de desenvolvimento e elevar a precisão das minhas entregas. Sou movido por desafios arquiteturais e pela evolução técnica constante. Vamos construir algo incrível juntos?
            </p>
          </div>

          {/* Chamadas de Ação Rápidas */}
          <div className={styles.actionsRow}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate('projetos')}
              icon={<i className="bi bi-arrow-right-circle-fill" aria-hidden="true" />}
            >
              Explorar Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('contato')}
              icon={<i className="bi bi-chat-dots-fill" aria-hidden="true" />}
            >
              Falar Comigo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
