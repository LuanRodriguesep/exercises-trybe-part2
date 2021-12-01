const readline = require('readline-sync');


const jogarNovamente = () => {
  const jogarNovamente = readline.question('Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não)')
  if(jogarNovamente !== 's'){
    return console.log('Tudo bem, ate a proxima');
  }
  sorteio()
}

const sorteio = () => {
  const numeroSorteado = Math.floor(Math.random() * 10 + 1)
  const numeroJogador = readline.questionInt('Escolha um numero de 0 a 10: ')

  if(numeroJogador !== numeroSorteado) {
    return console.log(`Não foi dessa vez, o numero sorteado era ${numeroSorteado}`);
  }

  console.log('Parabens ! Você adivinhou o numero !')
  jogarNovamente()
}

sorteio()