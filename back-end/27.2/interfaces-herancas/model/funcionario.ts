import { Usuario } from "./usuario";

export class Funcionario extends Usuario {
  
  constructor() {
    super()
  }

  public getBoasVindas(): string {
    return 'Olá, ' + super.name
  }

  getAtivo(): boolean | string {
    return `O usuario ` + super.name  + ` esta com status ` + super.ativo
  }
}

const funcionario1: Funcionario = new Funcionario()

funcionario1.name = 'Eduardo'

console.log(funcionario1.getAtivo())

console.log(Funcionario.getGenerateHash())