const fs = require('fs');
const path = require('path');

// Helper to render carousels
function renderCarousel(itemsHtml) {
  return `
      <div class="carousel">
        <div class="carousel__track-container">
          <div class="carousel__track">
            ${itemsHtml}
          </div>
        </div>
        <button class="carousel__button carousel__button--left" aria-label="Anterior">
          <i class="bi bi-chevron-left"></i>
        </button>
        <button class="carousel__button carousel__button--right" aria-label="Próximo">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>`;
}

// Section renders
function renderSobre(sobre) {
  const paragraphs = sobre.paragrafos.map(p => `
          <p class="apresentacao__conteudo__texto">${p}</p>`).join('');
  return `
    <div id="sobre-page" class="pagina-secao">
      <div class="sobre-page">
        <div class="sobre-container">
          <div class="apresentacao__imagem-container sobre-imagens">
            <img class="apresentacao__imagem" alt="Minha Foto" src="${sobre.foto2}" />
            <canvas id="meuCanvas" width="474" height="474"></canvas>
          </div>
          <section class="apresentacao__conteudo sobre-texto" id="sobre">
            <h1 class="apresentacao__conteudo__titulo">Olá, sou <strong class="destaque">${sobre.nome}</strong></h1>
            ${paragraphs}
          </section>
        </div>
      </div>
    </div>`;
}

function renderCursos(cursos) {
  const cards = cursos.map(curso => `
            <div class="projeto__card carousel__item">
              <img class="imagem-projeto" src="${curso.imagem}" alt="${curso.titulo}" />
              <h3><strong class="destaque">${curso.titulo}</strong></h3>
              <p>${curso.descricao}</p>
              <div class="projeto__links">
                <a href="${curso.certificado}" target="_blank" rel="noopener noreferrer" class="projeto__link">
                  Ver Certificado <i class="bi bi-patch-check-fill"></i>
                </a>
              </div>
            </div>`).join('');
  return `
    <div id="cursos-page" class="pagina-secao">
      <div class="cursos">
        <h2 class="cursos__titulo">Cursos/Bootcamps</h2>
        ${renderCarousel(cards)}
      </div>
    </div>`;
}

function renderHabilidades(habilidades) {
  const renderSection = (title, skills) => {
    const listItems = skills.map(skill => `
            <li class="habilidades__item">
              ${skill.imagem ? `<img src="${skill.imagem}" alt="${skill.nome}" class="habilidades__imagem" />` : ''}
              <span class="habilidades__nome">${skill.nome}</span>
            </li>`).join('');
    return `
          <div class="habilidades__${title.toLowerCase()}">
            <h3 class="habilidades__subtitulo">${title}</h3>
            <ul class="habilidades__lista">
              ${listItems}
            </ul>
          </div>`;
  };

  const idiomasItems = habilidades.idiomas.map(idioma => `
            <p class="habilidades__idioma">
              <span class="habilidades__nome">${idioma.nome}:</span>
              <span class="habilidades__nivel"> ${idioma.nivel}</span>
            </p>`).join('');

  return `
    <div id="habilidades-page" class="pagina-secao">
      <h2 class="habilidades__titulo">Habilidades</h2>
      <div class="habilidades__container">
        ${renderSection("Programacao", habilidades.programacao)}
        ${renderSection("Ferramentas", habilidades.ferramentas)}
        <div class="habilidades__idiomas">
          <h3 class="habilidades__subtitulo">Idiomas</h3>
          <div class="habilidades__lista--idiomas">
            ${idiomasItems}
          </div>
        </div>
      </div>
    </div>`;
}

function renderProjetos(projetos) {
  const cards = projetos.map(project => `
            <div class="projeto__card carousel__item">
              <img class="imagem-projeto" src="${project.imagem}" alt="${project.titulo}" />
              <h3><strong class="destaque">${project.titulo}</strong></h3>
              <p>${project.descricao}</p>
              <div class="projeto__links">
                <a href="${project.pagina}" target="_blank" rel="noopener noreferrer" class="projeto__link">
                  Ver Pagina <i class="bi bi-globe2"></i>
                </a>
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="projeto__link">
                  Ver Projeto <i class="bi bi-github"></i>
                </a>
              </div>
            </div>`).join('');
  return `
    <div id="projetos-page" class="pagina-secao">
      <h2 class="projetos__titulo">Projetos</h2>
      <p class="projetos__descricao">Aplicações desenvolvidas integralmente por mim, do planejamento à implementação do código, focando em soluções de problemas e lógica própria.</p>
      ${renderCarousel(cards)}
    </div>`;
}

function renderOutrosProjetos(contribuicoes) {
  const cards = contribuicoes.map(project => `
            <div class="projeto__card carousel__item">
              <img class="imagem-projeto" src="${project.imagem}" alt="${project.titulo}" />
              <h3><strong class="destaque">${project.titulo}</strong></h3>
              <p>${project.descricao}</p>
              <div class="projeto__links">
                <a href="${project.pagina}" target="_blank" rel="noopener noreferrer" class="projeto__link">
                  Ver Pagina <i class="bi bi-globe2"></i>
                </a>
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="projeto__link">
                  Ver Projeto <i class="bi bi-github"></i>
                </a>
              </div>
            </div>`).join('');
  return `
    <div id="outros-projetos-page" class="pagina-secao">
      <h2 class="projetos__titulo">Outros Projetos</h2>
      <p class="projetos__descricao">Implementações baseadas em orientações de mentores, onde foquei em refinar funcionalidades específicas e adaptar layouts sobre bases já existentes.</p>
      ${renderCarousel(cards)}
    </div>`;
}

function renderExtensoes(extensoes) {
  const cards = extensoes.map(extension => `
            <div class="projeto__card carousel__item">
              <img class="imagem-projeto" src="${extension.imagem}" alt="${extension.titulo}" />
              <h3><strong class="destaque">${extension.titulo}</strong></h3>
              <p>${extension.descricao}</p>
              <div class="projeto__links">
                <a href="${extension.link}" target="_blank" rel="noopener noreferrer" class="projeto__link">
                  Ver na Chrome Web Store <i class="bi bi-puzzle-fill"></i>
                </a>
              </div>
            </div>`).join('');
  return `
    <div id="extensoes-page" class="pagina-secao">
      <h2 class="projetos__titulo">Extensões</h2>
      <p class="projetos__descricao">Extensões desenvolvidas para navegadores, focando em produtividade e melhoria da experiência do usuário.</p>
      ${renderCarousel(cards)}
    </div>`;
}

function renderContato() {
  return `
    <div id="contato-page" class="pagina-secao">
      <div class="contato-container">
        <section class="contato" id="contato">
          <h2 class="contato__titulo">Contato</h2>
          <p class="contato__texto">Gostou do que viu? Vamos conversar!</p>
          <ul class="contato__links">
            <li>
              <a href="https://www.linkedin.com/in/rafaelperroni" target="_blank" rel="noopener noreferrer" class="contato__link contato-destaque">
                LinkedIn <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/rafaelpoh" target="_blank" rel="noopener noreferrer" class="contato__link contato-destaque">
                GitHub <i class="bi bi-github"></i>
              </a>
            </li>
            <li>
              <a href="mailto:rafaelperroni89@gmail.com" class="contato__link contato-destaque">
                Email <i class="bi bi-envelope-at-fill"></i>
              </a>
            </li>
            <li>
              <a href="./assets/pdfs/Rafael_Perroni.pdf" target="_blank" rel="noopener noreferrer" class="contato__link contato-destaque">
                Curriculo <i class="bi bi-file-person-fill"></i>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>`;
}

function main() {
  console.log("Iniciando compilação do portfólio...");

  const dataDir = path.join(__dirname, 'data');
  
  // Read JSON files
  const sobre = JSON.parse(fs.readFileSync(path.join(dataDir, 'sobre.json'), 'utf8')).sobre;
  const cursos = JSON.parse(fs.readFileSync(path.join(dataDir, 'cursos.json'), 'utf8')).cursos;
  const habilidades = JSON.parse(fs.readFileSync(path.join(dataDir, 'habilidades.json'), 'utf8')).habilidades;
  const projetos = JSON.parse(fs.readFileSync(path.join(dataDir, 'projetos.json'), 'utf8')).projetos;
  const outrosProjetos = JSON.parse(fs.readFileSync(path.join(dataDir, 'outros-projetos.json'), 'utf8')).contribuicoes_e_estudos;
  const extensoes = JSON.parse(fs.readFileSync(path.join(dataDir, 'extensoes.json'), 'utf8')).extensoes;

  // Generate HTML
  const contentHtml = [
    renderSobre(sobre),
    renderCursos(cursos),
    renderHabilidades(habilidades),
    renderProjetos(projetos),
    renderOutrosProjetos(outrosProjetos),
    renderExtensoes(extensoes),
    renderContato()
  ].join('\n\n');

  // Read index.html
  const indexPath = path.join(__dirname, 'index.html');
  let indexHtml = fs.readFileSync(indexPath, 'utf8');

  // Define markers
  const startMarker = '<!-- START_PRE_RENDERED_CONTENT -->';
  const endMarker = '<!-- END_PRE_RENDERED_CONTENT -->';

  const startIndex = indexHtml.indexOf(startMarker);
  const endIndex = indexHtml.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    console.error("Erro: Marcadores de conteúdo pré-renderizado não encontrados no index.html.");
    console.error("Certifique-se de que os comentários <!-- START_PRE_RENDERED_CONTENT --> e <!-- END_PRE_RENDERED_CONTENT --> estão presentes.");
    process.exit(1);
  }

  // Replace content
  const newIndexHtml = 
    indexHtml.substring(0, startIndex + startMarker.length) +
    '\n' + contentHtml + '\n  ' +
    indexHtml.substring(endIndex);

  // Write index.html
  fs.writeFileSync(indexPath, newIndexHtml, 'utf8');
  console.log("Compilação concluída com sucesso! index.html atualizado.");
}

main();
