"use strict";
import { fetchData, createElement } from './utils.js';

function createCanvas() {
  return createElement('canvas', { id: 'meuCanvas', width: '474', height: '474' });
}

function createProfileImage() {
  return createElement('img', { class: 'apresentacao__imagem', alt: 'Minha Foto' });
}

function createImageContainer(canvas, profileImg) {
  const container = createElement('div', { class: 'apresentacao__imagem-container sobre-imagens' });
  container.append(profileImg, canvas);
  return container;
}

function createTextSection() {
  const h1 = createElement('h1', { class: 'apresentacao__conteudo__titulo' });
  h1.append('Olá, sou ', createElement('strong', { class: 'destaque' }, 'Rafael Perroni'));
  const p1 = createElement('p', { class: 'apresentacao__conteudo__texto' });
  p1.append('Um ', createElement('strong', { class: 'destaque' }, 'Desenvolvedor Front-End'), ' que une o rigor da lógica estruturada à criatividade das interfaces modernas.');
  const p2 = createElement('p', { class: 'apresentacao__conteudo__texto' });
  p2.append('Minha trajetória na tecnologia é marcada por uma base técnica profunda. Antes de me especializar em interfaces, dominei linguagens como ', createElement('strong', { class: 'destaque' }, 'C e C++'), ', o que consolidou um raciocínio lógico aguçado e a capacidade de resolver problemas complexos com eficiência. Essa bagagem me permite entender exatamente o que acontece \'debaixo do capô\' de qualquer aplicação, garantindo um código muito mais sólido e performático.');
  const p3 = createElement('p', { class: 'apresentacao__conteudo__texto' });
  p3.append('Com formação em ', createElement('strong', { class: 'destaque' }, 'Análise e Desenvolvimento de Sistemas (ADS)'), ' e experiência no ', createElement('strong', { class: 'destaque' }, 'Banco do Brasil'), ' lidando com bancos de dados e relatórios, desenvolvi uma visão estratégica sobre a organização de dados. Hoje, aplico essa disciplina no ecossistema ', createElement('strong', { class: 'destaque' }, 'React e Tailwind CSS'), ', criando interfaces elegantes, responsivas e rigorosamente pautadas em ', createElement('strong', { class: 'destaque' }, 'Acessibilidade Web (WCAG)'), '.');
  const p4 = createElement('p', { class: 'apresentacao__conteudo__texto' });
  p4.append('Além do desenvolvimento, sou um entusiasta de ', createElement('strong', { class: 'destaque' }, 'IA'), ', utilizando ferramentas inteligentes para otimizar meu fluxo de trabalho e entregar resultados com precisão e rapidez. Sou movido por desafios técnicos e pela vontade constante de evoluir. Vamos construir algo incrível juntos?');

  const section = createElement('section', { class: 'apresentacao__conteudo sobre-texto', id: 'sobre' });
  section.append(h1, p1, p2, p3, p4);
  return section;
}

function initCanvas(canvas, profileImg, data) {
  const ctx = canvas.getContext('2d');
  const canvasImg = new Image();
  canvasImg.src = data.sobre.foto;
  profileImg.src = data.sobre.foto2;

  // Estilo inicial do canvas
  canvas.style.opacity = '0';
  canvas.style.transition = 'opacity 0.3s ease-in-out';

  const drawImageCover = () => {
    if (canvasImg.naturalWidth === 0) return; 
    const imgWidth = canvasImg.naturalWidth;
    const imgHeight = canvasImg.naturalHeight;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let sx, sy, sWidth, sHeight;

    if (imgRatio > canvasRatio) {
      sHeight = imgHeight;
      sWidth = sHeight * canvasRatio;
      sx = (imgWidth - sWidth) / 2;
      sy = 0;
    } else {
      sWidth = imgWidth;
      sHeight = sWidth / canvasRatio;
      sx = 0;
      sy = (imgHeight - sHeight) / 2;
    }
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(canvasImg, sx, sy, sWidth, sHeight, 0, 0, canvasWidth, canvasHeight);
  };

  const resizeCanvas = () => {
    const container = canvas.parentElement;
    if (container) {
      if (canvas.width !== container.offsetWidth || canvas.height !== container.offsetHeight) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        // Redesenha a imagem se o canvas estiver visível durante o resize
        if (canvas.style.opacity === '1') {
          drawImageCover();
        }
      }
    }
  };

  canvasImg.onload = () => {
    const container = canvas.parentElement;
    if (container) {
      const showImage = (e) => {
        e.preventDefault();
        drawImageCover();
        canvas.style.opacity = '1';
      };

      const hideImage = (e) => {
        e.preventDefault();
        canvas.style.opacity = '0';
      };

      // Eventos de Mouse e Toque
      container.addEventListener('mouseenter', showImage);
      container.addEventListener('mouseleave', hideImage);
      container.addEventListener('touchstart', showImage);
      container.addEventListener('touchend', hideImage);
      
      const observer = new ResizeObserver(resizeCanvas);
      observer.observe(container);
    }
  };
}

export async function loadSobre(container) {
  const data = await fetchData('data/sobre.json');
  const canvas = createCanvas();
  const profileImg = createProfileImage();
  const imageContainer = createImageContainer(canvas, profileImg);
  const textSection = createTextSection();
  const sobreContainer = createElement('div', { class: 'apresentacao sobre-container' });

  sobreContainer.append(imageContainer, textSection);

  // Crie um contêiner de página para melhor controle de layout
  const sobrePageContainer = createElement('div', { class: 'sobre-page' });
  sobrePageContainer.appendChild(sobreContainer);

  container.textContent = '';
  container.appendChild(sobrePageContainer);

  initCanvas(canvas, profileImg, data);
}
