const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const getDatum = async () => {
  try {
    const data = await fetch(
      `https://617173acc20f3a001705fd0d.mockapi.io/content/${params.bayar}`
    );
    const json = await data.json();
    const result = json;
    return result;
  } catch (error) {
    console.log("getData error", error);
    throw error;
  }
};

getDatum();

async function render() {
  let datum = await getDatum();

  var storedArray = JSON.parse(sessionStorage.getItem(datum.id));

  let paySection = document.getElementById("pembayaran");
  let reviewSection = document.getElementById("leftContent");
  let backElement = document.getElementById("kembali");

  let renderKembali = `
  <a class="back" href="/detail-wisata.html?bayar=${datum.id}"><i class="fa fa-caret-left" aria-hidden="true"></i>Kembali </a>`;

  let renderBayar = ` 
    
        <div class="row text-muted">
          <div class="col-8">
            Harga Tiket
          </div>
          <div class="col-4 text-end">
          Rp ${new Intl.NumberFormat("id-ID", { currency: "IDR" }).format(
            storedArray.total
          )}
          </div>
        </div>

        <div class="row text-muted">
          <div class="col-8">
            Biaya Layanan
          </div>
          <div class="col-4 text-end">
            Rp. 5.000
          </div>
        </div>

        <hr class="dropdown-divider">

        <div class="row fw-bolder">
          <div class="col-8">
            Total Pembayaran
          </div>
        <div class="col-4 text-end">
           Rp ${new Intl.NumberFormat("id-ID", { currency: "IDR" }).format(
             storedArray.total + 5000
           )}
        </div>
      </div>
    `;

  let renderTiket = `
    <div class="card-body">
      <div>
        <div class="">Tiket ID</div>
        <div class="fw-bolder">${Date.now()}</div>
      </div>
    <hr class="dropdown-divider">
      <div>
        <div class="pb-2">
            ${datum.location_tour}
        </div>
        <div class="img-rev pb-4">
            <img src="${datum.url_image}"
                alt="" class="rounded-1">
        </div>
        <div class="fw-bolder">
            Jumlah Tiket
        </div>
        <div class="pb-3">
            ${storedArray.tiket} Tiket
        </div>
      </div>
    <hr class="dropdown-divider">

    <div class="row fw-bolder py-3">
        <div class="col">
            Total Pembayaran
        </div>
        <div class="col text-xl-end mt-xl-4 mt-0">
        Rp ${new Intl.NumberFormat("id-ID", {
          currency: "IDR",
        }).format(storedArray.total + 5000)}
        </div>
    </div>
  </div>
    `;

  backElement.innerHTML = renderKembali;
  reviewSection.innerHTML = renderTiket;
  paySection.innerHTML = renderBayar;
}

render();

async function bayar() {
  let datum = await getDatum();
  console.log(datum);
  var storedArray = JSON.parse(sessionStorage.getItem(datum.id));
  console.log(storedArray.total);

  let objectHistory = {
    tiketId: Date.now(),
    location: datum.location_tour,
    image: datum.url_image,
    totalTiket: storedArray.tiket,
    totalBayar: storedArray.total + 5000,
  };

  SaveDataToLocalStorage(objectHistory);
}

function SaveDataToLocalStorage(data) {
  var a = [];
  a = JSON.parse(localStorage.getItem("history")) || [];
  a.push(data);
  localStorage.setItem("history", JSON.stringify(a));
}
