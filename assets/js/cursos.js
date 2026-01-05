import { initCarousel } from './script.js';

export async function getCursos() {
    const response = await fetch('assets/data/cursos.json');
    const data = await response.json();
    const cursos = data.cursos;
    
    const carouselTrack = document.querySelector('.cursos .carousel__track');

    if (carouselTrack) {
        carouselTrack.innerHTML = '';
    }

    cursos.forEach(curso => {
        const cursoCard = `
            <div class="curso__card carousel__item">
              <img
                class="imagem-curso"
                src="${curso.imagem}"
                alt="${curso.titulo}"
              />
              <h3><strong class="destaque">${curso.titulo}</strong></h3>
              <p>
                ${curso.descricao}
              </p>
              <div class="curso__links">
                <a
                  href="${curso.certificado}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="curso__link"
                  >Ver Certificado <i class="bi bi-patch-check-fill"></i></a>
              </div>
            </div>
        `;
        if (carouselTrack) {
            carouselTrack.innerHTML += cursoCard;
        }
    });

    initCarousel('.cursos .carousel');
}
