let cr = document.querySelector(".circle");
let sptar = document.querySelector("#spotlight-area");
sptar.addEventListener("mousemove", function (event) {
    let x = event.clientX - cr.offsetWidth / 2;
    let y = event.clientY - cr.offsetHeight / 2;
    cr.style.top = (y + 90) + "px";
    cr.style.left = (x + 120) + "px";
    cr.style.cursor = "pointer";
});