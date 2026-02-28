"use strict";
import { fetchData, createElement } from './utils.js';

function createSkillSection(title, skills, container) {
  const sectionDiv = createElement('div', { class: `habilidades__${title.toLowerCase().replace(/ /g, "-")}` });
  const sectionTitle = createElement('h3', { class: 'habilidades__subtitulo' }, title);
  sectionDiv.appendChild(sectionTitle);

  const skillList = createElement('ul', { class: 'habilidades__lista' });

  skills.forEach((skill) => {
    const listItem = createElement('li', { class: 'habilidades__item' });

    if (skill.imagem) {
      const image = createElement('img', { src: skill.imagem, alt: skill.nome, class: 'habilidades__imagem' });
      listItem.appendChild(image);
    }

    const name = createElement('span', { class: 'habilidades__nome' }, skill.nome);
    listItem.appendChild(name);

    skillList.appendChild(listItem);
  });

  sectionDiv.appendChild(skillList);
  container.appendChild(sectionDiv);
}

export async function loadHabilidades(container) {
  const data = await fetchData('data/habilidades.json');
  const { programacao, ferramentas, idiomas } = data.habilidades;

  container.textContent = '';
  createSkillSection("Programacao", programacao, container);
  createSkillSection("Ferramentas", ferramentas, container);

  const idiomasDiv = createElement('div', { class: 'habilidades__idiomas' });
  const idiomasTitle = createElement('h3', { class: 'habilidades__subtitulo' }, 'Idiomas');
  idiomasDiv.appendChild(idiomasTitle);

  const idiomasList = createElement('div', { class: 'habilidades__lista--idiomas' });
  idiomas.forEach((idioma) => {
    const p = createElement('p', { class: 'habilidades__idioma' });
    const nomeSpan = createElement('span', { class: 'habilidades__nome' }, `${idioma.nome}:`);
    const nivelSpan = createElement('span', { class: 'habilidades__nivel' }, ` ${idioma.nivel}`);
    p.append(nomeSpan, nivelSpan);
    idiomasList.appendChild(p);
  });

  idiomasDiv.appendChild(idiomasList);
  container.appendChild(idiomasDiv);
}
