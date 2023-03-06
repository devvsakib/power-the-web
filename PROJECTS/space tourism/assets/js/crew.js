const dot = document.querySelectorAll('.dots'),
    tabImg = document.getElementById('crewImg'),
    subHeading = document.querySelector('.subHeading'),
    mainHeading = document.querySelector('.mainHeading'),
    paraDes = document.querySelector('.paraDes');

    

// Fetch data from JSON
url = "./data.json"
fetch(url)
    .then(res => res.json())
    .then(
        data => {
            subHeading.innerText = data.crew[0].role
            mainHeading.innerText = data.crew[0].name
            paraDes.innerText = data.crew[0].bio
            tabImg.src = `${data.crew[0].images.png}`;
            dot.forEach(el => {
                el.addEventListener('click', () => {
                    el.classList.toggle("mkWhite")
                    const tabVal = el.value
                    tabImg.src = `${data.crew[tabVal].images.png}`;
                    subHeading.innerText = data.crew[tabVal].role
                    mainHeading.innerText = data.crew[tabVal].name
                    paraDes.innerText = data.crew[tabVal].bio
                })
            })
        }
    )
    .catch(function (err) {
        console.log(err);
    });
// Get all tab acccess

// fetch("./data.json").then(res => res.json())
//     .then(data => {
//         data = data.crew[0].name
//         dot.forEach(el => {
//             el.addEventListener('click', () => {
//                 const tabVal = el.value
                
//                 console.log(tabVal);
//             })
//         })
//     })








// tab_nav.forEach(el => {
//     el.addEventListener('click', () => {
//         val = el.value;
//         if (val == 1) {
//             desHead.innerHTML = '1'
//         }
//         else if (val == 2) {
//             desHead.innerHTML = '2'
//         }
//         else if (val == 3) {
//             desHead.innerHTML = '3'
//         }
//         else {
//             desHead.innerHTML = '4'

//         }

//     })

// })
