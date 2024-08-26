# Módulo 14 - Exercícios

## 1. Resolva as operações

|| 10 + 15 = 25 `(number)`

|| "10" + 2 = "102" `(string)`

|| "10" \* 2 = 20 `(number)`

|| "10" / 3 = 3.333 `(float)`

|| "10" % 3 = 1 `(number)`

|| 10 + true = 11 `(number)`

|| 10 == "10" = true `(boolean)`

|| 10 === "10" = false `(boolean)`

|| 10 < 11 = true `(boolean)`

|| 10 > 12 = false `(boolean)`

|| 10 <= 10.1 = true `(boolean)`

|| 10 > 9.99 = true `(boolean)`

|| 10 != "dez" = true `(boolean)`

|| 10 + true = 11 `(number)`

---

|| "dez" + true = "deztrue" `(string)`

|| 10 + false = 10 `(number)`

|| 10 * false = 0 `(number)`

|| true + true = 2 `(number)`

|| 10++ = 11 `(number)`

|| 10-- = 9 `(number)`

|| 1 & 1 = 1 `(number)`

|| 1 & 0 = 0 `(number)`

|| 0 & 0 = 0 `(number)`

|| 1 & 0 = 0 `(number)`

|| 0 / 1 = 0 `(number)`

|| 5 + 5 == 10 = true `(boolean)`

|| "5" + "5" == 10 = false `(boolean)`

|| "5" * 2 > 9 = true `(boolean)`

|| (10 + 10) * 2 = 40 `(number)`

|| 10 + 10 * 2 = 30 `(number)`

## 2. Responda as perguntas de acordo com as variáveis
var `branco` = “preto”; ||
var `preto` = “cinza”; ||
var `cinza` = “branco”; ||
var `carro` = “preto”; ||
var `valor` = 30000; ||
var `prestacao` = 750; ||

A) branco == “branco”<br>
R: False

B) branco == cinza<br>
R: False

C) carro === branco<br>
R: True

D) var cavalo = carro == “preto” ? “cinza” : “marron”;<br>
R: 'cinza'

E) Quantas prestações são necessárias para pagar o valor do carro com uma entrada
de 3.000? Demonstre a operação.

```javascript

let valor = 30000;
let prestacao = 750;
let entrada = 3000;

let parcelas = ((valor - entrada) / prestacao);

//parcelas = 36

```
F) Somando as variáveis de cores é formada uma string de quantos caracteres?

```javascript

let branco = 'preto';
let preto = 'cinza';
let cinza = 'branco';

let length = (branco + preto + cinza).toString().length;

//length = 16

```