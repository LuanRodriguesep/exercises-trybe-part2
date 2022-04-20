"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeliveryPerson {
    constructor() {
        this.name = 'Luan';
    }
    identifier(name = this.name) {
        return `Olá entregador ${name}, seja bem-vindo`;
    }
}
exports.default = DeliveryPerson;
