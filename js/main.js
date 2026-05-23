"use strict";
import { handleLocation, onNavigate } from './router.js';

function setupMenu() {
    const menu = document.getElementById('menu-lateral');
    const abrirMenuBtn = document.querySelector('button[aria-label="Abrir menu"]');
    const menuLinks = menu.querySelectorAll('a');

    function toggleMenu() {
        menu.classList.toggle('menu-aberto');
        document.body.classList.toggle('menu-aberto-pagina');
        const abrirMenuIcon = abrirMenuBtn.querySelector('i');
        abrirMenuIcon.classList.toggle('bi-list');
        abrirMenuIcon.classList.toggle('bi-x');
    }

    abrirMenuBtn.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = link.getAttribute('href');
            onNavigate(path);
            if (menu.classList.contains('menu-aberto')) {
                toggleMenu();
            }
        });
    });
}

function setupThemeSwitcher() {
    const toggleTheme = document.getElementById("switch");
    const themeIcon = toggleTheme.querySelector("i");
    const rootHtml = document.documentElement;

    function trocaTema() {
        const currentTheme = rootHtml.getAttribute("data-theme");
        const newTheme = currentTheme === "Escuro" ? "Claro" : "Escuro";
        rootHtml.setAttribute("data-theme", newTheme);

        themeIcon.classList.toggle("bi-lightbulb-fill", newTheme === "Claro");
        themeIcon.classList.toggle("bi-lightbulb-off-fill", newTheme === "Escuro");
    }

    toggleTheme.addEventListener("click", trocaTema);
}

export function initCarousel(carouselSelector) {
    const carousel = document.querySelector(carouselSelector);
    if (!carousel) return;

    const track = carousel.querySelector('.carousel__track');
    if (!track) return;

    const items = Array.from(track.children);
    if (items.length === 0) return;

    const nextButton = carousel.querySelector('.carousel__button--right');
    const prevButton = carousel.querySelector('.carousel__button--left');
    let currentIndex = 0;

    function moveToSlide(index) {
        const itemWidth = items[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${itemWidth * index}px)`;
    }

    function handleNext() {
        currentIndex = (currentIndex + 1) % items.length;
        moveToSlide(currentIndex);
    }

    function handlePrev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        moveToSlide(currentIndex);
    }

    nextButton.addEventListener('click', handleNext);
    prevButton.addEventListener('click', handlePrev);

    moveToSlide(currentIndex);

    window.addEventListener('resize', () => moveToSlide(currentIndex));
}

document.addEventListener('DOMContentLoaded', () => {
    setupMenu();
    setupThemeSwitcher();
    window.addEventListener('popstate', handleLocation);
    handleLocation();
});