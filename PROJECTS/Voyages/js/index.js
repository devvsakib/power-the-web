const url = window.location.pathname;
 
var haslogin = localStorage.getItem("isLogin");
const logout = () => {
  localStorage.setItem("isLogin", false);
  window.location.replace('../login.html');
}
 
const cekLogin = () => {
  if (haslogin == "true") {
 
    return (document.getElementById("container").innerHTML += ` <header
            class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src="/assets/logo.png" width="40" height="32" alt="">
                <div class="fw-bolder ps-2">Voyagers</div>
            </a>
 
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li class="m-2"><a href="./daftar_wisata.html"
                        class="nav-link px-2 link-dark navhover ${url === "/daftar_wisata.html" && "border-dark border-2 border-bottom"}">Daftar
                        wisata</a>
                </li>
                <li class="m-2"><a href="./koleksi-foto.html" class="nav-link px-2 link-dark navhover ${url === "/koleksi-foto.html" && "border-dark border-2 border-bottom"}">Koleksi foto</a></li>
            </ul>
 
            <div class="col-md-3 text-end">
            <div class="d-grid gap-3 d-md-flex justify-content-md-end">
            <div class="dropdown">
              <a href="#" class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-user"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton1">
                <li class="mb-3"><a href="./history.html" class="text-decoration-none"><span class="dropdown-item">Riwayat</span></a></li>
                <li class="m-1"><button type="button" onclick="logout()" class="w-100 btn btn-primary">Keluar</button></li>
              </ul>
 
 
            </div>
        </header>
          `);
  } else {
 
    return (document.getElementById(
      "container"
    ).innerHTML += `<header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="/assets/logo.png" width="40" height="32" alt="">
        <div class="fw-bolder ps-2">Voyagers</div>
    </a>
 
    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li class="m-2"><a href="./daftar_wisata.html"
                class="nav-link px-2 link-dark navhover ${url === "/daftar_wisata.html" && "border-dark border-2 border-bottom"}">Daftar
                wisata</a>
        </li>
        <li class="m-2"><a href="./koleksi-foto.html" class="nav-link px-2 link-dark navhover ${url === "/koleksi-foto.html" && "border-dark border-2 border-bottom"}">Koleksi foto</a></li>
    </ul>
 
    <div class="col-md-3 text-end">
    <a href="./daftar.html">
        <button type="button" class="btn btn-outline-dark me-2">Sign Up</button>
    </a>
    <a href="./login.html">
        <button type="button" class="btn btn-dark">Login</button>
    </a>
    </div>
</header>`);
  }
};
cekLogin();