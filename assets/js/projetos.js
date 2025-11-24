import { initCarousel } from './script.js';

export async function getProjects() {
    const response = await fetch('assets/data/projetos.json');
    const projects = await response.json();
    
    const carouselTrack = document.querySelector('.carousel__track');

    // Clear previous content to prevent duplication on re-load
    if (carouselTrack) {
        carouselTrack.innerHTML = '';
    }

    projects.projetos.forEach(project => {
        const projectCard = `
            <div class="projeto__card carousel__item">
              <img
                class="imagem-projeto"
                src="${project.imagem}"
                alt="${project.titulo}"
              />
              <h3><strong class="destaque">${project.titulo}</strong></h3>
              <p>
                ${project.descricao}
              </p>
              <div class="projeto__links">
                <a
                  href="${project.pagina}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="projeto__link"
                  >Ver Pagina <i class="bi bi-globe2"></i></a>
                <a
                  href="${project.github}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="projeto__link"
                  >Ver Projeto <i class="bi bi-github"></i>
                </a>
              </div>
            </div>
        `;
        if (carouselTrack) {
            carouselTrack.innerHTML += projectCard;
        }
    });

    initCarousel();
}

// initCarousel function should be defined globally or imported if needed
// For now, assuming it's defined elsewhere or will be handled by script.js

// Removed direct call to getProjects(); it will be called via script.js