/* Tela de login*/

function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    
    if (login == "admin" && senha == "admin") {
        alert("Login efetuado.");
        location.href = "/Perfil/Perfil.html";
        
    } else {
        alert("Nome de usuário ou senha incorretos. Por favor, tente novamente.")
    }
}

/*Tela Cadastro*/

function Cadastrar() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    
    if (senha == confirmarSenha) {
        alert("Cadastro Realizado.");
        location.href = "/Perfil/Perfil.html";

    } else {
        alert("As senhas são diferentes.Tente novamente")
    }
}


/*---------*/

/* Estiilização do carrosel*/

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length -1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 800}px)`;

}

setInterval(carrossel, 1800);

