var direita = window.document.getElementById("direita")
var esquerda = window.document.getElementById("esquerda")
var bruna = window.document.getElementById("bruna")
var leo = window.document.getElementById("leo")
var sam = window.document. getElementById("sam")


function rolarParaDireita() {
bruna.style = "display:none"  
sam.style = "display:flex"
esquerda.style = "display:flex"
direita.style = "display:none"
}
function rolarParaEsquerda() {
sam.style = "display:none"
bruna.style = "display:flex"
direita.style = "display:flex"
esquerda.style = "display:none"
}