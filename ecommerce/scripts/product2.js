
import { database } from "./database2.js";
import { findProduct, loadProduct } from "./functions.js"; 


let id = localStorage.getItem('prodId') 
let listaCompras = JSON.parse(localStorage.getItem('listaCompras')) 


if (listaCompras == null || listaCompras.length == 0){
    listaCompras = []
}

let produto = findProduct(database,id)
let selecaoProduto = document.querySelector(".grid_col_1") 

let produto2 = findProduct(database,id)
let selecaoProduto2 = document.querySelector(".grid_col_1") 



loadProduct(produto,selecaoProduto) 
loadProduct(produto2,selecaoProduto2) 

let botaoComprar = document.querySelector(".product_price_container button") 


botaoComprar.addEventListener('click',()=>{
    let quantity = parseInt(document.querySelector("#quantity").value) 
    produto.quantity = quantity
    listaCompras.push(produto)
    alert("Produto adicionado com sucesso!")
    localStorage.setItem('listaCompras',JSON.stringify(listaCompras))
    console.log(listaCompras)
    window.location = "./checkout.html"
})
