function renderHistory() {
  let root = document.getElementById("history");
  let historyData = JSON.parse(localStorage.getItem("history"));
  console.log(historyData);

  let kosong = "";


  if (historyData) {
    console.log("isi");
    historyData.map((x) => {
      let data = `<div class="col-lg-4 col-md-6 shrink-none">
        <div class="shadow-none p-3 bg-light rounded">
            <div class="card-body p-1">
                <div class="card-body">
                    <div>
                        <div class="">Tiket ID</div>
                        <div class="fw-bolder">${x.tiketId}</div>
                    </div>
                    <hr class="dropdown-divider">
                    <div>
                        <div class="pb-2">
                            ${x.location}
                        </div>
                        <div class="img-rev pb-4">
                            <img src="${x.image}"
                                alt="" class="rounded-1">
                        </div>
                        <div class="fw-bolder">
                            Jumlah Tiket
                        </div>
                        <div class="pb-3">
                            ${x.totalTiket} Tiket
                        </div>
                    </div>
                    <hr class="dropdown-divider">
                    <div class="row py-3">
                        <div class="col-12 fw-bolder">
                            Total Pembayaran
                        </div>
                        <div class="col">
                            Rp ${new Intl.NumberFormat("id-ID", {
                                currency: "IDR",
                              }).format(x.totalBayar)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
      kosong += data;
    });

    // console.log(yaya);
    return (root.innerHTML = kosong);
  } else {
    return root.innerHTML = `<div class="fw-bolder">Kamu belum pernah melakukan pembelian :)</div>`
  }
}
renderHistory();
