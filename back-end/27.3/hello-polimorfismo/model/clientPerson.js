"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientPerson {
    constructor() {
        this.name = 'Duduzinho';
    }
    identifier(name = this.name) {
        return `Olá Cliente ${name}, seja bem-vindo`;
    }
}
exports.default = ClientPerson;
