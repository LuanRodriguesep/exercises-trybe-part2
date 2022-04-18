import { IItemDTO } from "./item";

export interface IPlayer {
  pickUpItem(item: IItemDTO): void;
}