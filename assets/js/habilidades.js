"use strict";

function createSkillSection(title, skills, container) {
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add(`habilidades__${title.toLowerCase().replace(/ /g, '-')}`);

    const sectionTitle = document.createElement('h3');
    sectionTitle.classList.add('habilidades__subtitulo');
    sectionTitle.textContent = title;
    sectionDiv.appendChild(sectionTitle);

    const skillList = document.createElement('ul');
    skillList.classList.add('habilidades__lista');

    skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.classList.add('habilidades__item');

        const image = document.createElement('img');
        image.src = skill.imagem;
        image.alt = skill.nome;
        image.classList.add('habilidades__imagem');
        listItem.appendChild(image);

        const name = document.createElement('span');
        name.classList.add('habilidades__nome');
        name.textContent = skill.nome;
        listItem.appendChild(name);

        skillList.appendChild(listItem);
    });

    sectionDiv.appendChild(skillList);
    container.appendChild(sectionDiv);
}

export function carregarHabilidades() {
    const habilidadesContainer = document.getElementById('habilidades-container');
    if (!habilidadesContainer) {
        console.error('habilidades-container not found');
        return;
    }

    habilidadesContainer.innerHTML = ''; // Limpa o conteúdo anterior para garantir que não haja duplicatas
    fetch('assets/data/habilidades.json')
        .then(response => response.json())
        .then(data => {
            const { programacao, ferramentas, idiomas } = data.habilidades;

            createSkillSection('Linguagens de Programação', programacao, habilidadesContainer);
            createSkillSection('Ferramentas', ferramentas, habilidadesContainer);

            // Create languages section (remains specific)
            const idiomasDiv = document.createElement('div');
            idiomasDiv.classList.add('habilidades__idiomas');

            const idiomasTitle = document.createElement('h3');
            idiomasTitle.classList.add('habilidades__subtitulo');
            idiomasTitle.textContent = 'Idiomas';
            idiomasDiv.appendChild(idiomasTitle);

            const idiomasBox = document.createElement('div');
            idiomasBox.classList.add('habilidades__idiomas-box');

            idiomas.forEach(idioma => {
                const p = document.createElement('p');
                p.classList.add('habilidades__idioma');

                const nome = document.createElement('span');
                nome.classList.add('habilidades__nome');
                nome.textContent = `${idioma.nome}: `;
                p.appendChild(nome);

                const nivel = document.createElement('span');
                nivel.classList.add('habilidades__nivel');
                nivel.textContent = idioma.nivel;
                p.appendChild(nivel);

                idiomasBox.appendChild(p);
            });

            idiomasDiv.appendChild(idiomasBox);
            habilidadesContainer.appendChild(idiomasDiv);
        });
}