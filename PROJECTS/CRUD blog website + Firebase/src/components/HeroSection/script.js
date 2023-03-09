// const balls = document.querySelectorAll('.ball')
// function func(){
    
//     document.addEventListener('mousemove', (ev) => {
//         const mouseX = ev.clientX
//         const mouseY = ev.clientY
//         const anchor = document.getElementById('anchor')
//         const rect = anchor.getBoundingClientRect()
//         const w = window.innerWidth / 2;
//         const h = window.innerHeight / 2;
//         const anchorX = rect.left + w;
//         const anchorY = rect.top + h;
//         const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
//         balls.forEach(e => {
//             e.style.transform = `rotate(${90 + angleDeg}deg)`;
//         })
//     })
    
//     function angle(cx, cy, ex, ey) {
//         const dy = ey - cy;
//         const dx = ex - cx;
//         const red = Math.atan2(dy, dx)
//         const deg = red * 180 / Math.PI
//         return deg
//     }
// }
// setTimeout(func, 500)