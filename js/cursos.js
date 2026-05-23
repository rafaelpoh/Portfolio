"use strict";
import { fetchData, createElement, createCarousel } from './utils.js';

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
