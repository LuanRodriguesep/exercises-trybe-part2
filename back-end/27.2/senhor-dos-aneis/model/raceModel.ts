import { IItemDTO } from "../interface/item";


export default class Race {
  private _name: string;
  private _altura: number;
  protected _lingua: string[];
  private _inventario: IItemDTO[];

  constructor(name: string ) {
    this._name = name;
    this._altura = this.getRandomAltura(2.1, 0.6);
    this._lingua = ['Portugues'];
    this._inventario = [{ name: 'rock', weight: 0.1 }];
  }

  get name() { return this._name }
  get altura() { return this._altura }
  get inventario() { return this._inventario }
  get lingua() { return this._lingua }
 
  public pickUpItem(item: IItemDTO): void {
    this._inventario.push(item);
    console.log(`${item.name}, adicionado ao seu inventario`);
    
  }


  getRandomAltura(max: number, min: number) {
    return parseFloat((Math.random() * (max - min) + min)
      .toFixed(2))
  }

  toString(): string {
    return ` Personagem ${ this._name }, fala no idioma ${ this._lingua }, e tem ${this._altura} de altura`
  }

}

// const mago: Race = new Race('Valdivia')

// mago.pickUpItem({name: 'Espada', weight: 2.1})


// console.log(mago);
