"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageFactory = void 0;
const enumPerson_1 = require("./enumPerson");
const factoresPerson_1 = require("./factoresPerson");
class UsageFactory {
    static client() {
        return factoresPerson_1.FactoryPerson.createPerson(enumPerson_1.NameClassPerson.CLIENT).identifier();
    }
    static delivery() {
        return factoresPerson_1.FactoryPerson.createPerson(enumPerson_1.NameClassPerson.DELIVERY).identifier();
    }
    static owner() {
        return factoresPerson_1.FactoryPerson.createPerson(enumPerson_1.NameClassPerson.OWNER).identifier();
    }
}
exports.UsageFactory = UsageFactory;
const criaCliente = UsageFactory.client();
const criaDelivery = UsageFactory.delivery();
const criaOwner = UsageFactory.owner();
console.log(criaCliente);
console.log(criaDelivery);
console.log(criaOwner);
