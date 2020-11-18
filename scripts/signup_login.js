// SCRIPT FOR LOGIN AND SIGNUP STARTS HERE
// LOGIN Button
var form_bg = document.getElementById('id08');
// When the user clicks anywhere outside of the form_bg, close it
window.onclick = function(event) {
  if (event.target == form_bg) {
    form_bg.style.display = "none";
  }
}

//SIGNUP form

function signup() {
  document.getElementById('idlogin').innerHTML = 'Sign Up';
  document.getElementById('forgot_password').style.display = "none";
}

function login() {
  document.getElementById('idlogin').innerHTML = 'Login';
  document.getElementById('forgot_password').style.display = "block";
}
