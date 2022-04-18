import { IItemDTO } from "../interface/item";
import Race from "./raceModel";

export default class Hobbit extends Race {
  constructor(
    name: string,
    private _furtividade: number,
    private _cargamax: number
    ) {
    super(name);
    this._lingua.push('Grego')
  }
  public pickUpItem(item: IItemDTO): void {
    const quantInventario = this.inventario.reduce(
      (acc, curr) => acc + curr.weight, 0
      );

      if (quantInventario + item.weight <= this._cargamax) {
        super.pickUpItem(item);
      } else {
        console.log(` Não há espaço no inventario `);
        
      }
  }
}