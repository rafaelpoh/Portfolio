"use strict";
import { initCarousel } from './main.js';

export async function getProjects() {
    try {
        const response = await fetch('data/projetos.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();
        
        const carouselTrack = document.querySelector('.projetos .carousel__track');
        if (!carouselTrack) {
            return;
        }

        carouselTrack.innerHTML = '';

        let projectsHTML = '';
        projects.projetos.forEach(project => {
            projectsHTML += `
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
        });

        carouselTrack.innerHTML = projectsHTML;

        initCarousel('.projetos .carousel');
    } catch (error) {
        console.error('Error fetching or processing projects:', error);
    }
}