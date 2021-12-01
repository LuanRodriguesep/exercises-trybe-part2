const readline = require('readline-sync');

const velocidadeUsada = () => {
  const distancia = readline.questionInt('Qual é a distancia percorrida ? (metros)');

  const tempo = readline.questionInt('Qual é a tempo utilizado ? (segundos)');

  const velocidade = (distancia / tempo).toFixed(2);

  console.log(`Velocidade: ${velocidade} m/s`);
}

velocidadeUsada();
