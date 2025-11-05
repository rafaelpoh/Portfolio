document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const container = document.querySelector('.apresentacao__imagem-container');
const canvas = document.getElementById('meuCanvas');
if (canvas && container) {
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = './icones/fotoperfil.WebP';

    img.onload = () => {
    container.addEventListener('mouseenter', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    });
};

    container.addEventListener('mouseleave', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
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

const track = document.querySelector('.carousel__track');
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

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu-lateral');
    const abrirMenuBtn = document.querySelector('button[aria-label="Abrir menu"]');
    const fecharMenuBtn = menu.querySelector('button[aria-label="Fechar menu"]');
    const menuLinks = menu.querySelectorAll('a');

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

    abrirMenuBtn.addEventListener('click', toggleMenu);
    fecharMenuBtn.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('menu-aberto')) {
                toggleMenu();
            }
        });
    });
});
