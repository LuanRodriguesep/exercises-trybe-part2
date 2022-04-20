import { IReport } from "../interfaces/interfaces";

export abstract class AbstractReport implements IReport{
  protected _nameOfReport: string;

  constructor(){
    this._nameOfReport = ""
  }
 
  get nameOfReport() {
    return this._nameOfReport
  }
  
  set nameOfReport(name: string ) {
    this._nameOfReport = name
  }

  public builderHeader(): string {
    return '[Header of Report]'
  }

  public abstract builderBody(): string
  public abstract builderFooter(): string
}