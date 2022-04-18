import { IPlayer } from "../interface/interplayer";
import { IItemDTO } from "../interface/item";
import Race from "./raceModel";


// Usando o generics, para tipar o atributo player, para qualquer cisa que tenha a funca pickUpItem
export default class Player<T extends IPlayer> implements IPlayer {
  constructor(
    private _hp: number,
    private _mp: number,
    private _player: T,
  ) { }
  pickUpItem(item: IItemDTO): void {
    this._player.pickUpItem(item)
  }
}