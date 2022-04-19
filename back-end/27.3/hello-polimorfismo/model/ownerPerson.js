"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OwnerPerson {
    constructor(name) {
        this.name = name;
    }
    identifier(name = this.name) {
        return `Olá Dona ${name}, seja bem-vindo`;
    }
}
exports.default = OwnerPerson;
