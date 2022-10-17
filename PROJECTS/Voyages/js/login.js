const getData = JSON.parse(localStorage.getItem('data'));
 
function showPassword() {
 
    var key_attr = $('#key').attr('type');
 
    if(key_attr != 'text') {
 
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
 
    } else {
 
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
 
    }
 
}
 
const password = document.getElementById("key")
const email = document.getElementById("email")
const button = document.querySelector('.btn');
 
function validate(e){
    e.preventDefault();
 
    if(getData!==null && password.value === getData.password && email.value===getData.email){
        document.getElementById("alert").innerHTML += `
            <div class="alert alert-success" role="alert">
                Berhasil Anda akan dialihkan ke halaman utama
            </div>
        `
        localStorage.setItem("isLogin",true)
        setTimeout(() => {
            window.location = "/"
        }, 2000)
    }
    else {
        document.getElementById("alert").innerHTML += `
        <div class="alert alert-danger" role="alert" id="alert-fail">
        Periksa kembali username dan password anda
        </div>
        `
        setTimeout(() => {
            document.getElementById("alert-fail").remove()
        }, 2000)
    }
}