

let imagem = document.querySelector(".imagem-copo")

function trocaImagem(trocaImagem) {
    imagem.src = trocaImagem
    console.log("Chamar")
}

let circulo = document.querySelector('.circulo')

function trocaCor(cor) {
    circulo.style.background = cor
}
