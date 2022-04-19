import { IPerson } from "../interface/interfaces";

export default class OwnerPerson implements IPerson{
  public name: string;
  
  constructor(name: string ){
    this.name = name
  }

  public identifier(name = this.name): string {
    return `Olá Dona ${name}, seja bem-vindo`
  }
}