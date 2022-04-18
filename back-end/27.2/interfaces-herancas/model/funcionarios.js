"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const usuarios_1 = require("./usuarios");
class Funcionario extends usuarios_1.Usuario {
    constructor() {
        super();
    }
    getBoasVindas() {
        return 'Olá, ' + super.name;
    }
}
exports.Funcionario = Funcionario;
const funcionario1 = new Funcionario();
funcionario1.name = 'Eduardo';
console.log(funcionario1.getBoasVindas());
