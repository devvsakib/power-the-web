//  github-username: abhiraj-ku
// github-link: https://github.com/abhiraj-ku 
var pass=document.getElementById("password");

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 7;
    var password = "";
   for (var i = 0; i <= passwordLength; i++) {

    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
  pass.value = password;
 }

        