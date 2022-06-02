import { Schema } from "mongoose";

export interface Itimes {
  time: string,
    nascimento: number,
    estado: string,
    jogadores: string[],
    tecnico: string,
    modalidades: string[],
    libertadores: number
}

const timesSchema = new Schema<Itimes>({
  time: { type: String, required: true },
  nascimento: { type: Number },
  estado: String,
  jogadores: [String],
  tecnico: String,
  modalidades: [{ type: String }],
  libertadores: Number
})

export default timesSchema;
