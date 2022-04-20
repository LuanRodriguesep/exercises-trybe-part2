import { IPerson } from "../interface/interfaces";

export default class DeliveryPerson implements IPerson{
  public name: string;
  
  constructor(){
    this.name = 'Luan'

  }

  public identifier(name = this.name): string {
    return `Olá entregador ${name}, seja bem-vindo`
  }
}