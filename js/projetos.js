"use strict";
import { fetchData, createElement } from "./utils.js";

function createProjectCard(project) {
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

function createCarousel() {
  const track = createElement("div", { class: "carousel__track" });
  const trackContainer = createElement("div", {
    class: "carousel__track-container",
  });
  trackContainer.appendChild(track);

  const prevButton = createElement("button", {
    class: "carousel__button carousel__button--left",
  });
  prevButton.innerHTML = '<i class="bi bi-chevron-left"></i>';
  const nextButton = createElement("button", {
    class: "carousel__button carousel__button--right",
  });
  nextButton.innerHTML = '<i class="bi bi-chevron-right"></i>';

  const carousel = createElement("div", { class: "carousel" });
  carousel.append(trackContainer, prevButton, nextButton);

  return { carousel, track };
}

export async function loadProjetos(container) {
  const data = await fetchData("data/projetos.json");
  const projects = data.projetos;

  const { carousel, track } = createCarousel();

  projects.forEach((project) => {
    const card = createProjectCard(project);
    track.appendChild(card);
  });

  const title = createElement("h2", { class: "projetos__titulo" }, "Projetos");
  const description = createElement(
    "p",
    { class: "projetos__descricao" },
    "Aplicações desenvolvidas integralmente por mim, do planejamento à implementação do código, focando em soluções de problemas e lógica própria.",
  );

  container.textContent = "";
  container.append(title, description, carousel);
}
