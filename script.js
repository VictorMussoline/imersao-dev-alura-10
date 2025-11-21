let cardContainer = document.querySelector(".card-container");
let searchInput = document.querySelector("input[type='text']");
let dados = [];

async function carregarDados() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

function iniciarBusca() {
    let termoBusca = searchInput.value.toLowerCase();
    let dadosFiltrados = dados.filter(dado => dado.nome.toLowerCase().includes(termoBusca));
    renderizarCards(dadosFiltrados);
}

function renderizarCards(dadosParaRenderizar) {
    cardContainer.innerHTML = "";
    for (let dado of dadosParaRenderizar) {
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

window.onload = carregarDados;