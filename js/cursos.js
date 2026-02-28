"use strict";
import { fetchData, createElement } from './utils.js';

function createCursoCard(curso) {
  const img = createElement('img', { class: 'imagem-projeto', src: curso.imagem, alt: curso.titulo });
  const title = createElement('h3');
  const strong = createElement('strong', { class: 'destaque' }, curso.titulo);
  title.appendChild(strong);
  const description = createElement('p', {}, curso.descricao);
  const link = createElement('a', {
    href: curso.certificado,
    target: '_blank',
    rel: 'noopener noreferrer',
    class: 'projeto__link'
  }, 'Ver Certificado ');
  const icon = createElement('i', { class: 'bi bi-patch-check-fill' });
  link.appendChild(icon);
  const linksContainer = createElement('div', { class: 'projeto__links' });
  linksContainer.appendChild(link);
  const card = createElement('div', { class: 'projeto__card carousel__item' });
  card.append(img, title, description, linksContainer);
  return card;
}

function createCarousel() {
  const track = createElement('div', { class: 'carousel__track' });
  const trackContainer = createElement('div', { class: 'carousel__track-container' });
  trackContainer.appendChild(track);

  const prevButton = createElement('button', { class: 'carousel__button carousel__button--left' });
  prevButton.innerHTML = '<i class="bi bi-chevron-left"></i>';
  const nextButton = createElement('button', { class: 'carousel__button carousel__button--right' });
  nextButton.innerHTML = '<i class="bi bi-chevron-right"></i>';

  const carousel = createElement('div', { class: 'carousel' });
  carousel.append(trackContainer, prevButton, nextButton);

  return { carousel, track };
}

export async function loadCursos(container) {
  const data = await fetchData('data/cursos.json');
  const cursos = data.cursos;
  
  const { carousel, track } = createCarousel();

  cursos.forEach(curso => {
    const card = createCursoCard(curso);
    track.appendChild(card);
  });

  container.textContent = '';
  container.appendChild(carousel);
}
