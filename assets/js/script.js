var cardList = document.querySelector(".pCard-list");

produtos.forEach((produto) => {
  createCards(produto);
});

function buscarProduto() {
  const search = document.getElementById("filter").value.toUpperCase();
  const cards = cardList.getElementsByClassName("pCard");

  for (let i = 0; i < cards.length; i++) {
    let tag = cards[i].querySelector(".card-link .pCard-body span.mug-tag");

    if (tag.innerText.toUpperCase().indexOf(search) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

function createCards(produto) {
  let card = document.createElement("div");

  card.className = "pCard";

  card.innerHTML =
    '<a target="_blank" href="' +
    produto.link +
    '" class="card-link">' +
    '<div class="pCard-img"><img src="assets/images/Produtos/' +
    produto.imagem +
    '"></div>' +
    '<div class="pCard-body">' +
    "<span class='badge bg-dark mug-tag'>" +
    produto.tag +
    "</span>" +
    '<p class="mug-name">' +
    produto.nome +
    "</p>" +
    '<span class="promo">R$ 35,90</span>' +
    "<h5>R$ 29,90</h5></div></a>";

  cardList.appendChild(card);
}
