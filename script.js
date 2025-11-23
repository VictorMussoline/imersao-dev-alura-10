let cardContainer = document.querySelector(".card-container");
let dados = [];

async function iniciarBusca() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

function renderizarCards(dados) {
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.ano}</p>
        <p>${dado.plataforma}</p>
        <a href="${dado.link}" target="_blank">Saiba Mais</a>
        `

        cardContainer.appendChild(article);
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("start-overlay");
  const tv = document.getElementById("tv-on");
  const startBtn = document.getElementById("start-btn");
  const startSound = document.getElementById("start-sound");

  tv.addEventListener("animationend", () => tv.remove());

  startBtn.addEventListener("click", () => {
    startSound.currentTime = 0;
    startSound.play();
    overlay.style.transition = "opacity .8s";
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 800);
  });
});
