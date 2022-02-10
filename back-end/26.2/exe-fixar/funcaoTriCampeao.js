function triDaAmerica(name) {
  const promise = new Promise((resolve, reject) => {
    if (name !== "Palmeiras") reject(new Error('Seu time nao é tri da Libertadores'));

    const campeao = `${name} é tricampeão da America`

    resolve(campeao)
  })

  return promise                       
}

triDaAmerica("Palmeiras")
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message))=EW CX