function calcularMedia(notas) {
  let soma = 0;
  for (c = 0; c < notas.length; c++) {
    soma += notas[c];
  }
  media = soma / notas.length;
  return media;
}

function pegarNotas(notas) {
  let media = calcularMedia(notas); // Escopo da função, visivel somente aqui dentro.

  let condicao = media >= 8 ? "Aprovado" : "Reprovado";

  return "Média: " + media + " - Resultado: " + condicao;
}

document.addEventListener("submit", function (evento) {
  evento.preventDefault();

  let formulario = document.getElementById("form");
  let dados = new FormData(formulario);
  let objt = {};
  let notas = [];

  for (let key of dados.keys()) {
    objt[key] = dados.get(key);
    notas.push(parseInt(dados.get(key)));
  }

  texto = pegarNotas(notas);

  document.getElementById("resultado").innerHTML = texto;
});
