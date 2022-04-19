import { NameClassPerson } from "./enumPerson";
import { FactoryPerson } from "./factoresPerson";

export class UsageFactory {
   public static client() {
    return FactoryPerson.createPerson(NameClassPerson.CLIENT).identifier()
  }
  public static delivery() {
    return FactoryPerson.createPerson(NameClassPerson.DELIVERY).identifier()
  }
  public static owner() {
    return FactoryPerson.createPerson(NameClassPerson.OWNER).identifier()
  }
}

const criaCliente = UsageFactory.client()
const criaDelivery = UsageFactory.delivery()
const criaOwner = UsageFactory.owner()

console.log(criaCliente);
console.log(criaDelivery);
console.log(criaOwner);