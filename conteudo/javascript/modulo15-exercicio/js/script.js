// Funções de Validação
function validarCampo(elemento) {
  elemento.addEventListener("focusout", function (event) {
    event.preventDefault();
    if (this.value == "") {
      document.querySelector("p").classList.remove("hidden");
      this.classList.add("erro");
      return false;
    } else {
      document.querySelector("p").classList.add("hidden");
      this.classList.remove("erro");
    }
  });
} // Verifica se o campo está preenchido
let camposObrigatorios = document.querySelectorAll("input.obrigatorio");
for (let emFoco of camposObrigatorios) {
  validarCampo(emFoco);
}

//
function validarCampoNumerico(elemento) {
  elemento.addEventListener("focusout", function (event) {
    event.preventDefault();
    if (this.value != "" && this.value.match(/[0-9]*/) && this.value >= 0) {
      document.querySelector("p").classList.add("hidden");
      this.classList.remove("erro");
    } else {
      document.querySelector("p").classList.remove("hidden");
      this.classList.add("erro");
      return false;
    }
  });
} // Verifica se o campo é numérico
let campoNumerico = document.querySelectorAll("input.numerico");
for (let emFoco of campoNumerico) {
  validarCampoNumerico(emFoco);
}

//
function validarEmail(elemento) {
  elemento.addEventListener("focusout", function (event) {
    event.preventDefault();
    const emailValido = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (this.value.match(emailValido)) {
      document.querySelector("p").classList.add("hidden");
      this.classList.remove("erro");
    } else {
      document.querySelector("p").classList.remove("hidden");
      this.classList.add("erro");
      return false;
    }
  });
} // Verifica se o email é válido
let campoEmail = document.querySelectorAll("input.email");
for (let emFoco of campoEmail) {
  validarEmail(emFoco);
}

function validarUf(elemento) {
  elemento.addEventListener("focusout", function (event) {
    event.preventDefault();
    if (this.value != "" && this.value.match(/^[A-Z]{2}$/)) {
      document.querySelector("p").classList.add("hidden");
      this.classList.remove("erro");
    } else {
      document.querySelector("p").classList.remove("hidden");
      this.classList.add("erro");
      return false;
    }
  });
} // Verifica se o UF é válido
let campoUF = document.querySelectorAll("input.uf");
for (let emFoco of campoUF) {
  validarUf(emFoco);
}
