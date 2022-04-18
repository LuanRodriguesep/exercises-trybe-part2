"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const raceModel_1 = __importDefault(require("./raceModel"));
class Hobbit extends raceModel_1.default {
    constructor(name, _furtividade, _cargamax) {
        super(name);
        this._furtividade = _furtividade;
        this._cargamax = _cargamax;
        this._lingua.push('Grego');
    }
    pickUpItem(item) {
        const quantInventario = this.inventario.reduce((acc, curr) => acc + curr.weight, 0);
        if (quantInventario + item.weight <= this._cargamax) {
            super.pickUpItem(item);
        }
        else {
            console.log(` Não há espaço no inventario `);
        }
    }
}
exports.default = Hobbit;
