const foto = document.getElementById('foto');


async function loadFoto() {
  const response = await fetch('https://617173acc20f3a001705fd0d.mockapi.io/content');
  const listData = await response.json();
  printKoleksiFoto(listData);
}

loadFoto();

function printKoleksiFoto(data) {
  var temp = "";
  // console.log(data.length)
  for (var i = 0; i < data.length; i++) {
    temp += `
  <div class="box">
    <img class="img-gal" src="${data[i].url_image}">
  </div>
  `
  }
  foto.innerHTML = temp;
}
