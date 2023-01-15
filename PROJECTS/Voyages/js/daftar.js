const password = document.getElementById("key");
const username = document.getElementById("username")
const email = document.getElementById("email");
const submitButton = document.querySelector("#btn-submit");
const validationFeedback = document.querySelector(".feedback")

const cekLowerCase = /[a-z]/;
const cekUppercase = /[A-Z]/;
const cekSimbol = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
const cekNumber = /[0-9]/;

password.addEventListener('keyup',function cekPassword(e){
    e.preventDefault();
    // console.log(password.value);
    let validation = "";
    if (password.value.length < 8) {
        validation += "*password harus memiliki 8 karakter";
        // console.log(validation)
    }
    else if (!password.value.match(cekLowerCase)) {
        validation += "*tambahkan huruf kecil ke dalam password";
    }
    else if (!password.value.match(cekUppercase)) {
        validation += "*tambahkan huruf kapital ke dalam password";
    }
    else if (!password.value.match(cekSimbol)) {
        validation += "tambahkan simbol ke dalam password";
    }
    else if (!password.value.match(cekNumber)) {
        validation += "tambahkan angka ke dalam password";
    }
    validationFeedback.innerHTML = validation;
})


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


function saveData(e){
    e.preventDefault();
    // console.log("hai");
    let data = {
        'username': username.value,
        'email': email.value,
        'password': password.value,
    };
    localStorage.setItem('data', JSON.stringify(data));
    window.location = "./login.html"
    // showLogin();
}


