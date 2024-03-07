
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


/*Renderização da aba vagas*/

const arrayPostagens1 = [
    {
      empresa: "Amazon", 
      cargo: "front-end",
      data: "11/11/2021",
      descricao: "Buscamos um Front-end Developer altamente talentoso para se juntar à nossa equipe." +
                 "A pessoa será responsável por traduzir requisitos de design e experiência do usuário" +
                 "em código,trabalhando em colaboração com os membros da equipe de design e back-end."
    },

    {
      empresa: "Amazon", 
      cargo: "front-end",
      data: "11/11/2021",
      descricao: "Buscamos um Front-end Developer altamente talentoso para se juntar à nossa equipe." +
                 "A pessoa será responsável por traduzir requisitos de design e experiência do usuário" +
                 "em código,trabalhando em colaboração com os membros da equipe de design e back-end."
    },

    {
      empresa: "Amazon", 
      cargo: "front-end",
      data: "11/11/2021",
      descricao: "Buscamos um Front-end Developer altamente talentoso para se juntar à nossa equipe." +
                 "A pessoa será responsável por traduzir requisitos de design e experiência do usuário" +
                 "em código,trabalhando em colaboração com os membros da equipe de design e back-end."
    },

  
  ];
  
  arrayPostagens1.forEach(function(post){
    const novoPost = document.createElement("article");
    novoPost.classList.add("primeiro-array");
  
    novoPost.innerHTML = `
      <h3>Empresa : ${post.empresa} <p></p>Cargo : ${post.cargo}</h3>
      <p>Data da Publicação : ${post.data}</p><br>
      <div >${post.descricao}</div><br>
      <div id="candidatar">
        <ul>
          <li><a href="/candidatar-se.html/">CANDIDATAR-SE</a></li>
        </ul>
      </div>`
  
    const elementoMain = document.querySelector("main");
  
    elementoMain.appendChild(novoPost);
  });


  /*Renderização da aba Minhas candidaturas*/

  const arrayPostagens2 = [
    {
      empresa: "Amazon", 
      cargo: "Front-end",
      data: "11/11/2021",
      estado: "Paraíba",
      area:"TI",
      modelo:"Híbrido",
      salario:"R$ 1.000"
    },

    {
      empresa: "Amazon", 
      cargo: "Front-end",
      data: "11/11/2021",
      estado: "Paraíba",
      area:"TI",
      modelo:"Híbrido",
      salario:"R$ 1.000"
    },

    {
      empresa: "Amazon", 
      cargo: "Front-end",
      data: "11/11/2021",
      estado: "Paraíba",
      area:"TI",
      modelo:"Híbrido",
      salario:"R$ 1.000"
    },

  
  ];


  arrayPostagens2.forEach(function(post){
    const novoPost = document.createElement("article");
    novoPost.classList.add("segundo-array");
  
    novoPost.innerHTML = `
      <h4>Empresa : ${post.empresa} <p></p>Cargo : ${post.cargo}</h4>
      <p id="data">Inscrição : ${post.data} </p><br>
      <p>Estado : <span style="margin-right: 100px;">${post.estado}</span> Área de Atuação: ${post.area}</p>
      <p>Modelo : <span style="margin-right: 95px;">${post.modelo}</span>Salário: ${post.salario} </p>
      <p id="andamento">Andamento do Processo</p>
      <div id="acessar">
         <ul style="list-style: none;">
            <li id="acessar"><a href ="acessar.html/">ACESSAR</a></li>
         </UL>
      </div>
      <div id="desistir">
        <ul style="list-style: none;">
          <li id="desistir"><a href ="desistir.html/">DESISTIR</a></li>
        </UL>
      </div>
    <div class="conteudo">
       <div class ="contador " > 100%</div>
       <div class="barra-progresso" >
          <div class="progresso"> </div>
       </div>
     </div>`
  
    const elementoMain = document.querySelector("main");
  
    elementoMain.appendChild(novoPost);
  });

/*Estilização da barra de progresso*/


const contador = document.querySelector('.contador')
const progresso = document.querySelector('.progresso')

var conta = 4
var progress = 16

const loading = setInterval(load, 100)

function load(){
    if(conta == 100 && progress == 400){
        clearInterval(loading)
        contador.classList.add('efeito_txt')
        progresso.classList.add('efeito_txt')
        progresso.classList.add('active')

    }
    else{
        conta += 1
        progress += 4
        contador.textContent = conta + '%'
        progresso.style.width = progress + 'px'
    }
}
