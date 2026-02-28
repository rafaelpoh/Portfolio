"use strict";
import { createElement } from './utils.js';

function createContactLink(href, text, iconClass) {
  const icon = createElement('i', { class: iconClass });
  const link = createElement('a', {
    href: href,
    target: '_blank',
    rel: 'noopener noreferrer',
    class: 'contato__link contato-destaque'
  }, text);
  link.appendChild(icon);
  const listItem = createElement('li');
  listItem.appendChild(link);
  return listItem;
}

export function loadContato(container) {
  const section = createElement('section', { class: 'contato', id: 'contato' });
  const title = createElement('h2', { class: 'contato__titulo' }, 'Contato');
  const text = createElement('p', { class: 'contato__texto' }, 'Gostou do que viu? Vamos conversar!');
  const list = createElement('ul', { class: 'contato__links' });

  list.appendChild(createContactLink('https://www.linkedin.com/in/rafaelperroni', 'LinkedIn', 'bi bi-linkedin'));
  list.appendChild(createContactLink('https://github.com/rafaelpoh', 'GitHub', 'bi bi-github'));
  list.appendChild(createContactLink('mailto:rafaelperroni89@gmail.com', 'Email', 'bi bi-envelope-at-fill'));
  list.appendChild(createContactLink('./assets/pdfs/Rafael_Perroni.pdf', 'Curriculo', 'bi bi-file-person-fill'));

  section.append(title, text, list);
  
  const contatoContainer = createElement('div', { class: 'contato-container' });
  contatoContainer.appendChild(section);

  container.textContent = '';
  container.appendChild(contatoContainer);
}
