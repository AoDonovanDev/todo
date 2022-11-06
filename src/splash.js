console.log("beepus");
let loginForm = document.getElementById("loginForm");
let username = document.getElementById("username");
let password = document.getElementById("password");
let userError = document.getElementById("usernameError");
let passError = document.getElementById("passwordError");
let submitBtn = document.getElementById("submit");
let userBoxes = document.querySelectorAll(".userbox");
submit.addEventListener("click", validate);
userBoxes.forEach(element => element.addEventListener("input", updateDom));
function validate(){
    if(username.checkValidity() == false){
        userError.classList.remove("hidden");
        username.style.borderColor = "red";
    };
    if(password.checkValidity() == false){
        passError.classList.remove("hidden");
        password.style.borderColor = "red";
    }
    if(username.checkValidity() == true && password.checkValidity() == true){
        console.log("g2g");
        window.location.href = "./index.html"
    }
}
function updateDom(){
    if(this.checkValidity() == true){
        this.style.borderColor = "green";
        document.getElementById(this.dataset.msg).classList.add("hidden");
    }
}