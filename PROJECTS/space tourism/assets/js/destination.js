const tabs = document.querySelectorAll('.tab'),
    tabImg = document.getElementById('tabImg'),
    desHeader = document.querySelector('.des-head'),
    desPara = document.querySelector('.des-para'),
    desDis = document.querySelector('.des-dis'),
    desTime = document.querySelector('.des-time')
// Fetch data from JSON
url = "./data.json"
fetch(url)
    .then(res => res.json())
    .then(
        data => {
            tabs.forEach(el => {
                el.addEventListener('click', () => {
                    const tabVal = el.value
                    tabImg.src = `${data.destinations[tabVal].images.png}`;
                    desHeader.innerText = data.destinations[tabVal].name
                    desPara.innerText = data.destinations[tabVal].description
                    desDis.innerText = data.destinations[tabVal].distance
                    desTime.innerText = data.destinations[tabVal].travel
                })
            })
        }
    )
    .catch(function (err) {
        console.log(err);
    });
// Get all tab acccess










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
