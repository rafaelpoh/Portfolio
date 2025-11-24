export function carregarHabilidades() {
    const habilidadesContainer = document.getElementById('habilidades-container');
    if (!habilidadesContainer) {
        console.error('habilidades-container not found');
        return;
    }

    habilidadesContainer.innerHTML = ''; // Limpa o conteúdo anterior para garantir que não haja duplicatas
    fetch('assets/data/projetos.json')
        .then(response => response.json())
        .then(data => {
            const { programacao, ferramentas, idiomas } = data.habilidades;

            // Create programming languages section
            const programacaoDiv = document.createElement('div');
            programacaoDiv.classList.add('habilidades__programacao');

            const programacaoTitle = document.createElement('h3');
            programacaoTitle.classList.add('habilidades__subtitulo');
            programacaoTitle.textContent = 'Linguagens de Programação';
            programacaoDiv.appendChild(programacaoTitle);

            const programacaoList = document.createElement('ul');
            programacaoList.classList.add('habilidades__lista');

            programacao.forEach(habilidade => {
                const listItem = document.createElement('li');
                listItem.classList.add('habilidades__item');

                const imagem = document.createElement('img');
                imagem.src = habilidade.imagem;
                imagem.alt = habilidade.nome;
                imagem.classList.add('habilidades__imagem');
                listItem.appendChild(imagem);

                const nome = document.createElement('span');
                nome.classList.add('habilidades__nome');
                nome.textContent = habilidade.nome;
                listItem.appendChild(nome);

                programacaoList.appendChild(listItem);
            });

            programacaoDiv.appendChild(programacaoList);
            habilidadesContainer.appendChild(programacaoDiv);

            // Create tools section
            const ferramentasDiv = document.createElement('div');
            ferramentasDiv.classList.add('habilidades__ferramentas');

            const ferramentasTitle = document.createElement('h3');
            ferramentasTitle.classList.add('habilidades__subtitulo');
            ferramentasTitle.textContent = 'Ferramentas';
            ferramentasDiv.appendChild(ferramentasTitle);

            const ferramentasList = document.createElement('ul');
            ferramentasList.classList.add('habilidades__lista');

            ferramentas.forEach(ferramenta => {
                const listItem = document.createElement('li');
                listItem.classList.add('habilidades__item');

                const imagem = document.createElement('img');
                imagem.src = ferramenta.imagem;
                imagem.alt = ferramenta.nome;
                imagem.classList.add('habilidades__imagem');
                listItem.appendChild(imagem);

                const nome = document.createElement('span');
                nome.classList.add('habilidades__nome');
                nome.textContent = ferramenta.nome;
                listItem.appendChild(nome);

                ferramentasList.appendChild(listItem);
            });

            ferramentasDiv.appendChild(ferramentasList);
            habilidadesContainer.appendChild(ferramentasDiv);

            // Create languages section
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