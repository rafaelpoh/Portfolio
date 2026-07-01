"use strict";

let sobreInitialized = false;

export function initSobre() {
  if (sobreInitialized) return;

  const canvas = document.getElementById('meuCanvas');
  const profileImg = document.querySelector('.apresentacao__imagem');
  if (!canvas || !profileImg) return;

  const container = canvas.parentElement;
  if (!container) return;

  const ctx = canvas.getContext('2d');
  const canvasImg = new Image();
  canvasImg.src = 'assets/icons/fotoperfil.WebP';

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
    if (canvas.width !== container.offsetWidth || canvas.height !== container.offsetHeight) {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      if (canvas.style.opacity === '1') {
        drawImageCover();
      }
    }
  };

  canvasImg.onload = () => {
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
  };
  sobreInitialized = true;
}
