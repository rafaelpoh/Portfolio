"use strict";

import { initSobre } from "./sobre.js";

const routes = {
  "/": "sobre-page",
  "/sobre": "sobre-page",
  "/cursos": "cursos-page",
  "/habilidades": "habilidades-page",
  "/projetos": "projetos-page",
  "/outros-projetos": "outros-projetos-page",
  "/extensoes": "extensoes-page",
  "/contato": "contato-page",
};

export const handleLocation = () => {
  const path = window.location.hash.substring(1) || "/";
  const activePageId = routes[path] || routes["/"];

  const pages = document.querySelectorAll('.pagina-secao');
  pages.forEach(page => {
    if (page.id === activePageId) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });

  // Inicializa componentes do 'Sobre' se aplicável (canvas de perfil, etc.)
  if (activePageId === "sobre-page") {
    initSobre();
  }

  // Alinha a translação do carrossel quando a página correspondente fica visível
  const visibleCarousel = document.querySelector(`#${activePageId} .carousel`);
  if (visibleCarousel && typeof visibleCarousel.__updatePosition === 'function') {
    visibleCarousel.__updatePosition();
  }
};

export const onNavigate = (path) => {
  window.history.pushState({}, path, window.location.origin + window.location.pathname + path);
  handleLocation();
};

