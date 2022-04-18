"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const usuario_1 = require("./usuario");
class Funcionario extends usuario_1.Usuario {
    constructor() {
        super();
    }
    getBoasVindas() {
        return 'Olá, ' + super.name;
    }
    getAtivo() {
        return `O usuario ` + super.name + ` esta com status ` + super.ativo;
    }
}
exports.Funcionario = Funcionario;
const funcionario1 = new Funcionario();
funcionario1.name = 'Eduardo';
console.log(funcionario1.getAtivo());
console.log(Funcionario.getGenerateHash());
