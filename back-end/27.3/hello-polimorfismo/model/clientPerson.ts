import { IPerson } from "../interface/interfaces";

export default class ClientPerson implements IPerson{
  public name: string;
  
  constructor(){
    this.name = 'Duduzinho'
  }
  
  public identifier(name = this.name): string {
    return `Olá Cliente ${name}, seja bem-vindo`
  }
}