// 1 - Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
// A fórmula para calcular o IMC é peso / altura ^ 2 .
// Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
// Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
// Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
// Armazene o script no arquivo imc.js .

const readline = require('readline-sync');

const calculaImc = () => {
  const peso = readline.questionFloat('Qual o seu peso ? em (Kg)')
  const altura = readline.questionInt('Qual é a sua altura ? (cm)')

  console.log(`Seu peso é ${peso} e sua altura é de ${altura}`)

  const imc = (peso / Math.pow(altura / 100 , 2 )).toFixed(2)

  console.log(`IMC: ${imc}`);

  if(imc < 18.5){
    console.log('Abaixo do peso (magreza)')
  } else if (imc >= 18.5 && imc <= 24.9 ) {
    console.log('Peso Normal')
  } else if (imc >= 25.0 && imc <= 29.9 ) {
    console.log('Acima do peso (sobrepeso)')
  } else if (imc >= 30.0 && imc <= 34.9 ) {
    console.log('Obesidade (grau I)')
  } else if (imc >= 35.0 && imc <= 39.9 ) {
    console.log('Obesidade (grau II)')
  } else {
    console.log('Obesidade graus III e IV')
  }
}

calculaImc();


// 2 - Agora, permita que o script seja executado através do comando npm run imc
// O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js .

