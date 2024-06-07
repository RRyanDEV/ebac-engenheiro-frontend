function obterMedia() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  let c = parseInt(document.getElementById("c").value);

  let media = (a + b + c) / 3;

  
  document.getElementById("resultados").innerHTML = "Resultado: " + (media.toFixed(3));
}
