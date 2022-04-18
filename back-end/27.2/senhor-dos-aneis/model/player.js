"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Usando o generics, para tipar o atributo player, para qualquer cisa que tenha a funca pickUpItem
class Player {
    constructor(_hp, _mp, _player) {
        this._hp = _hp;
        this._mp = _mp;
        this._player = _player;
    }
    pickUpItem(item) {
        this._player.pickUpItem(item);
    }
}
exports.default = Player;
