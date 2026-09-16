import { FC, memo, useState, useCallback } from 'react';
import type { ProfileData } from '../../types/portfolio';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import styles from './Contact.module.css';

export interface ContactProps {
  readonly profile: ProfileData;
}

export const Contact: FC<ContactProps> = memo(({ profile }) => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => {
        setCopiedEmail(false);
      }, 3000);
    } catch {
      // Fallback gracioso
      setCopiedEmail(false);
    }
  }, [profile.email]);

  return (
    <section className={`${styles.contactSection} animate-fade-in`} aria-labelledby="contact-title">
      <div className={styles.header}>
        <h2 id="contact-title" className={styles.title}>
          Vamos construir algo <span className="destaque">incrível?</span>
        </h2>
        <p className={styles.subtitle}>
          Estou disponível para novos desafios, posições em Front-End / Engenharia de Software e projetos inovadores. Entre em contato diretamente através dos canais abaixo.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {/* Card E-mail com Cópia Rápida */}
        <Card className={styles.contactCard} elevated>
          <div className={styles.cardHeader}>
            <div className={styles.iconCircle}>
              <i className="bi bi-envelope-at-fill" aria-hidden="true" />
            </div>
            <div>
              <h3 className={styles.channelTitle}>E-mail Profissional</h3>
              <p className={styles.channelValue}>{profile.email}</p>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <Button
              variant="primary"
              size="md"
              href={`mailto:${profile.email}`}
              icon={<i className="bi bi-send-fill" aria-hidden="true" />}
              ariaLabel={`Enviar e-mail para ${profile.email}`}
            >
              Enviar E-mail
            </Button>
            <Button
              variant={copiedEmail ? 'outline' : 'secondary'}
              size="md"
              onClick={handleCopyEmail}
              icon={
                <i
                  className={`bi ${copiedEmail ? 'bi-check2-all' : 'bi-clipboard'}`}
                  aria-hidden="true"
                />
              }
              ariaLabel="Copiar endereço de e-mail"
            >
              {copiedEmail ? 'Copiado!' : 'Copiar E-mail'}
            </Button>
          </div>
        </Card>

        {/* Card LinkedIn */}
        <Card className={styles.contactCard} elevated>
          <div className={styles.cardHeader}>
            <div className={styles.iconCircle}>
              <i className="bi bi-linkedin" aria-hidden="true" />
            </div>
            <div>
              <h3 className={styles.channelTitle}>LinkedIn</h3>
              <p className={styles.channelValue}>in/rafaelperroni</p>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <Button
              variant="primary"
              size="md"
              href={profile.linkedinUrl}
              target="_blank"
              icon={<i className="bi bi-box-arrow-up-right" aria-hidden="true" />}
              ariaLabel="Conectar no LinkedIn"
            >
              Conectar no LinkedIn
            </Button>
          </div>
        </Card>

        {/* Card GitHub */}
        <Card className={styles.contactCard} elevated>
          <div className={styles.cardHeader}>
            <div className={styles.iconCircle}>
              <i className="bi bi-github" aria-hidden="true" />
            </div>
            <div>
              <h3 className={styles.channelTitle}>GitHub</h3>
              <p className={styles.channelValue}>@rafaelpoh</p>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <Button
              variant="secondary"
              size="md"
              href={profile.githubUrl}
              target="_blank"
              icon={<i className="bi bi-box-arrow-up-right" aria-hidden="true" />}
              ariaLabel="Explorar repositórios no GitHub"
            >
              Explorar Repositórios
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
