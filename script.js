import { carregarHabilidades } from './habilidades.js';
import { getProjects } from './projetos.js';

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu-lateral');
    const abrirMenuBtn = document.querySelector('button[aria-label="Abrir menu"]');
    const menuLinks = menu.querySelectorAll('a');
    const contentContainer = document.getElementById('conteudo-dinamico_container');

    function toggleMenu() {
        menu.classList.toggle('menu-aberto');
        document.body.classList.toggle('menu-aberto-pagina');
        const abrirMenuIcon = abrirMenuBtn.querySelector('i');
        if (menu.classList.contains('menu-aberto')) {
            abrirMenuIcon.classList.remove('bi-list');
            abrirMenuIcon.classList.add('bi-x');
        } else {
            abrirMenuIcon.classList.remove('bi-x');
            abrirMenuIcon.classList.add('bi-list');
        }
    }

    function initCanvas() {
        const container = document.querySelector('.apresentacao__imagem-container');
        const canvas = document.getElementById('meuCanvas');
        if (canvas && container) {
            const ctx = canvas.getContext('2d');
            const canvasImg = new Image();
            const profileImg = document.querySelector('.apresentacao__imagem');

            fetch('projetos.json')
                .then(response => response.json())
                .then(data => {
                    canvasImg.src = data.sobre.foto; // Use foto from projetos.json for canvas
                    if (profileImg) {
                        profileImg.src = data.sobre.foto2; // Use foto2 from projetos.json for the <img> tag
                    }

                    canvasImg.onload = () => {
                        container.addEventListener('mouseenter', () => {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.drawImage(canvasImg, 0, 0, canvas.width, canvas.height);
                        });
                    };
                })
                .catch(error => console.error('Error loading projetos.json:', error));

            container.addEventListener('mouseleave', () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            });
        }
    }

    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                contentContainer.innerHTML = html;

                // Explicitly call functions based on the loaded URL
                if (url === 'sobre.html') {
                    initCanvas();
                } else if (url === 'habilidades.html') {
                    // Ensure the habilidadesContainer exists before calling carregarHabilidades
                    if (document.getElementById('habilidades-container')) {
                        carregarHabilidades();
                    }
                } else if (url === 'projetos.html') {
                    // Ensure the carouselTrack exists before calling getProjects
                    if (document.querySelector('.carousel__track')) {
                        getProjects();
                    }
                }
            });
    }

    abrirMenuBtn.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.getAttribute('href');
            loadContent(url);
            if (menu.classList.contains('menu-aberto')) {
                toggleMenu();
            }
        });
    });

    // Load initial content
    loadContent('sobre.html');
});

export function initCarousel() {
    const track = document.querySelector('.carousel__track');
    if (track) {
        const items = Array.from(track.children);
        const nextButton = document.querySelector('.carousel__button--right');
        const prevButton = document.querySelector('.carousel__button--left');

        let currentIndex = 0;

        const updateCarousel = () => {
            items.forEach((item, index) => {
                if (index === currentIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                } 
            });

        };

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        });

        updateCarousel();
    }
}

const toggleTheme = document.getElementById("switch");
const themeIcon = toggleTheme.querySelector("i"); // Seleciona o elemento <i> dentro do botão
const rootHtml = document.documentElement;

function trocaTema() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  const newTheme = currentTheme === "Escuro" ? "Claro" : "Escuro";
  rootHtml.setAttribute("data-theme", newTheme);

  // Remove as classes de ícone conflitantes para garantir uma troca limpa
  themeIcon.classList.remove("bi-toggle2-off", "bi-lightbulb-fill", "bi-lightbulb-off-fill");

  // Adiciona a classe de ícone correta com base no novo tema
  if (newTheme === "Escuro") {
    themeIcon.classList.add("bi-lightbulb-off-fill");
  } else {
    themeIcon.classList.add("bi-lightbulb-fill");
  }
}

toggleTheme.addEventListener("click", trocaTema);