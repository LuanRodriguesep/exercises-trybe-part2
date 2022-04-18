"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor() {
        this._name = '';
        this._password = '';
        this._ativo = true;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set password(password) {
        this._password;
    }
    get password() {
        return this._password;
    }
    set ativo(ativo) {
        this._ativo = ativo;
    }
    get ativo() {
        return this._ativo;
    }
    static getGenerateHash() {
        const number = Math.random().toFixed();
        return this.ID.concat(`${number}H&1234%"&*4321`);
    }
}
exports.Usuario = Usuario;
Usuario.ID = '';
const usuario1 = new Usuario();
// console.log(Usuario.ID);
// metodos staticos são acessados pela CLASSE, e não pelo OBJETO
