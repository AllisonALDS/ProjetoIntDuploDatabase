// Importação da base de dados e das funçoes


import { database } from "./database2.js";
import { getProdId, loadProducts} from "./functions.js";

// -------- Variaveis do projeto ------------------------
const sectionTeste = document.querySelector("#section-5 .carrousel")


//Fitros
let filtroCategoriaTeste = database.filter(produto => produto.classificacaoProduto === "Teste" && produto.exibirHome == true )


//Funçoes com parametros
loadProducts(filtroCategoriaTeste,sectionTeste);
getProdId()








// ------- carrousel de imagens home -------------------

document.querySelectorAll('.section-product').forEach( carrousel => {
const productCarousel = carrousel.querySelector('.carrousel');
const prevBtn = carrousel.querySelector('.prev');
const nextBtn = carrousel.querySelector('.next');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
  scrollAmount += 340; // Largura do produto + margem
  if (scrollAmount > productCarousel.scrollWidth - carrousel.offsetWidth) {
    scrollAmount = productCarousel.scrollWidth - carrousel.offsetWidth;
  }
  productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
  scrollAmount -= 340; // Largura do produto + margem
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
  productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
});
})