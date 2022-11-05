console.log("beepus");
let loginForm = document.getElementById("loginForm");
let username = document.getElementById("username");
let password = document.getElementById("password");
let userError = document.getElementById("usernameError");
let passError = document.getElementById("passwordError");
let submitBtn = document.getElementById("submit");
submit.addEventListener("click", validate);
function validate(){
    if(username.checkValidity() == false){
        userError.classList.toggle("hidden");
        username.classList.add("errorBorder");
    };
    if(password.checkValidity() == false){
        passError.classList.toggle("hidden");
        password.classList.add("errorBorder");
    }
    if(username.checkValidity() == true && password.checkValidity() == true){
        console.log("g2g");
    }
}