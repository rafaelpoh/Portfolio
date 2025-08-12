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
    img.src = './icones/fotoperfil2.jpeg';

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