let cardContainer = document.querySelector(".card-container");
let dados = [];

async function carregarDados() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

carregarDados();

function iniciarBusca() {
    let busca = document.querySelector('input[type="text"]').value.toLowerCase();
    let dadosFiltrados = dados.filter(dado => dado.nome.toLowerCase().includes(busca));
    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <div class="card-info">
            <h2>${dado.nome}</h2>
            <p>${dado.ano}</p>
            <p>${dado.plataforma}</p>
            <a href="${dado.link}" target="_blank">Saiba Mais</a>
        </div>
        ${dado.imagem ? `<img src="${dado.imagem}" class="card-image" alt="Imagem do jogo ${dado.nome}">` : ''}
        `

        cardContainer.appendChild(article);
    }
}