function meuFilho(name) {
  if (name != "Eduardo") throw new Error('Não é filho do Luan e da Karol');

  const resultado = "Eduardo";

  return resultado;
}

try{
  const resultado = meuFilho("Amora");
  console.log("Eduardo é filho do Luan e da Karol")
} catch (e) {
  console.log("erro: %s", e.message);
}