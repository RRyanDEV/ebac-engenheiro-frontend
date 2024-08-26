var alunos = [
  [4, 6, 7, 8], // Reprovado
  [8, 8, 7, 9], // Aprovado
  [9, 6, 6, 3], // Reprovado
  [10, 10, 5, 4], // Aprovado
];

var nota = 0;

// for([ExpressãoInicial]; [Condição]; [Incrimento];)

for (var i = 0; i < alunos.length; i++) {
  // Esse FOR percorre a quantidade de alunos

  nota = 0;
  notasAluno = alunos[i];
  console.log("Aluno: " + parseInt(i + 1));
  console.log("Notas: " + notasAluno);

  for (c = 0; c < notasAluno.length; c++) {
    // Esse FOR percorre as notas de cada aluno

    nota += notasAluno[c];
  }

  media = nota / 4;

  if (media >= 7) {
    resultado = "Aprovado";
  } else {
    resultado = "Reprovado";
  }

  console.log("Média: " + media + " - " + resultado + " \n");
}
