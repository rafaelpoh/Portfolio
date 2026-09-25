---
name: Rafael Perroni Portfolio
description: Portfólio de Alta Performance com React, TypeScript e Design Tokens Semânticos
colors:
  primary: "#28cb4f"
  primary-hover: "#34e05e"
  primary-text: "#003108"
  accent: "#00f0ff"
  bg-base: "#0d1217"
  bg-surface: "#162029"
  bg-card: "rgba(26, 38, 48, 0.65)"
  border-subtle: "rgba(255, 255, 255, 0.08)"
  border-accent: "rgba(40, 203, 79, 0.45)"
  text-primary: "#f8fafc"
  text-secondary: "#94a3b8"
  text-muted: "#64748b"
typography:
  display:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-text}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
---

# Design System

<!-- impeccable:design-schema 1 -->

## Overview
Design System construído para o portfólio de **Rafael Perroni**, refletindo a intersecção entre o rigor analítico da engenharia de software de sistemas (C/C++, SQL, ADS) e o craft de interfaces web modernas (React 18, TypeScript, CSS Modules e WCAG).

## Colors
- **Tema Escuro (Padrão):** Fundo espacial profundo (`#0d1217` / `#131d24`) com cartões em glassmorphism fosco (`rgba(26, 38, 48, 0.65)`), detalhes e brilhos em Verde Esmeralda (`#28cb4f`) e acentos tecnológicos em Ciano (`#00f0ff`).
- **Tema Claro (Alternativo):** Fundo de porcelana cerúlea (`#f1f5f9` / `#e2e8f0`), cartões translúcidos brancos (`rgba(255, 255, 255, 0.9)`), realces em Azul Petróleo (`#058db6`) e texto de alto contraste (`#0f172a`).

## Typography
- **Fonte Principal:** `Poppins`, com fallbacks para `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
- **Hierarquia:**
  - Títulos de Seção: `2.25rem` a `3rem` (700 Bold, tracking refinado).
  - Títulos de Cartão: `1.125rem` a `1.25rem` (600 Semibold).
  - Texto Corrido: `1rem` (400 Normal, line-height 1.625).
  - Badges e Metadados: `0.75rem` a `0.875rem` (500 Medium).

## Layout
- **Mobile-First:** Menu lateral gaveta retrátil com backdrop blur em telas `< 1024px`. Em telas desktop (`>= 1024px`), barra lateral fixa de 270px e container principal fluido de até 1200px.
- **Grids e Flexbox:** Sem layouts arbitrários; uso de `display: flex` e `display: grid` com colunas responsivas (`minmax(280px, 1fr)`).

## Elevation & Depth
- **Bordas Sutis:** `1px solid var(--color-border-subtle)` com aumento para `var(--color-border-accent)` nos estados de foco e hover.
- **Sombras:**
  - Cartões: `0 8px 24px rgba(0, 0, 0, 0.45)`.
  - Hover & Foco: `0 16px 36px rgba(0, 0, 0, 0.6), 0 0 20px var(--color-brand-glow)`.
  - Glassmorphism: `backdrop-filter: blur(12px)`.

## Shapes
- Raios de borda suaves e consistentes:
  - Botões e inputs: `10px` (`--radius-md`).
  - Cartões e carrosséis: `16px` (`--radius-lg`).
  - Containers de avatar: `24px` (`--radius-xl`).
  - Badges e indicadores: `9999px` (`--radius-full`).

## Components
- **Button:** Polimórfico (`button` ou `a`), com variantes `primary`, `secondary`, `outline` e `ghost`. Validação estrita de URLs seguras contra XSS e suporte seguro ao atributo `download`.
- **Card:** Contêiner modular com suporte a variante interativa (elevação via hardware transform `translateY(-4px)`).
- **Carousel:** Carrossel acessível com touch swipe nativo, controles por teclado (`ArrowLeft` / `ArrowRight`) e indicadores táteis.
- **ProfileCanvas:** Avatar interativo com renderização em HTML5 Canvas, ResizeObserver e suporte completo a mouse hover e toque móvel sem memory leaks.
- **ThemeSwitch:** Alternador de tema flutuante no topo direito com ícone animado e persistência no `localStorage`.

## Do's and Don'ts
- **DO:** Usar sempre variáveis CSS de `src/styles/tokens.css` para qualquer cor, raio ou espaçamento.
- **DO:** Manter chaves estáveis (`key={item.id}`) em qualquer iteração de lista no React.
- **DO:** Validar URLs dinâmicas com `sanitizeLink` antes de passar para `href`.
- **DON'T:** Nunca usar `innerHTML`, `outerHTML` ou `dangerouslySetInnerHTML`.
- **DON'T:** Nunca animar propriedades de layout que causam reflow (`width`, `height`, `margin`, `padding`). Use `transform` e `opacity`.
