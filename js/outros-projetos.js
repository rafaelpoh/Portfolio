"use strict";
import { fetchData, createElement, createCarousel } from "./utils.js";

function createOutroProjetoCard(project) {
  const img = createElement("img", {
    class: "imagem-projeto",
    src: project.imagem,
    alt: project.titulo,
  });
  const title = createElement("h3");
  const strong = createElement("strong", { class: "destaque" }, project.titulo);
  title.appendChild(strong);
  const description = createElement("p", {}, project.descricao);
  const pageLink = createElement(
    "a",
    {
      href: project.pagina,
      target: "_blank",
      rel: "noopener noreferrer",
      class: "projeto__link",
    },
    "Ver Pagina ",
  );
  const pageIcon = createElement("i", { class: "bi bi-globe2" });
  pageLink.appendChild(pageIcon);
  const githubLink = createElement(
    "a",
    {
      href: project.github,
      target: "_blank",
      rel: "noopener noreferrer",
      class: "projeto__link",
    },
    "Ver Projeto ",
  );
  const githubIcon = createElement("i", { class: "bi bi-github" });
  githubLink.appendChild(githubIcon);
  const linksContainer = createElement("div", { class: "projeto__links" });
  linksContainer.append(pageLink, githubLink);
  const card = createElement("div", { class: "projeto__card carousel__item" });
  card.append(img, title, description, linksContainer);
  return card;
}



export async function loadOutrosProjetos(container) {
  const data = await fetchData("data/outros-projetos.json");
  const projects = data["contribuicoes_e_estudos"];

  const { carousel, track } = createCarousel();

  projects.forEach((project) => {
    const card = createOutroProjetoCard(project);
    track.appendChild(card);
  });

  const title = createElement(
    "h2",
    { class: "projetos__titulo" },
    "Outros Projetos",
  );
  const description = createElement(
    "p",
    { class: "projetos__descricao" },
    "Implementações baseadas em orientações de mentores, onde foquei em refinar funcionalidades específicas e adaptar layouts sobre bases já existentes.",
  );

  container.textContent = "";
  container.append(title, description, carousel);
}
