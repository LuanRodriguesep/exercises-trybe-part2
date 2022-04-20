"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryPerson = void 0;
const clientPerson_1 = __importDefault(require("../model/clientPerson"));
const deliveryPerson_1 = __importDefault(require("../model/deliveryPerson"));
const ownerPerson_1 = __importDefault(require("../model/ownerPerson"));
const enumPerson_1 = require("./enumPerson");
const { CLIENT, DELIVERY, OWNER } = enumPerson_1.NameClassPerson;
class FactoryPerson {
    static createPerson(type) {
        if (type === CLIENT) {
            return new clientPerson_1.default();
        }
        else if (type === DELIVERY) {
            return new deliveryPerson_1.default();
        }
        else if (type === OWNER) {
            return new ownerPerson_1.default('Amora');
        }
        return null; // solucao para eliminar o erro, da obrigatoriedeade de return na interface IPerson, aprendi na aula 27.3 Calaça T14C
    }
}
exports.FactoryPerson = FactoryPerson;
const objFactoryCliente = FactoryPerson.createPerson(CLIENT);
const objFactoryDelivery = FactoryPerson.createPerson(DELIVERY);
const objFactoryOwner2 = FactoryPerson.createPerson(OWNER);
objFactoryCliente.name = "Duduzinho";
objFactoryDelivery.name = 'Luan';
console.log(objFactoryCliente);
console.log(objFactoryDelivery);
console.log(objFactoryOwner2);
