function numbers(x, y, z) {
  return new Promise((resolve, reject ) => {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number')
    reject('Informe apenas numeros');

    const result = (x + y) * z;

    if (result < 50 ) {
      return reject('Valor muito baixo');
    }

    resolve(result);

  })
}

numbers(10, 2, 2)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

  numbers(10, 2, "edoc")
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

  numbers(200, 4, 2)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

  module.exports = {
    numbers
  }