"use strict";
import { fetchData, createElement, createCarousel } from "./utils.js";

function createExtensionCard(extension) {
  const img = createElement("img", {
    class: "imagem-projeto",
    src: extension.imagem,
    alt: extension.titulo,
  });
  const title = createElement("h3");
  const strong = createElement("strong", { class: "destaque" }, extension.titulo);
  title.appendChild(strong);
  const description = createElement("p", {}, extension.descricao);
  const link = createElement(
    "a",
    {
      href: extension.link,
      target: "_blank",
      rel: "noopener noreferrer",
      class: "projeto__link",
    },
    "Ver na Chrome Web Store "
  );
  const icon = createElement("i", { class: "bi bi-puzzle-fill" });
  link.appendChild(icon);

  const linksContainer = createElement("div", { class: "projeto__links" });
  linksContainer.append(link);
  
  const card = createElement("div", { class: "projeto__card carousel__item" });
  card.append(img, title, description, linksContainer);
  return card;
}



export async function loadExtensoes(container) {
  const data = await fetchData("data/extensoes.json");
  const extensions = data.extensoes;

  const { carousel, track } = createCarousel();

  extensions.forEach((extension) => {
    const card = createExtensionCard(extension);
    track.appendChild(card);
  });

  const title = createElement("h2", { class: "projetos__titulo" }, "Extensões");
  const description = createElement(
    "p",
    { class: "projetos__descricao" },
    "Extensões desenvolvidas para navegadores, focando em produtividade e melhoria da experiência do usuário."
  );

  container.textContent = "";
  container.append(title, description, carousel);
}
