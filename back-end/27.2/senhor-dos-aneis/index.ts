import Hobbit from './model/hobbit';
import Player from './model/player';
import Race from './model/raceModel';

const personagem1: Race = new Race('Garen')

const hobbit: Hobbit = new Hobbit('Frodo', 2, 10);

const jogador = new Player<Race>(100, 10, hobbit)

hobbit.pickUpItem({
  name: 'arco',
  weight: 8
})

hobbit.pickUpItem({
  name: 'punhal',
  weight: 3
})

//console.log(`${personagem2}`);

console.log(jogador);
