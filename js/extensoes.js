"use strict";
import { fetchData, createElement } from "./utils.js";

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
