"use strict";

import { qs } from "./utils.js";
import { loadCursos } from "./cursos.js";
import { loadHabilidades } from "./habilidades.js";
import { loadProjetos } from "./projetos.js";
import { loadOutrosProjetos } from "./outros-projetos.js";
import { loadSobre } from "./sobre.js";
import { loadContato } from "./contato.js";
import { loadExtensoes } from "./extensoes.js";
import { initCarousel } from "./main.js";

const contentContainer = qs("#conteudo-dinamico_container");

const routes = {
  "/": loadSobre,
  "/sobre": loadSobre,
  "/cursos": loadCursos,
  "/habilidades": loadHabilidades,
  "/projetos": loadProjetos,
  "/outros-projetos": loadOutrosProjetos,
  "/extensoes": loadExtensoes,
  "/contato": loadContato,
};

const pathRequiresCarousel = (path) => {
  return ['/cursos', '/projetos', '/outros-projetos', '/extensoes'].includes(path);
};

const loadPage = async (loader, path) => {
  contentContainer.textContent = '';
  await loader(contentContainer);

  if (pathRequiresCarousel(path)) {
    initCarousel('.carousel');
  }
};

export const handleLocation = async () => {
  const path = window.location.hash.substring(1) || "/";
  const loader = routes[path] || routes["/"];
  await loadPage(loader, path);
};

export const onNavigate = (path) => {
  window.history.pushState({}, path, window.location.origin + window.location.pathname + path);
  handleLocation();
};
