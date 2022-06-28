const usuario = document.getElementById("nombres")
const password = document.getElementById("nombres")
const incorrect = document.querySelector(".incorrect")
const buttons = [...document.querySelectorAll(".controls")];
console.log

let users = {
    usuario: "123",
    password: "123"
}


function login() {
    let us = usuario.value
    let pass = password.value
    console.log(us + pass)
    if (us.includes(users.usuario) && pass.includes(users.password)) {
        console.log("incluye")
        location.href ="ingreso.html";

    }   else {
        console.log("No incluye")
        incorrect.removeAttribute("hidden")
        buttons[0].classList.add("controlsfail")
        buttons[1].classList.add("controlsfail")
    }
    
}
