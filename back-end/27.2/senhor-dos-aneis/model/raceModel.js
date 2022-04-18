"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Race {
    constructor(name) {
        this._name = name;
        this._altura = this.getRandomAltura(2.1, 0.6);
        this._lingua = ['Portugues'];
        this._inventario = [{ name: 'rock', weight: 0.1 }];
    }
    get name() { return this._name; }
    get altura() { return this._altura; }
    get inventario() { return this._inventario; }
    get lingua() { return this._lingua; }
    pickUpItem(item) {
        this._inventario.push(item);
        console.log(`${item.name}, adicionado ao seu inventario`);
    }
    getRandomAltura(max, min) {
        return parseFloat((Math.random() * (max - min) + min)
            .toFixed(2));
    }
    toString() {
        return ` Personagem ${this._name}, fala no idioma ${this._lingua}, e tem ${this._altura} de altura`;
    }
}
exports.default = Race;
// const mago: Race = new Race('Valdivia')
// mago.pickUpItem({name: 'Espada', weight: 2.1})
// console.log(mago);
