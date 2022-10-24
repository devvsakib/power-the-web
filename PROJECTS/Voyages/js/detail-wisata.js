const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

var haslogin = localStorage.getItem("isLogin");
console.log(haslogin);

const getData = async () => {
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

async function render() {

  let data = await getData();

  let contentSection = document.getElementsByClassName("container")[1];
  let reviewSection = document.getElementsByClassName("container")[2];

  let renderContent = `
  <div class="row">
  <!-- main image -->
       <div class="col-lg-9 col-md-12">
           <div class="container-img">
               <img class="rounded img-fluid"
                   src="${data.url_image}"
                   alt="Wisata">
           </div>
       </div>

       <div
           class="col-lg-3 col-md-12 d-flex flex-lg-column justify-content-lg-around flex-md-row justify-content-md-start">
           <!-- helpers image -->
           ${data.url_image_helper
             .slice(0, 2)
             .map(
               (x) =>
                 `<div class="container-img-rev col-3 col-sm-3 col-md-3 col-lg-12 me-2 mt-2 me-sm-2 mt-sm-2 me-md-2 mt-md-2 m-lg-0">
                <img src="${x}"
                class="img-fluid v-none rounded" alt="Gambar Wisata">
            </div>`
             )
             .join("")}

       </div>
    
    </div>

    <!-- Contents Section -->
        <div class="row py-4">
            <!-- Detail Section -->
            <div class="col-xxl-9 col-xl-9 col-md-9 col-sm-12">
                <div class="row">
                    <div class="col-xl-8 col-lg-12 col-md-12">
                        <div>
                            ${data.type_tour}
                        </div>
                        <div class="fs-4 fw-bolder text-capitalize">
                            ${data.title}
                        </div>
                    </div>

                    <!-- Address and Reviews Rate -->
                    <div class="col-xl-4 col-lg-12 col-md-12">
                        <div class="text-xl-end text-lg-start text-md-start pt-lg-2 pt-md-2">
                            <div>${
                              data.location_tour
                            }<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                                </svg> </div>
                            <div class="ratings pt-2 text-muted">(${
                              data.reviews.jumlah_reviewer
                            } Reviews) <span class="badge black">${
    data.reviews.jumlah_review
  }/5<i class="fa fa-star rating-color"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Jam Operasional -->
                <div class="py-3">
                    <div class="bg-light p-3">
                        <div class="fw-bolder">
                            Jam Operasional
                        </div>
                        <div class="d-flex py-2">
                            <div>
                                Buka: ${data.hour_operation.buka}
                            </div>
                            <div class="ps-2">
                                Tutup: ${data.hour_operation.tutup}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Detail -->
                <div class="fw-bolder">
                    Detail
                </div>
                <div>
                    ${data.detail_tour}
                </div>
            </div>

            <!-- Buy -->
            <div class="col-xxl-3 col-xl-3 col-md-3 col-sm-12 mt-xxl-0 mt-xl-0 mt-md-0 mt-sm-3 mt-3">

                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div>
                                    <div class="fw-bolder py-2">
                                        Fasilitas
                                    </div>
                                    <div class="row gy-2">
                                    ${data.facility
                                      .map((x) =>
                                        x.parkir
                                          ? `<div class="col-lg-12 col-xl-6 col-md-12 pe-0">
                                          <span>
                                            <i class="fas fa-parking"></i> Free
                                            Parking
                                          </span>
                                        </div>`
                                          : null
                                      )
                                      .join(" ")}

                                    ${data.facility
                                      .map((x) =>
                                        x.free_wifi
                                          ? `<div class="col-lg-12 col-xl-6 col-md-12 pe-0">
                                            <span>
                                              <i class="fas fa-wifi"></i> Free
                                              Wifi
                                            </span>
                                          </div>`
                                          : null
                                      )
                                      .join(" ")}

                                      ${data.facility
                                        .map((x) =>
                                          x.pray_room
                                            ? `<div class="col-lg-12 col-xl-6 col-md-12 pe-0">
                                            <span>
                                              <i class="fas fa-mosque"></i> Room
                                              Pray
                                            </span>
                                          </div>`
                                            : null
                                        )
                                        .join(" ")}

                                      ${data.facility
                                        .map((x) =>
                                          x.toilet
                                            ? `<div class="col-lg-12 col-xl-6 col-md-12 pe-0">
                                            <span>
                                              <i class="fas fa-toilet"></i> Toilet
                                              
                                            </span>
                                          </div>`
                                            : null
                                        )
                                        .join(" ")}

                                      ${data.facility
                                        .map((x) =>
                                          x.atm
                                            ? `<div class="col-lg-12 col-xl-6 col-md-12 pe-0">
                                            <span>
                                              <i class="fas fa-credit-card"></i> atm
                                              
                                            </span>
                                          </div>`
                                            : null
                                        )
                                        .join(" ")}
                                       
                                    </div>
                                    <hr class="dropdown-divider">
                                </div>

                                <div class="pt-2">
                                    <div class="d-flex justify-content-between flex-md-wrap">
                                        <span class="fw-bolder"> Pesan Tiket </span><span
                                            class="text-end text-danger">Tersisa
                                            ${data.ticket_remaining}</span>
                                    </div>
                                    <div class="input-group flex-nowrap py-2">
                                        <span class="input-group-text bg-light" id="addon-wrapping"><i
                                                class="fas fa-ticket-alt"></i></span>
                                        <input type="number" 
                                       onchange="calculate()" id="hitung" class="form-control" value=1 placeholder="Jumlah Tiket"
                                            aria-label="Username" aria-describedby="addon-wrapping">
                                    </div>
                                    <div class="row py-3 align-items-end">
                                        <div class="col-xl-12 col-lg-12">
                                            <div>Harga</div>
                                            <div class="fw-bolder fs-5">Rp <span id="calculate">${new Intl.NumberFormat(
                                              "id-ID",
                                              {
                                                currency: "IDR",
                                              }
                                            ).format(data.price)}</span></div>
                                        </div>
                                        <div class="col-xl-6 col-lg-12 pt-lg-2 pt-md-2">
                                            <div class="float-xl-start float-lg-start">
                                            <a href="${CekPembayaran(
                                              data.id
                                            )}" class="btn fs-6 fw-bolder btn-cs">Beli Tiket</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `;

  let renderReview = `
  <div class="fw-bolder pb-2">Apa kata mereka?</div>
        <div class="row row-cols-1 row-cols-md-3 g-4 pb-5">
            ${data.reviews.reviewer
              .map(
                (x) =>
                  `<div class="col-lg-4 col-md-6">
                <div class="card">
                    <div class="w-100">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <div class="fw-bolder">
                                        ${x.nama}
                                    </div>
                                    <div>
                                        ${x.date}
                                    </div>
                                </div>
                                <div class="col d-flex justify-content-end align-items-center">
                                    <span class="badge bg-secondary">${
                                      x.rating
                                    }</span>
                                </div>
                                <hr class="dropdown-divider">
                            </div>
                            <p class="card-text pt-2">${x.detail}</p>
                            <div class="row">
                                ${x.images
                                  .map(
                                    (x) =>
                                      `<div class="col-4">
                                    <div class="container-img-rev">
                                        <img src="${x}"
                                            alt="...">
                                    </div>
                                </div>`
                                  )
                                  .join(" ")}
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>`
              )
              .join(" ")}
            
        </div>

  `;


  contentSection.innerHTML = renderContent;
  reviewSection.innerHTML = renderReview;

}

render();

async function calculate() {
  let num = await getData();
  let data = num.price;
  console.log(num.id);
  console.log(data);
  let total = document.getElementById("calculate");
  console.log(total);
  let cal = document.getElementById("hitung").value;
  console.log(cal);
  let totalPem = cal * data;
  let currency = new Intl.NumberFormat("id-ID", { currency: "IDR" }).format(
    totalPem
  );
  console.log(data * cal);

  total.innerHTML = currency;

  var testArray = {
    total: totalPem,
    tiket: cal,
  };
  window.sessionStorage.setItem(num.id, JSON.stringify(testArray));
}

const CekPembayaran = (id) => {
  if (haslogin === "true") {
    calculate();
    console.log("berhasil");
    return `./pembayaran.html?bayar=${id}`;
  }

  return `./login.html`;
};