(()=>{console.log("beepus"),document.getElementById("loginForm");let e=document.getElementById("username"),t=document.getElementById("password"),d=document.getElementById("usernameError"),o=document.getElementById("passwordError"),n=(document.getElementById("submit"),document.querySelectorAll(".userbox"));function s(){1==this.checkValidity()&&(this.style.borderColor="green",document.getElementById(this.dataset.msg).classList.add("hidden"))}submit.addEventListener("click",(function(){0==e.checkValidity()&&(d.classList.remove("hidden"),e.classList.add("errorBorder")),0==t.checkValidity()&&(o.classList.remove("hidden"),t.classList.add("errorBorder")),1==e.checkValidity()&&1==t.checkValidity()&&(console.log("g2g"),window.location.href="./index.html")})),n.forEach((e=>e.addEventListener("input",s)))})();