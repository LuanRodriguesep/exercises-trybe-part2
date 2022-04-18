export class Usuario implements IUsuarioDTO {
  static ID: string = '';
  private _name: string;
  private _password: string;
  protected _ativo: boolean;

  constructor() {
    this._name = ''
    this._password = ''
    this._ativo = true
  }

  set name(name: string){
    this._name = name
  }

  get name(){
    return this._name
  }

  set password(password: string){
    this._password
  }

  get password(){
    return this._password
  }

  protected set ativo(ativo: boolean){
    this._ativo = ativo
  }

  protected get ativo(){
    return this._ativo
  }


  public static getGenerateHash(): string{
    const number = Math.random().toFixed();
    return this.ID.concat(`${number}H&1234%"&*4321`)
  }
  
}

const usuario1: Usuario = new Usuario();

// console.log(Usuario.ID);


// metodos staticos são acessados pela CLASSE, e não pelo OBJETO