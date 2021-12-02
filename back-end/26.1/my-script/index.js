const readline = require('readline-sync');


const imc = './imc'
const velocidade = './velocidade'
const sorteio = './sorteio'

  let escolhaScript = readline.questionInt('Qual script deseja executar ?, Digite (1) para imc, (2) para o script velocidade e (3) para script sorteio ' )


const executaScript = () => {
  if( escolhaScript === 1){
    escolhaScript = imc
  } else if(escolhaScript === 2){
    escolhaScript = velocidade
  } else if(escolhaScript === 3){
    escolhaScript = sorteio
  } else {
    return console.log('Opção invalida !');
  }
  require(escolhaScript)
}

executaScript()
