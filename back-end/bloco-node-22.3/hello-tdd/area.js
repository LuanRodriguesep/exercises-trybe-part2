const readLine = require('readline-sync');

const area = () => {
  const side = readLine.questionInt('Qual o lado do quadrado ? \n');

  if (side < 0) {
    throw Error('Valor invalido')
  }

  return Math.pow(side, 2);
}

module.exports = area;