function calculaDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error('Não pode dividir o numero por zero'));

    const resultado = num1 / num2;

    resolve(resultado);
  })
  return promise;
}

calculaDivisao(10, 0)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message))