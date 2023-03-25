const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');

const hamMenu = document.querySelector('.ham-menu');

openBtn.addEventListener('click', () => {
    hamMenu.style.visibility = "visible";
})

closeBtn.addEventListener('click', () => {
    hamMenu.style.visibility = "hidden";
})