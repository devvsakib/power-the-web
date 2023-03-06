const menu = document.querySelector('.menu');
const navItems = document.querySelectorAll('.nav-item');
const sim = document.querySelector('#sim');
const jin = document.querySelector('#jin');
const intro = document.querySelector('.intro');


navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item === navItems[0]) {
            intro.style.transform = 'translateX(-40000px)';
            sim.style.transform = 'translateX(0px)';
            // sim.style.transition = 'all 1s ease-in-out';
            intro.style.display = 'none';
            sim.style.display = 'block';
            jin.style.display = 'none';
        }
        else{
            intro.style.transform = 'translateX(-40000px)';
            jin.style.transform = 'translateX(0px)';
            jin.style.transition = 'all 1s ease-in-out';
            intro.style.display = 'none';
            jin.style.display = 'block';
            sim.style.display = 'none';
            jin.classList.add('relative');
        }
    })  
});

new RabbitLyrics({
    element: document.findElementById('lyrics-1'),
    mediaElement: document.findElementById('audio-1')
})