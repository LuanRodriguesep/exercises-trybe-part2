"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hobbit_1 = __importDefault(require("./model/hobbit"));
const player_1 = __importDefault(require("./model/player"));
const raceModel_1 = __importDefault(require("./model/raceModel"));
const personagem1 = new raceModel_1.default('Garen');
const hobbit = new hobbit_1.default('Frodo', 2, 10);
const jogador = new player_1.default(100, 10, hobbit);
hobbit.pickUpItem({
    name: 'arco',
    weight: 8
});
hobbit.pickUpItem({
    name: 'punhal',
    weight: 3
});
//console.log(`${personagem2}`);
console.log(jogador);
