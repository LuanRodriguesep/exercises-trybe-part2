function meuFilho(name) {
  const promise = new Promise((resolve,reject) => {
    if(name != "Eduardo") reject (new Error("Não é filho do Luan"));

    const resultado = "Eduardo é filho do Luan";

    resolve(resultado);
  });

  return promise;
}

meuFilho("Eduardo")
  .then((result) => console.log(result))
  .catch(err => console.log(err.message))