import { IPerson } from "../interface/interfaces";
import ClientPerson from "../model/clientPerson";
import DeliveryPerson from "../model/deliveryPerson";
import OwnerPerson from "../model/ownerPerson";
import { NameClassPerson } from "./enumPerson";
const { CLIENT, DELIVERY, OWNER } = NameClassPerson;

export class FactoryPerson {
  public static createPerson(type: string): IPerson {
    if(type === CLIENT) {
      return new ClientPerson()
    } else if (type === DELIVERY) {
      return new DeliveryPerson()
    } else if (type === OWNER) {
      return new OwnerPerson('Amora')
    }
    return null as unknown as IPerson // solucao para eliminar o erro, da obrigatoriedeade de return na interface IPerson, aprendi na aula 27.3 Calaça T14C
  }
}

const objFactoryCliente = FactoryPerson.createPerson(CLIENT)
const objFactoryDelivery = FactoryPerson.createPerson(DELIVERY)
const objFactoryOwner2 = FactoryPerson.createPerson(OWNER)

objFactoryCliente.name = "Duduzinho"
objFactoryDelivery.name = 'Luan'


console.log(objFactoryCliente);
console.log(objFactoryDelivery);
console.log(objFactoryOwner2);
