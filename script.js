function atualizarContador() {
  var contadorElemento = document.getElementById("contadorValor");
  var contadorAtual = parseInt(contadorElemento.textContent);
  contadorAtual++;
  contadorElemento.textContent = contadorAtual;
}

setInterval(atualizarContador, 12000);
